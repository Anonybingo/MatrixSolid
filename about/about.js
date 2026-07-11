// about/about.js
// Edit the TEAM array below with your real teammates. Add or remove
// entries freely — the grid adjusts automatically.

const TEAM = [
  { name: "Team member", role: "Role — e.g. Research & Strategy" },
  { name: "Team member", role: "Role — e.g. Data & Analysis" },
  { name: "Team member", role: "Role — e.g. Design & Storytelling" },
  { name: "Team member", role: "Role — e.g. Partnerships & Outreach" },
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
