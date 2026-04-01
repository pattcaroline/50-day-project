const toggleBtn = document.getElementById("toggleBtn");
const nav = document.getElementById("nav");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
