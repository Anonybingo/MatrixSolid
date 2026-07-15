// challenges/challenges.js
// Edit the six entries below with the real content:
//   title      — the challenge name
//   role       — your team's role on it
//   summary    — one or two sentences on the problem and what you did
//   youtubeId  — shows the real YouTube thumbnail once set
//   image      — optional fallback path (e.g. "photos/challenge6.jpg")
//                shown when there's no youtubeId yet, so the tile isn't
//                empty while you're still waiting on a video

const CHALLENGES = [
  { code: "1", title: "Introduction", role: "Get To Know Us", summary: "In this video, our team outlines our journey through the African Leadership University (ALU) E-Lab program. We discuss our mission to bridge the gap between building an innovative product and developing a scalable, real-world business solution aimed at tackling major sustainability challenges.", youtubeId: "gTKFdhgupsg", image: "" },
  { code: "2", title: "Discover Africa", role: "Storytelling", summary: "Choose an African community and tell a story the world has not heard about.", youtubeId: "thElzXTRAs0", image: "" },
  { code: "3", title: "HELP-LAB", role: "Community Engagement", summary: "Improving the quality of life of a given community.", youtubeId: "bW-VPuPTfCY", image: "" },
  { code: "4", title: "Hunt for Treasure", role: "Researching", summary: "Finding a project/start-up company/etc whose operations falls under our chosen G.C.G.O.", youtubeId: "yGsxH3wP7CA", image: "" },
  { code: "5", title: "Launch Your Mission", role: "Compete for $10,000 grant", summary: "Come up with compelling application on our project that would enable us to win the grant.", youtubeId: "B8vd4qyuthQ", image: "" },
  { code: "6", title: "Your Digital Print", role: "Web design", summary: "Creating a website to showcase our E-Lab journey.", youtubeId: "", image: "" },
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
        : c.image
          ? `<img class="cell-thumb" src="${c.image}" alt="" loading="lazy" />`
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
