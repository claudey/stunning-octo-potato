<footer class="footer">
  <a href="mailto:info@unfoldingyou.com" class="footer-email"
    >info@unfoldingyou.com</a
  >
  <div class="footer-nav">
    <a href="/" class="nav-link">home</a>
    <a href="/about" class="nav-link">about</a>
    <a href="/brand" class="nav-link">brand</a>
    <a href="/services" class="nav-link">services</a>
    <a href="/testimonials" class="nav-link">testimonials</a>
    <a href="/contact" class="nav-link">contact</a>
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
    font-family: "Inter", sans-serif;
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
    font-family: "Inter", sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #000;
    text-decoration: none;
    letter-spacing: 0.02em;
  }

  .nav-link:hover {
    color: #800020;
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
