// about/about.js

const TEAM = [
  { name: "Benjamin", role: "Role", bio: "Biograph.", photo: "" },
  { name: "Englide", role: "Role", bio: "Biograph.", photo: "" },
  { name: "Mohammed", role: "Role", bio: "Biograph.", photo: "" },
  { name: "Christian", role: "Role", bio: "Biograph.", photo: "" },
  { name: "Ladouce", role: "Role", bio: "Biograph.", photo: "" },
  { name: "JANSON", role: "Role", bio: "Biograph.", photo: "" },
];

const grid = document.getElementById("teamGrid");
if (grid) {
  grid.innerHTML = TEAM.map((m) => `
    <div class="team-card">
      <div class="team-photo">
        ${m.photo
          ? `<img src="${m.photo}" alt="${m.name}" />`
          : `<span class="who-mark">${m.name.charAt(0).toUpperCase()}</span>`}
      </div>
      <h3 class="team-name">${m.name}</h3>
      <p class="team-role">${m.role}</p>
      <p class="team-bio">${m.bio}</p>
    </div>
  `).join("");
  window.wireCursorHoverTargets?.();
}

