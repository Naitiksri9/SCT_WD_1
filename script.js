const navbar = document.getElementById("navbar");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Active link highlighting
  document.querySelectorAll("section").forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 150;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      links.forEach(link => {
        link.classList.remove("active");
        document
          .querySelector(".nav-links a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
});

// Button scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
