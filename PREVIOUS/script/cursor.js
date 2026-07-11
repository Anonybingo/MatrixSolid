// script/cursor.js — shared custom cursor + magnetic hover effect.
// Requires <div class="custom-cursor" id="customCursor"></div> in the body.
// Plain script (not a module) — include on every page.

(function () {
  const cursor = document.getElementById("customCursor");
  if (!cursor) return;

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  const interactiveSelector =
    "a, button, input, textarea, .btn, .matrix-cell, .team-card, .pillar, .chip, .modal-close";

  function wireHoverTargets() {
    document.querySelectorAll(interactiveSelector).forEach((el) => {
      if (el.dataset.cursorWired) return;
      el.dataset.cursorWired = "true";
      el.addEventListener("mouseenter", () => cursor.classList.add("hovering"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("hovering"));
    });
  }
  wireHoverTargets();

  // Magnetic pull for nav links, logo, and buttons.
  document.querySelectorAll(".nav-link, .navbar-logo, .btn").forEach((item) => {
    item.addEventListener("mousemove", (e) => {
      const rect = item.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      item.style.transform = `translate(${(e.clientX - cx) * 0.25}px, ${(e.clientY - cy) * 0.25}px)`;
    });
    item.addEventListener("mouseleave", () => { item.style.transform = "translate(0,0)"; });
  });

  // Re-scan for elements injected later (challenge grid, team grid, etc.)
  window.wireCursorHoverTargets = wireHoverTargets;
})();
