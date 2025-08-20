// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// CTA actions
const startBtn = document.getElementById("startBtn");
const learnBtn = document.getElementById("learnBtn");
const themeBtn = document.getElementById("themeBtn");

// Fun click -> message + subtle bg flash
startBtn.addEventListener("click", () => {
  const original = document.body.style.transition;
  document.body.style.transition = "background-color .4s";
  document.body.style.backgroundColor = "hsl(220 30% 10% / .4)";
  setTimeout(() => (document.body.style.backgroundColor = ""), 350);
  setTimeout(() => (document.body.style.transition = original), 400);
  alert("You're all set! 🚀");
});

// Smooth scroll to the info card
learnBtn.addEventListener("click", () => {
  document.querySelector(".card").scrollIntoView({ behavior: "smooth", block: "center" });
});

// Theme hue shuffle
themeBtn.addEventListener("click", () => {
  const hue = Math.floor(Math.random() * 360);
  document.documentElement.style.setProperty("--hue", hue);
  themeBtn.textContent = "Theme: " + hue;
});
