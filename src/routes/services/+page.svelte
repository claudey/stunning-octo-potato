<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Nav from "$lib/components/Nav.svelte";
</script>

<svelte:head>
  <title>Services — Unfolding You</title>
  <meta
    name="description"
    content="Coaching, mentoring, leadership consulting and personal brand consulting from Unfolding You."
  />
</svelte:head>

<div class="page">
  <Nav />

  <section class="hero">
    <h1 class="page-title">services</h1>
  </section>

  <section class="intro">
    <div class="intro-text">
      <p>
        Our services are for moments of transition, refinement and growth.
        Whether you're navigating change, expanding what you've already built,
        or simply wanting space to think more clearly, our work together is
        designed to meet you where you are.
      </p>
    </div>
  </section>

  <section class="services-list">
    <div class="service">
      <h2 class="service-title">coaching</h2>
      <p class="service-subtitle">Inner clarity that leads to aligned action</p>
      <p>
        A structured process that supports individuals to move from insight into
        embodiment. It blends emotional intelligence, self-inquiry and practical
        momentum, always rooted in the client's whole story. This is coaching
        for people who want results without sacrificing depth.
      </p>
    </div>

    <div class="service">
      <h2 class="service-title">mentoring</h2>
      <p class="service-subtitle">Wisdom, perspective and creative guidance</p>
      <p>
        For individuals who are navigating transition, expansion, or reinvention
        often accomplished, often successful, and often sensing there is more
        trying to emerge. This work is less about fixing and more about
        orienting: helping clients see themselves and their choices through a
        wider lens.
      </p>
    </div>

    <div class="service">
      <h2 class="service-title">leadership & organisational consulting</h2>
      <p class="service-subtitle">
        Helping leaders bring out the best in people
      </p>
      <p>
        We partner with leaders and organisations who understand that
        sustainable success is built through people - their clarity and sense of
        purpose. This work supports leaders to lead with presence and emotional
        intelligence, creating cultures where individuals feel trusted, engaged
        and inspired to contribute at their highest level. The focus is not just
        improved outcomes, but leadership that is grounded and quietly
        effective.
      </p>
    </div>

    <div class="service">
      <h2 class="service-title">personal brand & narrative consulting</h2>
      <p class="service-subtitle">Crafting presence, clarity and expression</p>
      <p>
        For individuals whose work or ideas are ready to be expressed with
        greater intention. Drawing on a background in creative producing and
        storytelling, this is a collaborative process. It clarifies what matters
        and how that is communicated to the world. The result is a sense of ease
        and authority a presence that feels unmistakably one's own.
      </p>
    </div>
  </section>

  <Footer />
</div>

<style>
  .intro {
    padding: 0 0 60px;
  }

  /* Services List */
  .services-list {
    display: flex;
    flex-direction: column;
    gap: 48px;
    padding-bottom: 80px;
  }

  .service {
    max-width: 840px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .service-title {
    font-family: "DM Serif Display", serif;
    font-size: clamp(32px, 4vw, 64px);
    font-weight: 400;
    color: #800020;
    line-height: 1.1;
  }

  .service-subtitle {
    font-family: "Manrope", sans-serif;
    font-size: clamp(16px, 1.5vw, 24px);
    font-weight: 700;
    line-height: 1.5;
    color: #000;
  }

  .service p {
    font-family: "Manrope", sans-serif;
    font-size: clamp(16px, 1.5vw, 24px);
    line-height: 1.5;
    color: #000;
  }

  @media (max-width: 768px) {
    .services-list {
      gap: 56px;
    }

    .service p,
    .service-subtitle {
      font-size: 16px;
    }
  }
</style>
