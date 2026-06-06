const nav = document.querySelector(".nav");
const pageLinks = document.querySelectorAll(".pageLink");

// Sticky Nav bar based on the navbar height + 200

window.addEventListener("scroll", fixNavbar);

function fixNavbar() {
  if (window.scrollY > nav.offsetHeight + 200) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

// Change in the current link based on click event
pageLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (e.target.classList.contains("pageLink")) {
      const currentActive = document.querySelector(".pageLink.current");
      if (currentActive) {
        currentActive.classList.remove("current");
      }

      e.target.classList.add("current");
    }
  });
});
