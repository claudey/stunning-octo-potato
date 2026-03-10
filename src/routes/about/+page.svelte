<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Nav from "$lib/components/Nav.svelte";
</script>

<svelte:head>
  <title>About — Unfolding You</title>
  <meta
    name="description"
    content="About Unfolding You — inner development and outer expression."
  />
</svelte:head>

<div class="page">
  <Nav />

  <section class="hero">
    <h1 class="page-title">about us</h1>
  </section>

  <section class="intro">
    <div class="intro-text">
      <p>
        Unfolding You lives at the intersection of inner development and outer
        expression.
      </p>
      <p>
        We work with capable, ambitious people who often carry a lot: founders,
        leaders, and creatives in transition. They sense the next chapter
        matters, but not at the cost of themselves.
      </p>
      <p>
        We honour your story and translate it into practical outcomes, clearer
        priorities, and aligned action.
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
          I am an International Coaching Federation (ICF) accredited life and
          business coach and a film and television producer, bringing together
          professional coaching and the power of storytelling to support
          meaningful personal and professional transformation.
        </p>
        <p>
          People have always fascinated me. Who we are beneath the roles we
          play, the stories we carry, and the parts of us that remain unspoken.
        </p>
        <p>
          My work is led by warmth, deep listening, and intuition. I create
          calm, focused spaces where people reconnect with what they already
          know inside themselves, then turn that truth into clear decisions and
          grounded next steps.
        </p>
        <p>
          My background spans nearly two decades across radio, film, and
          television, shaping narratives, guiding talent and teams, and helping
          complex ideas become clear, compelling, and deliverable.
        </p>
        <p>
          Unfolding You is an invitation to connect with your own story, and let
          it unfold your way.
        </p>
      </div>

      <div class="founder-visual">
        <div class="founder-image">
          <img
            src="/founder-unfolding-you.webp"
            alt="Rienkje Attoh — Founder of Unfolding You"
            class="founder-image-img"
          />
        </div>
        <div class="icf-badges">
          <img
            src="/icf-acc-badge-rienkje-attoh.png"
            alt="ICF Associate Certified Coach badge"
            class="icf-badge"
          />
          <img
            src="/icf-member-badge-rienkje-attoh.png"
            alt="ICF Member badge"
            class="icf-badge"
          />
        </div>
      </div>
    </div>
  </section>

  <Footer />
</div>

<style>
  /* Founder Section */
  .founder {
    background-color: #550000;
    margin: 0 -10%;
    padding: 56px 10%;
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
    font-family: "Manrope", sans-serif;
    font-size: 28px;
    font-weight: 800;
    color: #faf9eb;
    display: block;
    margin-bottom: 4px;
  }

  .founder-name {
    font-family: "DM Serif Display", serif;
    font-size: clamp(36px, 3.75vw, 60px);
    font-weight: 400;
    color: #faf9eb;
    line-height: 1.2;
  }

  .founder-text p {
    font-family: "Manrope", sans-serif;
    font-size: clamp(16px, 1.375vw, 22px);
    line-height: 1.6;
    color: #fff;
  }

  .founder-visual {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin-top: 40px;
  }

  .founder-image {
    width: 435px;
    height: 435px;
    border-radius: 50%;
    overflow: hidden;
  }

  .founder-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .founder-image-img {
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
  }

  .icf-badges {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .icf-badge {
    max-width: 150px;
    height: auto;
  }

  @media (max-width: 1024px) {
    .founder-content {
      flex-direction: column;
    }

    .founder-visual {
      align-self: center;
      margin-top: 0;
    }

    .founder-image {
      width: 300px;
      height: 300px;
    }
  }

  @media (max-width: 768px) {
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

    .icf-badge {
      max-width: 120px;
    }

    .founder-text p {
      font-size: 16px;
    }
  }
</style>
