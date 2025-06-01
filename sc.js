// === DARK MODE TOGGLE ===
const darkToggle = document.getElementById("dark-toggle");
const html = document.documentElement;

// Check saved preference
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
}

// Toggle dark mode on button click
darkToggle?.addEventListener("click", () => {
  html.classList.toggle("dark");
  // Save preference
  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// === MOBILE MENU TOGGLE ===
const menuBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn?.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  menuBtn.classList.toggle("open"); // Optional: for icon change
});

// === SCROLL ANIMATION (if you're using AOS.js) ===
AOS?.init();
