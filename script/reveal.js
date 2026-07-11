(function () {
  "use strict";

  /* ── Fade-up on scroll ─────────────────────────────────────────── */
  const revealEls = document.querySelectorAll(".reveal");
  function updateReveals() {
    const vh = window.innerHeight;
    revealEls.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      el.classList.toggle("active", top < vh - 110);
    });
  }
  window.addEventListener("scroll", updateReveals, { passive: true });
  window.addEventListener("resize", updateReveals);
  updateReveals();

  /* ── Navbar hides on scroll-down, returns on scroll-up ───────────*/
  const navbar = document.querySelector(".navbar");
  let lastY = window.scrollY;
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (navbar) {
      if (y > lastY && y > 80) navbar.classList.add("navbar--hidden");
      else navbar.classList.remove("navbar--hidden");
    }
    lastY = y;
  }, { passive: true });

  /* ── Decrypt / scramble text-reveal ──────────────────────────────
     Add class="decrypt-text" to any heading. Final text is read from
     data-value if present, otherwise the element's own text content. */
  const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_+-=/[]";
  const decryptEls = document.querySelectorAll(".decrypt-text");

  if (decryptEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        if (el.dataset.animating === "true") return;
        el.dataset.animating = "true";

        const final = el.dataset.value || el.textContent;
        let iter = 0;
        const timer = setInterval(() => {
          el.textContent = final
            .split("")
            .map((ch, i) => {
              if (ch === " ") return " ";
              return i < iter ? final[i] : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            })
            .join("");

          if (iter >= final.length) {
            clearInterval(timer);
            el.textContent = final;
            el.dataset.animating = "false";
          }
          iter += 1 / 2.4;
        }, 28);

        io.unobserve(el);
      });
    }, { threshold: 0.4 });

    decryptEls.forEach((el) => io.observe(el));
  }
})();
