<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Unfolding You</title>
	<meta name="description" content="Unfolding You — bespoke coaching, mentoring and consultation." />
</svelte:head>

<div class="page">
	<Nav />

	<section class="hero">
		<h1 class="title">
			<span class="title-unfolding">unfolding</span>
			<span class="title-you">you</span>
		</h1>
	</section>

	<section class="body-text">
		<p>
			Whether you're beginning a new chapter or expanding an established one,
			<strong><em>Unfolding You</em></strong> supports you to move forward with clarity and
			alignment through bespoke coaching, mentoring and consultation.
		</p>
		<p>
			This may be a personal transition, an evolution in leadership, or a desire to work and live
			with greater intention. The work is calm, intuitive and deeply human, and designed to support
			growth without force.
		</p>
	</section>

	<Footer />
</div>

<style>
	.hero {
		flex: 1;
		height: auto;
		max-height: none;
		padding: 60px 0;
	}

	.title {
		font-family: 'DM Serif Display', serif;
		font-weight: 400;
		color: #550000;
		line-height: 1;
		width: 100%;
	}

	.title-unfolding {
		display: block;
		font-size: clamp(80px, 12.5vw, 200px);
	}

	.title-you {
		display: block;
		font-size: clamp(80px, 12.5vw, 200px);
		text-align: right;
		margin-top: -0.05em;
	}

	.body-text {
		max-width: 928px;
		padding-bottom: 80px;
	}

	.body-text p {
		font-size: clamp(18px, 1.75vw, 28px);
	}

	@media (max-width: 768px) {
		.body-text p {
			font-size: 18px;
		}
	}
</style>
