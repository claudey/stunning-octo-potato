<script lang="ts">
  import { page } from "$app/state";

  const links = [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
    { href: "/brand", label: "brand" },
    { href: "/services", label: "services" },
    { href: "/testimonials", label: "testimonials" },
    { href: "/contact", label: "contact" },
  ];
</script>

<footer class="footer">
  <a href="mailto:info@unfoldingyou.com" class="footer-email"
    >info@unfoldingyou.com</a
  >
  <div class="footer-nav">
    {#each links as link}
      <a
        href={link.href}
        class="nav-link"
        class:active={page.url.pathname === link.href}
      >
        {link.label}
      </a>
    {/each}
  </div>
</footer>

<style>
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;
  }

  .footer-email {
    font-family: "Manrope", sans-serif;
    font-size: 20px;
    color: #000;
    text-decoration: none;
  }

  .footer-email:hover {
    text-decoration: underline;
  }

  .footer-nav {
    display: flex;
    gap: 45px;
  }

  .nav-link {
    font-family: "Manrope", sans-serif;
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
    .footer {
      flex-direction: column;
      gap: 24px;
      align-items: flex-start;
    }

    .footer-nav {
      gap: 20px;
      flex-wrap: wrap;
    }

    .footer-email,
    .nav-link {
      font-size: 16px;
    }
  }
</style>
