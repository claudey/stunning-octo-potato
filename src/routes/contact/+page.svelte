<script lang="ts">
  import { enhance } from "$app/forms";
  import Footer from "$lib/components/Footer.svelte";
  import Nav from "$lib/components/Nav.svelte";

  let { form } = $props();
  let submitting = $state(false);
</script>

<svelte:head>
  <title>Contact — Unfolding You</title>
  <meta
    name="description"
    content="Get in touch with Unfolding You. All enquiries are treated with warmth, discretion and confidentiality."
  />
</svelte:head>

<div class="page">
  <Nav />

  <section class="hero">
    <h1 class="page-title">contact us</h1>
  </section>

  <section class="content">
    <div class="body-text">
      <p>
        We shape each engagement with care, so what matters can emerge
        naturally, and what no longer serves can fall away.
      </p>
      <p>If something here has resonated, we would love to hear from you.</p>
      <p>All enquiries are met with warmth and held in confidence.</p>
      <a href="mailto:info@unfoldingyou.com" class="email-link"
        >info@unfoldingyou.com</a
      >
    </div>

    {#if form?.success}
      <div class="feedback success">
        <p>Thank you for your message. We'll be in touch soon.</p>
      </div>
    {:else}
      <form
        method="POST"
        use:enhance={() => {
          submitting = true;
          return async ({ update }) => {
            await update();
            submitting = false;
          };
        }}
        class="contact-form"
      >
        {#if form?.error}
          <div class="feedback error">
            <p>{form.error}</p>
          </div>
        {/if}

        <label class="field">
          <span>Name</span>
          <input type="text" name="name" value={form?.name ?? ""} required />
        </label>

        <label class="field">
          <span>Email</span>
          <input type="email" name="email" value={form?.email ?? ""} required />
        </label>

        <label class="field">
          <span>Message</span>
          <textarea name="message" rows="6" required
            >{form?.message ?? ""}</textarea
          >
        </label>

        <button type="submit" disabled={submitting}>
          {submitting ? "Sending…" : "Send message"}
        </button>
      </form>
    {/if}
  </section>

  <Footer />
</div>

<style>
  .content {
    flex: 1;
    padding: 0 0 80px;
  }

  .email-link {
    font-family: "Manrope", sans-serif;
    font-size: clamp(16px, 1.5vw, 24px);
    color: #800020;
    text-decoration: none;
  }

  .email-link:hover {
    text-decoration: underline;
  }

  .contact-form {
    max-width: 600px;
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .field span {
    font-family: "Manrope", sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #550000;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .field input,
  .field textarea {
    font-family: "Manrope", sans-serif;
    font-size: 16px;
    padding: 12px 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;
    color: #000;
    transition: border-color 0.2s;
  }

  .field input:focus,
  .field textarea:focus {
    outline: none;
    border-color: #800020;
  }

  .field textarea {
    resize: vertical;
  }

  button[type="submit"] {
    font-family: "Manrope", sans-serif;
    font-size: 16px;
    font-weight: 600;
    padding: 14px 32px;
    background: #800020;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    align-self: flex-start;
    transition: opacity 0.2s;
  }

  button[type="submit"]:hover {
    opacity: 0.9;
  }

  button[type="submit"]:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .feedback {
    max-width: 600px;
    margin-top: 48px;
    padding: 16px 20px;
    border-radius: 4px;
    font-family: "Manrope", sans-serif;
    font-size: 16px;
  }

  .feedback.success {
    background: #f0faf0;
    border: 1px solid #4a8c4a;
    color: #2d5a2d;
  }

  .feedback.error {
    background: #fdf0f0;
    border: 1px solid #c44;
    color: #800020;
    margin-top: 0;
  }

  .feedback p {
    margin: 0;
  }

  @media (max-width: 768px) {
    .email-link {
      font-size: 16px;
    }
  }
</style>
