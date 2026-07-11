// script/navbar.js — mobile hamburger menu.
// Plain script — include on every page, after cursor.js.
// Injects the toggle button itself; no HTML changes needed per page.

(function () {
  const container = document.querySelector(".navbar-container");
  const menu = document.querySelector(".nav-menu");
  if (!container || !menu) return;

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "nav-toggle";
  btn.setAttribute("aria-label", "Toggle navigation");
  btn.setAttribute("aria-expanded", "false");
  btn.innerHTML = "<span></span><span></span><span></span>";
  container.appendChild(btn);

  function openMenu() {
    menu.classList.add("open");
    btn.classList.add("active");
    btn.setAttribute("aria-expanded", "true");
  }
  function closeMenu() {
    menu.classList.remove("open");
    btn.classList.remove("active");
    btn.setAttribute("aria-expanded", "false");
  }

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.contains("open") ? closeMenu() : openMenu();
  });

  document.addEventListener("click", (e) => {
    if (!container.contains(e.target)) closeMenu();
  });

  menu.querySelectorAll("a.nav-link").forEach((a) => {
    a.addEventListener("click", () => setTimeout(closeMenu, 80));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
})();
