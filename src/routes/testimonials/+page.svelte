<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const testimonials = [
		{
			name: 'Achim Heine',
			quote:
				'Rienkje helped me regain a better overview of my life, not just work but all important activities. Seeing everything as important is helpful. But for me, as someone with ADHD, renewed focus is needed. Regaining overview and making clear, yet not merciless, decisions about how to continue my business activities and networking gave me a sense of direction and purpose. Of course, not all problems are solved, but it feels like someone is helping to solve this riddle that is my career, which felt intensely good and useful. Also, Rienkje takes into consideration what type of person I am and knows how to unlock my potential with fitting words and exercises.'
		},
		{
			name: 'Lisa Williams',
			quote:
				"Working with Rienkje has been a bit of an eye-opening experience for me. I genuinely didn't even realize how much I needed a coach until my sessions with Rienkje. I'm so grateful to be able to sort through things, truly be guided, and have that guidance to apply practically to my business and life. It was genuinely a pleasure all around."
		},
		{
			name: 'Kenya Simpson Martin',
			quote:
				'Working with Rienkje has been truly transformative for me. Her coaching was deeply impactful from the very beginning. She met me exactly where I was, without judgement, and held up a mirror that helped me see both my current reality and the possibilities ahead of me.\n\nHer authenticity created a space where I felt completely safe to explore, reflect, and grow. Because of that, I was able to focus on becoming the best version of myself, not the version I thought others wanted me to be. I cannot recommend her coaching highly enough.'
		},
		{
			name: 'Diana Fusli',
			quote:
				"In all three coaching sessions I had with Rienkje, I appreciated the space she created for me, which was warm and welcoming. I have been dealing with some career and life confusion as of late, and she allowed me to navigate my thoughts without pressure or judgment. Her approach is more holistic than focusing on only one aspect. What impressed me the most was her willingness to share personal aspects of her own journey, which inspired me to look at mine from a different perspective. I'm grateful for our connection and the lessons learned thanks to her."
		},
		{
			name: 'Leoni Caines',
			quote:
				'I wanted to thank you for your time last year and the care you put into providing me with a safe space to explore my thinking, assess my behaviours, and really open my heart to release what felt heavy. That soothing space you provided over our coaching sessions really continued for me, in a way that gave me permission to keep doing that for myself.'
		},
		{
			name: 'Kenesha Caines',
			quote:
				'Working with Rienkje has provided clarity about my capabilities and progression. I felt stuck in my career path, and I now feel focused and confident. What I valued most was talking through my path to progression in a safe space. Working with Rienkje also highlighted other areas of development. I now feel clearer about the path to my next level.'
		},
		{
			name: 'Rasheida Adrianus',
			quote:
				"Rienkje's calm and open presence made me feel at ease with her almost immediately. She truly listens and takes her time, which made every conversation feel focused and supportive. With her guidance, I was able to significantly strengthen and refine my TV series in ways I would not have managed on my own. Rather than simply giving feedback, she asked thoughtful, precise questions that helped me see my work from a new perspective and recognize where it could be improved. Her questions helped uncover the core of my story. She guided me in clarifying what I genuinely wanted to communicate and how to express it clearly and directly. I genuinely looked forward to every session because I always left with clearer direction, new insights, and tangible improvements to my work."
		},
		{
			name: 'ZuBeDa Portia',
			quote:
				"I really enjoyed my coaching sessions with Rienkje. I'm at a crossroads in my career, and the challenge was that I had so much on my mind, past and present options plus fears. I felt overwhelmed and unsure how to narrow things down. I needed someone I could trust to talk it through with, someone who could help me sort through my options and unpack some of the fears that were coming up. Our sessions really did that for me. Rienkje has a calm, grounded way of listening that makes you feel safe to be honest. She didn't tell me what to do. Instead, she helped me hear myself more clearly. She asked the right questions, challenged me gently, and helped me scale down the noise so I could focus on what matters. After each session, I felt lighter and more rejuvenated instead of scared of the future. I still don't have a final answer about which path I'll take, but I now feel clear and confident about the options in front of me. I can articulate where I'm at and what I want."
		},
		{
			name: 'Joana Almeida',
			quote:
				'From our very first session, Rienkje created a safe and supportive space where I could openly reflect. Through her calm and insightful guidance, I gradually gained clarity about my purpose and direction. She helped me organize my thoughts, define meaningful goals, and reconnect with what truly matters to me. What once felt overwhelming became clear and structured. Rienkje helped me align my daily activities with my priorities, allowing me to focus on what genuinely supports my goals instead of feeling constantly busy yet unfulfilled.'
		},
		{
			name: 'Ricarda Frazen',
			quote:
				'Rienkje had the most organic way of playing the ball of responsibility back into my court, just when I had not even understood I needed it.'
		}
	];
</script>

<svelte:head>
	<title>Testimonials — Unfolding You</title>
	<meta
		name="description"
		content="Testimonials from clients of Unfolding You — coaching, mentoring and consultation."
	/>
</svelte:head>

<div class="page">
	<Nav />

	<section class="hero">
		<h1 class="page-title">testimonials</h1>
	</section>

	<section class="testimonials">
		<div class="masonry">
			{#each testimonials as testimonial, i}
				<div class="card">
					<p class="quote">{testimonial.quote}</p>
					<p class="name">{testimonial.name}</p>
				</div>
			{/each}
		</div>
	</section>

	<Footer />
</div>

<style>
	.page {
		max-width: 1600px;
		margin: 0 auto;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		padding: 0 10%;
	}

	/* Hero Section */
	.hero {
		max-height: 520px;
		height: 520px;
		display: flex;
		align-items: center;
	}

	.page-title {
		font-family: 'DM Serif Display', serif;
		font-size: clamp(60px, 7.5vw, 120px);
		font-weight: 400;
		color: #550000;
		line-height: 1.1;
	}

	/* Testimonials Grid */
	.testimonials {
		padding-bottom: 80px;
	}

	.masonry {
		columns: 2;
		column-gap: 48px;
	}

	.card {
		break-inside: avoid;
		background: #fffffb;
		border-radius: 20px;
		padding: 32px;
		margin-bottom: 32px;
		position: relative;
	}

	.quote {
		font-family: 'Manrope', sans-serif;
		font-size: 22px;
		font-weight: 400;
		line-height: 32px;
		color: #000;
		white-space: pre-line;
	}

	.name {
		font-family: 'Manrope', sans-serif;
		font-size: 22px;
		font-weight: 900;
		line-height: 32px;
		color: #800020;
		margin-top: 32px;
	}

	@media (max-width: 1024px) {
		.masonry {
			columns: 1;
		}

	}

	@media (max-width: 768px) {
		.page {
			padding: 0 24px;
		}

		.quote,
		.name {
			font-size: 18px;
			line-height: 28px;
		}
	}
</style>
