const hamburgerMenu = document.querySelector("#hamburger-menu");
const navbarMenu = document.querySelector("#navbar");

hamburgerMenu.addEventListener("click", () => {
  navbarMenu.classList.toggle("hidden");
});

const words = ["Halo, Muhammad Wildan!", "Selamat datang di website anda."];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(
      0,
      j - 1
    );
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(
      0,
      j + 1
    );
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 100);
}

type();
