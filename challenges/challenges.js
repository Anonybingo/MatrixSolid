// challenges/challenges.js
// Edit the six entries below with your real content:
//   title      — the challenge name
//   role       — your team's role on it
//   summary    — one or two sentences on the problem and what you did
//   youtubeId  — the part of the YouTube URL after "watch?v=". Leave ""
//                until you have the real link — the cell shows
//                "No Signal" instead of a broken embed.

const CHALLENGES = [
  { code: "1", title: "Challenge title", role: "Team role", summary: "One or two sentences on the problem and what your team actually did about it.", youtubeId: "" },
  { code: "2", title: "Challenge title", role: "Team role", summary: "One or two sentences on the problem and what your team actually did about it.", youtubeId: "" },
  { code: "3", title: "Challenge title", role: "Team role", summary: "One or two sentences on the problem and what your team actually did about it.", youtubeId: "" },
  { code: "4", title: "Challenge title", role: "Team role", summary: "One or two sentences on the problem and what your team actually did about it.", youtubeId: "" },
  { code: "5", title: "Challenge title", role: "Team role", summary: "One or two sentences on the problem and what your team actually did about it.", youtubeId: "" },
  { code: "6", title: "Challenge title", role: "Team role", summary: "One or two sentences on the problem and what your team actually did about it.", youtubeId: "" },
];

const grid = document.getElementById("matrixGrid");
const modal = document.getElementById("videoModal");
const modalFrame = document.getElementById("modalFrame");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalSummary = document.getElementById("modalSummary");
const modalClose = document.getElementById("modalClose");

function thumbUrl(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

function renderGrid() {
  grid.innerHTML = CHALLENGES.map((c, i) => `
    <button type="button" class="matrix-cell" data-index="${i}" aria-label="Open ${c.title}">
      <span class="cell-code">${c.code}</span>
      ${c.youtubeId
        ? `<img class="cell-thumb" src="${thumbUrl(c.youtubeId)}" alt="" loading="lazy" />`
        : `<span class="cell-empty">No Signal</span>`}
      <span class="cell-overlay">
        <span class="cell-play">&#9654;</span>
        <span class="cell-title">${c.title}</span>
        <span class="cell-role">${c.role}</span>
      </span>
    </button>
  `).join("");

  grid.querySelectorAll(".matrix-cell").forEach((btn) => {
    btn.addEventListener("click", () => openModal(CHALLENGES[+btn.dataset.index]));
  });

  window.wireCursorHoverTargets?.();
}

function openModal(c) {
  modalTitle.textContent = `${c.code} \u2014 ${c.title}`;
  modalMeta.textContent = c.role;
  modalSummary.textContent = c.summary;
  modalFrame.innerHTML = c.youtubeId
    ? `<iframe src="https://www.youtube.com/embed/${c.youtubeId}?autoplay=1&rel=0" title="${c.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    : `<div class="frame-empty">Video not yet linked</div>`;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modalFrame.innerHTML = "";
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

renderGrid();
