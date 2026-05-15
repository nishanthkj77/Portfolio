// Smooth active navigation effect
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// Simple welcome message in console
console.log("Welcome to Nishanth K J's Portfolio Website");