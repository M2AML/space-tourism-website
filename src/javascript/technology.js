const numberOne = document.getElementById("number__one");
const numberTwo = document.getElementById("number__two");
const numberThree = document.getElementById("number__three");

const slideLaunchVehicule = document.querySelectorAll(".launch__vehicule");
const spacePort = document.querySelectorAll(".spaceport");
const spaceCapsule = document.querySelectorAll(".space__capsule");

const launchVehiculeImg = document.querySelector(".launch__vehicule__img");
const spacePortImg = document.querySelector(".spaceport__img");
const spaceCapsuleImg = document.querySelector(".space__capsule__img");

numberOne.addEventListener("click", () => {
  slideNumber(numberOne, numberTwo, numberThree);
  slideActive(slideLaunchVehicule, spacePort, spaceCapsule);
  slideImg(launchVehiculeImg, spacePortImg, spaceCapsuleImg);
});
numberTwo.addEventListener("click", () => {
  slideNumber(numberTwo, numberOne, numberThree);
  slideActive(spacePort, slideLaunchVehicule, spaceCapsule);
  slideImg(spacePortImg, launchVehiculeImg, spaceCapsuleImg);
});
numberThree.addEventListener("click", () => {
  slideNumber(numberThree, numberOne, numberTwo);
  slideActive(spaceCapsule, spacePort, slideLaunchVehicule);
  slideImg(spaceCapsuleImg, spacePortImg, launchVehiculeImg);
});

function slideNumber(active, notActive1, notActive2) {
  active.classList.add("number-active");
  notActive1.classList.remove("number-active");
  notActive2.classList.remove("number-active");
}

function slideImg(active, notActive1, notActive2) {
  active.classList.add("terminology__img-active");
  notActive1.classList.remove("terminology__img-active");
  notActive2.classList.remove("terminology__img-active");
}

function slideActive(active, notActive1, notActive2) {
  active.forEach((element) => {
    element.classList.add("terminology__slides-active");
  });
  notActive1.forEach((element) => {
    element.classList.remove("terminology__slides-active");
  });
  notActive2.forEach((element) => {
    element.classList.remove("terminology__slides-active");
  });
}
