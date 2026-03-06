<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>About — Unfolding You</title>
	<meta name="description" content="About Unfolding You — inner development and outer expression." />
</svelte:head>

<div class="page">
	<Nav />

	<section class="hero">
		<h1 class="page-title">about us</h1>
	</section>

	<section class="intro">
		<div class="intro-text">
			<p>
				Unfolding You lives at the intersection of inner development and outer expression. We work
				with capable, ambitious people who often carry a lot: founders, leaders, and creatives in
				transition. They sense the next chapter matters, but not at the cost of themselves.
			</p>
			<p>
				We honour your story and translate it into practical outcomes, clearer priorities, and
				aligned action.
			</p>
		</div>
	</section>

	<section class="founder">
		<div class="founder-content">
			<div class="founder-text">
				<div class="founder-header">
					<span class="founder-label">FOUNDER</span>
					<h2 class="founder-name">Rienkje Attoh</h2>
				</div>

				<p>
					People have always fascinated me. Who we are beneath the roles we play, the stories we
					carry, and the parts of us that remain unspoken.
				</p>
				<p>
					My work is led by warmth, deep listening, and intuition. I create calm, focused spaces
					where people reconnect with what they already know inside themselves, then turn that
					truth into clear decisions and grounded next steps.
				</p>
				<p>
					My background spans nearly two decades across radio, film, and television, shaping
					narratives, guiding talent and teams, and helping complex ideas become clear, compelling,
					and deliverable.
				</p>
				<p>
					Unfolding You is an invitation to connect with your own story, and let it unfold your way.
				</p>
			</div>

			<div class="founder-image">
				<img src="/founder.png" alt="Rienkje Attoh — Founder of Unfolding You" />
			</div>
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

	/* Intro Section */
	.intro {
		padding: 0 0 80px;
	}

	.intro-text {
		max-width: 840px;
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	.intro-text p {
		font-family: 'Inter', sans-serif;
		font-size: clamp(16px, 1.5vw, 24px);
		line-height: 1.5;
		color: #000;
	}

	/* Founder Section */
	.founder {
		background-color: #550000;
		margin: 0 -10%;
		padding: 100px 10%;
	}

	.founder-content {
		max-width: 1600px;
		margin: 0 auto;
		display: flex;
		gap: 60px;
		align-items: flex-start;
	}

	.founder-text {
		flex: 1;
		max-width: 840px;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.founder-header {
		margin-bottom: 16px;
	}

	.founder-label {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 28px;
		font-weight: 800;
		color: #faf9eb;
		display: block;
		margin-bottom: 4px;
	}

	.founder-name {
		font-family: 'DM Serif Display', serif;
		font-size: clamp(36px, 3.75vw, 60px);
		font-weight: 400;
		color: #59e1c8;
		line-height: 1.2;
	}

	.founder-text p {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: clamp(16px, 1.375vw, 22px);
		line-height: 1.6;
		color: #fff;
	}

	.founder-image {
		flex-shrink: 0;
		width: 435px;
		height: 435px;
		border-radius: 50%;
		overflow: hidden;
		margin-top: 40px;
	}

	.founder-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (max-width: 1024px) {
		.founder-content {
			flex-direction: column;
		}

		.founder-image {
			width: 300px;
			height: 300px;
			align-self: center;
			margin-top: 0;
		}
	}

	@media (max-width: 768px) {
		.page {
			padding: 0 24px;
		}

		.founder {
			margin: 0 -24px;
			padding: 60px 24px;
		}

		.founder-label {
			font-size: 20px;
		}

		.founder-image {
			width: 220px;
			height: 220px;
		}

		.intro-text p,
		.founder-text p {
			font-size: 16px;
		}
	}
</style>
