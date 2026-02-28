<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Services — Unfolding You</title>
	<meta name="description" content="Coaching, mentoring, leadership consulting and personal brand consulting from Unfolding You." />
</svelte:head>

<div class="page">
	<Nav />

	<section class="intro">
		<h1 class="page-title">services</h1>

		<div class="intro-text">
			<p>
				Our services are for moments of transition, refinement and growth. When something is
				shifting, or asking to be shaped with more care. Whether you're navigating change, expanding
				what you've already built, or simply wanting space to think more clearly, our work together
				is designed to meet you where you are.
			</p>
		</div>
	</section>

	<section class="services-list">
		<div class="service">
			<h2 class="service-title">coaching</h2>
			<p class="service-subtitle">Inner clarity that leads to aligned action</p>
			<p>
				A structured yet soulful process that supports individuals to move from insight into
				embodiment. It blends emotional intelligence, self-inquiry and practical momentum, always
				rooted in the client's whole story. This is coaching for people who want results without
				sacrificing depth.
			</p>
		</div>

		<div class="service">
			<h2 class="service-title">mentoring</h2>
			<p class="service-subtitle">Wisdom, perspective and creative guidance</p>
			<p>
				For individuals who are navigating transition, expansion, or reinvention often accomplished,
				often successful, and often sensing there is more trying to emerge. This work is less about
				fixing and more about orienting: helping clients see themselves and their choices through a
				wider lens.
			</p>
		</div>

		<div class="service">
			<h2 class="service-title">leadership & organisational consulting</h2>
			<p class="service-subtitle">Helping leaders bring out the best in people</p>
			<p>
				Unfolding You partners with leaders and organisations who understand that sustainable success
				is built through people - their clarity, confidence and sense of purpose. This work supports
				leaders to lead with presence, emotional intelligence and discernment, creating cultures
				where individuals feel trusted, engaged and inspired to contribute at their highest level.
			</p>
			<p>
				The focus is not just improved outcomes, but leadership that is grounded, human and quietly
				effective.
			</p>
		</div>

		<div class="service">
			<h2 class="service-title">personal brand & narrative consulting</h2>
			<p class="service-subtitle">Crafting presence, clarity and expression</p>
			<p>
				Unfolding You works with individuals whose work, influence or ideas are ready to be expressed
				with greater coherence, intention and refinement.
			</p>
			<p>
				Drawing on a background in creative producing and storytelling, this is a considered,
				collaborative process. It's less about self-promotion and more about refinement. It clarifies
				what matters and how that is communicated to the world.
			</p>
			<p>
				The result is a sense of ease and authority, a presence that feels coherent, elegant and
				unmistakably one's own.
			</p>
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

	/* Intro */
	.intro {
		padding: 40px 0 60px;
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
	}

	.intro-text p {
		font-family: 'Manrope', sans-serif;
		font-size: clamp(16px, 1.5vw, 24px);
		line-height: 1.5;
		color: #000;
	}

	/* Services List */
	.services-list {
		display: flex;
		flex-direction: column;
		gap: 80px;
		padding-bottom: 80px;
	}

	.service {
		max-width: 840px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.service-title {
		font-family: 'DM Serif Display', serif;
		font-size: clamp(32px, 4vw, 64px);
		font-weight: 400;
		color: #800020;
		line-height: 1.25;
	}

	.service-subtitle {
		font-family: 'Manrope', sans-serif;
		font-size: clamp(16px, 1.5vw, 24px);
		font-weight: 700;
		line-height: 1.5;
		color: #000;
	}

	.service p {
		font-family: 'Manrope', sans-serif;
		font-size: clamp(16px, 1.5vw, 24px);
		line-height: 1.5;
		color: #000;
	}

	@media (max-width: 768px) {
		.page {
			padding: 0 24px;
		}

		.services-list {
			gap: 56px;
		}

		.intro-text p,
		.service p,
		.service-subtitle {
			font-size: 16px;
		}
	}
</style>
