const hamburgerMenu = document.querySelector("#hamburger-menu");
const navbarMenu = document.querySelector("#navbar");

hamburgerMenu.addEventListener("click", () => {
  navbarMenu.classList.toggle("hidden");
});
