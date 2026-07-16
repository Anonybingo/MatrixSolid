// about/about.js

const TEAM = [
  { name: "Benjamin", role: "Team Lead", bio: "Brings structure and ensures goals are met.", photo: "../Images/benjamin.jpg" },
  { name: "Ingride", role: "People & Culture Lead", bio: " Team chemistry coordinator and motivator.", photo: "../Images/Ingride.jpg" },
  { name: "Muhamad", role: "Editor", bio: "Edits reels for the team socials.", photo: "../Images/muhamad.jpg" },
  { name: "Christian", role: "Strategic Critical Thinker", bio: "Serves as our team's structural compass by challenging assumptions and identifying potential project blind spots.", photo: "../Images/christian.jpg" },
  { name: "Ladouce", role: "Creative Ideas lead", bio: "Brainstorms original ideas for the team.", photo: "../Images/ladouce.jpg" },
  { name: "Janson", role: "Technical lead", bio: "Does technical tasks for the team.", photo: "../Images/janson.JPG" },
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

