import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, platform }) => {
		const data = await request.formData();
		const name = data.get('name')?.toString().trim();
		const email = data.get('email')?.toString().trim();
		const message = data.get('message')?.toString().trim();

		if (!name || !email || !message) {
			return fail(400, {
				error: 'Please fill in all fields.',
				name: name ?? '',
				email: email ?? '',
				message: message ?? ''
			});
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return fail(400, {
				error: 'Please enter a valid email address.',
				name,
				email,
				message
			});
		}

		const apiKey = platform?.env?.BREVO_API_KEY;
		if (!apiKey) {
			console.error('BREVO_API_KEY is not configured');
			return fail(500, {
				error: 'Something went wrong. Please try again later.',
				name,
				email,
				message
			});
		}

		try {
			const response = await fetch('https://api.brevo.com/v3/smtp/email', {
				method: 'POST',
				headers: {
					'accept': 'application/json',
					'content-type': 'application/json',
					'api-key': apiKey
				},
				body: JSON.stringify({
					sender: { name: 'Unfolding You Website', email: 'noreply@unfoldingyou.com' },
					to: [{ email: 'info@unfoldingyou.com', name: 'Unfolding You' }],
					replyTo: { email, name },
					subject: `New enquiry from ${name}`,
					htmlContent: `
						<h2>New Contact Enquiry</h2>
						<p><strong>Name:</strong> ${name}</p>
						<p><strong>Email:</strong> ${email}</p>
						<p><strong>Message:</strong></p>
						<p>${message.replace(/\n/g, '<br>')}</p>
					`
				})
			});

			if (!response.ok) {
				const errorBody = await response.text();
				console.error('Brevo API error:', response.status, errorBody);
				return fail(500, {
					error: 'Something went wrong. Please try again later.',
					name,
					email,
					message
				});
			}

			return { success: true };
		} catch (err) {
			console.error('Failed to send email:', err);
			return fail(500, {
				error: 'Something went wrong. Please try again later.',
				name,
				email,
				message
			});
		}
	}
};
