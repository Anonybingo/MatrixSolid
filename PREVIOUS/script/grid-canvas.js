(function () {
  "use strict";
  const canvas = document.getElementById("gridCanvas");
  if (!canvas) return;

  const hero = canvas.closest(".hero-matrix");
  const ctx = canvas.getContext("2d");
  const readout = document.getElementById("gridReadout");

  const CELL = 46;
  let W, H, cols, rows;
  let targetCol = 2, targetRow = 2;
  let hCol = -6, hRow = -6;
  let pulses = [];

  function resize() {
    const rect = hero.getBoundingClientRect();
    W = canvas.width = rect.width;
    H = canvas.height = rect.height;
    cols = Math.ceil(W / CELL);
    rows = Math.ceil(H / CELL);
  }
  window.addEventListener("resize", resize);
  resize();

  function updatePointer(clientX, clientY) {
    const rect = hero.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    targetCol = Math.floor(x / CELL);
    targetRow = Math.floor(y / CELL);
    if (readout) {
      readout.textContent = `COL ${String(targetCol).padStart(2, "0")} \u00B7 ROW ${String(targetRow).padStart(2, "0")}`;
    }
  }
  hero.addEventListener("mousemove", (e) => updatePointer(e.clientX, e.clientY));
  hero.addEventListener("touchmove", (e) => {
    if (e.touches[0]) updatePointer(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });

  function spawnPulse() {
    if (!cols || !rows) return;
    pulses.push({ c: Math.floor(Math.random() * cols), r: Math.floor(Math.random() * rows), t: 0 });
    if (pulses.length > 6) pulses.shift();
  }
  setInterval(spawnPulse, 650);

  function draw() {
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, W, H);

    // base grid
    ctx.strokeStyle = "rgba(236,237,233,0.05)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 0; x <= W; x += CELL) { ctx.moveTo(x + 0.5, 0); ctx.lineTo(x + 0.5, H); }
    for (let y = 0; y <= H; y += CELL) { ctx.moveTo(0, y + 0.5); ctx.lineTo(W, y + 0.5); }
    ctx.stroke();

    // ambient pulses
    pulses.forEach((p) => {
      p.t += 0.018;
      const a = Math.sin(Math.min(p.t, Math.PI)) * 0.12;
      if (a > 0) {
        ctx.fillStyle = `rgba(217,169,62,${a.toFixed(3)})`;
        ctx.fillRect(p.c * CELL, p.r * CELL, CELL, CELL);
      }
    });
    pulses = pulses.filter((p) => p.t < Math.PI);

    // cursor-locked cell (lerped so it glides rather than jumps)
    hCol += (targetCol - hCol) * 0.16;
    hRow += (targetRow - hRow) * 0.16;
    ctx.strokeStyle = "rgba(217,169,62,0.55)";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(hCol * CELL + 1, hRow * CELL + 1, CELL - 2, CELL - 2);
  }
  draw();
})();
