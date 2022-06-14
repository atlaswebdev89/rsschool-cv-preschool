const body = document.querySelector("body");
const burgerButton = document.querySelector(".page-header-burger");
const Nav = document.querySelector(".page-navigation");
const links = document.querySelectorAll(".site-navigation-link");
const overlay = document.querySelector(".overlay-nav");

burgerButton.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

links.forEach(function (link) {
  link.addEventListener("click", toggleMenu);
});

function toggleMenu() {
  burgerButton.classList.toggle("active");
  Nav.classList.toggle("active");
  body.classList.toggle("lock");
}
