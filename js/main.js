const hamburgerMenu = document.querySelector("#hamburger-menu");
const navbarMenu = document.querySelector("#navbar");

hamburgerMenu.addEventListener("click", () => {
  navbarMenu.classList.toggle("hidden");
});

toggleButton.addEventListener("click", function () {
  sidebar.classList.toggle("-translate-x-full");
});
