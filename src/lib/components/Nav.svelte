<script lang="ts">
	import { page } from '$app/state';

	const links = [
		{ href: '/', label: 'HOME' },
		{ href: '/about', label: 'ABOUT' },
		{ href: '/brand', label: 'BRAND' },
		{ href: '/services', label: 'SERVICES' },
		{ href: '/testimonials', label: 'TESTIMONIALS' },
		{ href: '/contact', label: 'CONTACT' }
	];
</script>

<nav class="nav">
	{#each links as link}
		<a href={link.href} class="nav-link" class:active={page.url.pathname === link.href}>
			{link.label}
		</a>
	{/each}
</nav>

<style>
	.nav {
		display: flex;
		justify-content: center;
		gap: 45px;
		padding: 40px 0;
	}

	.nav-link {
		font-family: 'Inter', sans-serif;
		font-size: 20px;
		font-weight: 400;
		color: #000;
		text-decoration: none;
		letter-spacing: 0.02em;
	}

	.nav-link:hover {
		color: #800020;
	}

	.nav-link.active {
		color: #800020;
		font-weight: 900;
	}

	@media (max-width: 768px) {
		.nav {
			gap: 20px;
			flex-wrap: wrap;
			padding: 24px 0;
		}

		.nav-link {
			font-size: 16px;
		}
	}
</style>
