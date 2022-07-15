const hamburgerIcon = document.querySelector(".hamburger");
const crossIcon = document.querySelector(".close");
const navContainer = document.querySelector(".nav");

export default function responsive() {
  hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.add("dispear");
    navContainer.classList.add("nav__mobile");
    crossIcon.classList.remove("dispear");
  });

  crossIcon.addEventListener("click", () => {
    crossIcon.classList.add("dispear");
    navContainer.classList.remove("nav__mobile");
    hamburgerIcon.classList.remove("dispear");
  });
}
responsive();
