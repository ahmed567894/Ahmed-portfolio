// script.js

// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Toggle Light Mode"
    : "🌙 Switch Mode";
});

// Contact Form Handling
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("form-status");

  if (name && email && message) {
    status.style.color = "green";
    status.textContent = `Thanks ${name}, your message was sent!`;
    this.reset();
  } else {
    status.style.color = "red";
    status.textContent = "Please fill in all fields.";
  }
});

// Skill Circle Animation
window.addEventListener("load", () => {
  const progressBars = document.querySelectorAll(".progress");
  progressBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0"; // Reset to 0
    setTimeout(() => {
      bar.style.width = width; // Animate to actual width
    }, 100);
  });
});

// About Section Fade In
const fadeObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document
  .querySelectorAll(".about-left, .about-right, .social-icons")
  .forEach((el) => {
    fadeObserver.observe(el);
  });

document.addEventListener("DOMContentLoaded", animateSkillCircles);
