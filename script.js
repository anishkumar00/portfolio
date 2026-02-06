/* ===============================
   Anish Kumar | Portfolio JS
   =============================== */

/* Smooth scrolling */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

/* Typing animation (Hero section) */
const texts = [
  "Cyber Security Enthusiast",
  "C++ Developer",
  "Linux & Kali Linux User",
  "Future Ethical Hacker"
];


let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function typeEffect() {
  if (count === texts.length) count = 0;

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  const typingElement = document.getElementById("typing");
  if (typingElement) typingElement.textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => {
      index = 0;
      count++;
    }, 1500);
  }

  setTimeout(typeEffect, 120);
})();

/* Mobile menu toggle (if added later) */
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

if (menuIcon && navLinks) {
  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
