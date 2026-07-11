// about/about.js
// Edit the TEAM array below with your real teammates. Add or remove
// entries freely — the grid adjusts automatically.

const TEAM = [
  { name: "Benjamin", role: "Role" },
  { name: "Englide", role: "Role " },
  { name: "Mohammed", role: "Role" },
  { name: "Christian", role: "Role" },
  { name: "Ladouce", role: "Role" },
  { name: "JANSON", role: "Role" },
];

const grid = document.getElementById("teamGrid");
if (grid) {
  grid.innerHTML = TEAM.map((m) => `
    <div class="team-card">
      <div class="team-photo"><span>Photo</span></div>
      <h3 class="team-name">${m.name}</h3>
      <p class="team-role">${m.role}</p>
    </div>
  `).join("");
  window.wireCursorHoverTargets?.();
}
