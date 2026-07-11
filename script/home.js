// script/home.js

const MAIN_VIDEO_ID = "gTKFdhgupsg";
const MAIN_VIDEO_TITLE = "Matrix Solid — the film";

const mainFrame = document.getElementById("mainFrame");

function playMainVideo() {
  mainFrame.innerHTML = `
    <div class="frame-corner tl"></div>
    <div class="frame-corner br"></div>
    <iframe
      src="https://www.youtube.com/embed/${MAIN_VIDEO_ID}?autoplay=1&rel=0"
      title="${MAIN_VIDEO_TITLE}"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>`;
}

if (MAIN_VIDEO_ID) {
  mainFrame.innerHTML = `
    <div class="frame-corner tl"></div>
    <div class="frame-corner br"></div>
    <img src="https://img.youtube.com/vi/${MAIN_VIDEO_ID}/hqdefault.jpg" alt="" />
    <button type="button" class="frame-play" id="mainPlayBtn" aria-label="Play video">
      <span class="frame-play-btn">&#9654;</span>
    </button>`;
  document.getElementById("mainPlayBtn").addEventListener("click", playMainVideo);
  window.wireCursorHoverTargets?.();
} else {
  mainFrame.innerHTML = `
    <div class="frame-corner tl"></div>
    <div class="frame-corner br"></div>
    <div class="frame-empty">Video not yet linked</div>`;
}
