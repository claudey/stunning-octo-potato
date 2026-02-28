<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Brand Philosophy — Unfolding You</title>
	<meta name="description" content="The brand philosophy behind Unfolding You — where the whole story lives as a practice." />
</svelte:head>

<div class="page">
	<Nav />

	<section class="intro">
		<h1 class="page-title">brand philosophy</h1>

		<div class="intro-text">
			<p>
				Unfolding You is grounded in the belief that every individual and organisation carries a
				whole story. Not just the visible chapters, but the unseen experiences, turning points,
				contradictions and longings that shape how we lead, create and show up in the world.
			</p>
			<p>
				We work with the understanding that real growth does not come from fixing or forcing, but
				from allowing what is true to emerge with clarity and care.
			</p>
			<p>
				Unfolding is a process of integration - where past experience becomes wisdom, identity
				becomes coherent, and expression becomes aligned. When the whole story is honoured, people
				lead with greater confidence, depth and ease.
			</p>
		</div>
	</section>

	<section class="unfold">
		<h2 class="unfold-title">/ un • fold /</h2>

		<div class="unfold-text">
			<p>
				To unfold is not to become someone new. It is to reveal what is already present, gradually,
				honestly, and in the right time.
			</p>
			<p>
				Unfolding acknowledges that growth is not linear, polished, or performative. It happens
				through experience: success and failure, ambition and doubt, momentum and pause. Nothing is
				wasted. Everything belongs.
			</p>
			<p>This is where the whole story lives as a practice.</p>
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

	/* Intro Section */
	.intro {
		padding: 40px 0 80px;
	}

	.page-title {
		font-family: 'DM Serif Display', serif;
		font-size: clamp(60px, 7.5vw, 120px);
		font-weight: 400;
		color: #550000;
		line-height: 1.1;
		margin-bottom: 60px;
	}

	.intro-text {
		max-width: 840px;
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	.intro-text p {
		font-family: 'Manrope', sans-serif;
		font-size: clamp(16px, 1.5vw, 24px);
		line-height: 1.5;
		color: #000;
	}

	/* Unfold Section */
	.unfold {
		background-color: #550000;
		margin: 0 -10%;
		padding: 56px 10% 100px;
	}

	.unfold-title {
		font-family: 'DM Serif Display', serif;
		font-size: clamp(40px, 5vw, 80px);
		font-weight: 400;
		color: #59e1c8;
		line-height: 1.2;
		margin-bottom: 40px;
	}

	.unfold-text {
		max-width: 840px;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.unfold-text p {
		font-family: 'Manrope', sans-serif;
		font-size: clamp(16px, 1.375vw, 22px);
		line-height: 1.6;
		color: #fff;
	}

	@media (max-width: 768px) {
		.page {
			padding: 0 24px;
		}

		.unfold {
			margin: 0 -24px;
			padding: 40px 24px 60px;
		}

		.intro-text p,
		.unfold-text p {
			font-size: 16px;
		}
	}
</style>
