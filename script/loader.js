// this loader is AI generated
(function () {
  "use strict";
  const loader = document.getElementById("pageLoader");
  const canvas = document.getElementById("loaderRain");
  if (!loader || !canvas) return;

  const ctx = canvas.getContext("2d");
  const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_+-=/[]";
  const FONT_SIZE = 16;
  let W, H, columns, drops;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    columns = Math.floor(W / FONT_SIZE);
    drops = new Array(columns).fill(0).map(() => Math.floor(Math.random() * -40));
  }
  window.addEventListener("resize", resize);
  resize();

  function draw() {
    ctx.fillStyle = "rgba(11, 12, 14, 0.16)"; // translucent wipe = trailing fade
    ctx.fillRect(0, 0, W, H);
    ctx.font = FONT_SIZE + "px 'IBM Plex Mono', monospace";

    for (let i = 0; i < columns; i++) {
      const x = i * FONT_SIZE;
      const y = drops[i] * FONT_SIZE;

      ctx.fillStyle = "#ECEDE9"; // leading char — white
      ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], x, y);

      ctx.fillStyle = "rgba(217, 169, 62, 0.75)"; // trailing char — gold
      ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], x, y - FONT_SIZE);

      if (y > H && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }
  const rainTimer = setInterval(draw, 45);

  const MIN_DISPLAY_MS = 1700; // let the fill-line finish before hiding
  const start = Date.now();
  let hidden = false;

  function hideLoader() {
    if (hidden) return;
    hidden = true;
    const wait = Math.max(0, MIN_DISPLAY_MS - (Date.now() - start));
    setTimeout(() => {
      loader.classList.add("loader--hidden");
      clearInterval(rainTimer);
      setTimeout(() => loader.remove(), 700);
    }, wait);
  }

  window.addEventListener("load", hideLoader);
  setTimeout(hideLoader, 4000); // safety net if 'load' never fires
})();