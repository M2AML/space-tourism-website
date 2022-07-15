import responsive from "./responsive.js";
//SLIDER BTN
const moon = document.querySelector("#moon");
const mars = document.querySelector("#mars");
const europa = document.querySelector("#europa");
const titan = document.querySelector("#titan");

const moonSlide = document.querySelectorAll(".moon");
const marsSlide = document.querySelectorAll(".mars");
const europaSlide = document.querySelectorAll(".europa");
const titanSlide = document.querySelectorAll(".titan");

const moonImg = document.querySelector(".moon__img");
const marsImg = document.querySelector(".mars__img");
const europaImg = document.querySelector(".europa__img");
const titanImg = document.querySelector(".titan__img");

moon.addEventListener("click", () => {
  slideBtn(moon, mars, europa, titan);
  slideActive(moonSlide, marsSlide, europaSlide, titanSlide);
  slideImg(moonImg, marsImg, europaImg, titanImg);
});
mars.addEventListener("click", () => {
  slideBtn(mars, moon, europa, titan);
  slideActive(marsSlide, moonSlide, europaSlide, titanSlide);
  slideImg(marsImg, moonImg, europaImg, titanImg);
});
europa.addEventListener("click", () => {
  slideBtn(europa, mars, moon, titan);
  slideActive(europaSlide, marsSlide, moonSlide, titanSlide);
  slideImg(europaImg, marsImg, moonImg, titanImg);
});
titan.addEventListener("click", () => {
  slideBtn(titan, mars, europa, moon);
  slideActive(titanSlide, marsSlide, europaSlide, moonSlide);
  slideImg(titanImg, marsImg, europaImg, moonImg);
});

function slideBtn(active, notActive1, notActive2, notActive3) {
  active.classList.add("planets__switcher-active");
  notActive1.classList.remove("planets__switcher-active");
  notActive2.classList.remove("planets__switcher-active");
  notActive3.classList.remove("planets__switcher-active");
}

//Animations for planets Images
function slideImg(active, notActive1, notActive2, notActive3) {
  active.classList.add("planets__img-active");
  notActive1.classList.remove("planets__img-active");
  notActive2.classList.remove("planets__img-active");
  notActive3.classList.remove("planets__img-active");
}

//Animations for planets Testimonials
function slideActive(active, notActive1, notActive2, notActive3) {
  active.forEach((element) => {
    element.classList.add("description__slides-active");
  });
  notActive1.forEach((element) => {
    element.classList.remove("description__slides-active");
  });
  notActive2.forEach((element) => {
    element.classList.remove("description__slides-active");
  });
  notActive3.forEach((element) => {
    element.classList.remove("description__slides-active");
  });
}
