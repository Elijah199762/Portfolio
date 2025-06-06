
const darkToggle = document.getElementById("dark-toggle");
const html = document.documentElement;


if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
}


darkToggle?.addEventListener("click", () => {
  html.classList.toggle("dark");
  
  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});


const menuBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn?.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  menuBtn.classList.toggle("open");
});


AOS?.init();
