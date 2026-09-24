// Shared little helpers for the sessionStorage name-entry demo.

const GUEST_NAMES = ["Ziggy", "Nova", "Pixel", "Rook", "Comet"];

function randomGuestName() {
  return GUEST_NAMES[Math.floor(Math.random() * GUEST_NAMES.length)];
}

function greet(name) {
  document.getElementById("greeting").textContent = `Welcome, ${name}!`;
}

document.addEventListener("DOMContentLoaded", () => {
  const savedName = sessionStorage.getItem("playerName");
  if (savedName) {
    greet(savedName);
    document.getElementById("nameInput").value = savedName;
  }

  document.getElementById("nameForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const typed = document.getElementById("nameInput").value.trim();
    const name = typed || randomGuestName();
    sessionStorage.setItem("playerName", name);
    greet(name);
  });

  document.getElementById("clearBtn").addEventListener("click", () => {
    sessionStorage.removeItem("playerName");
    document.getElementById("nameInput").value = "";
    document.getElementById("greeting").textContent = "";
  });
});
