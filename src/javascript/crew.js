//Slider Btn
const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const circle3 = document.querySelector(".circle3");
const circle4 = document.querySelector(".circle4");

const commanderImg = document.querySelector(".commander__img");
const missionSpecialistImg = document.querySelector(
  ".mission__specialist__img"
);
const pilotImg = document.querySelector(".pilot__img");
const flightEngineerImg = document.querySelector(".flight__engineer__img");

const commander = document.querySelectorAll(".commander");
const missionSpecialist = document.querySelectorAll(".mission__specialist");
const pilot = document.querySelectorAll(".pilot");
const flightEngineer = document.querySelectorAll(".flight__engineer");

circle1.addEventListener("click", () => {
  slideMember(commander, missionSpecialist, pilot, flightEngineer);
  circleActive(circle1, circle2, circle3, circle4);
  slideImg(commanderImg, missionSpecialistImg, pilotImg, flightEngineerImg);
});
circle2.addEventListener("click", () => {
  slideMember(missionSpecialist, pilot, flightEngineer, commander);
  circleActive(circle2, circle1, circle3, circle4);
  slideImg(missionSpecialistImg, commanderImg, pilotImg, flightEngineerImg);
});
circle3.addEventListener("click", () => {
  slideMember(pilot, missionSpecialist, commander, flightEngineer);
  circleActive(circle3, circle2, circle1, circle4);
  slideImg(pilotImg, commanderImg, missionSpecialistImg, flightEngineerImg);
});
circle4.addEventListener("click", () => {
  slideMember(flightEngineer, pilot, missionSpecialist, commander);
  circleActive(circle4, circle2, circle3, circle1);
  slideImg(flightEngineerImg, commanderImg, missionSpecialistImg, pilotImg);
});

function circleActive(active, notActive1, notActive2, notActive3) {
  active.classList.add("circle-active");
  notActive1.classList.remove("circle-active");
  notActive2.classList.remove("circle-active");
  notActive3.classList.remove("circle-active");
}
function slideImg(active, notActive1, notActive2, notActive3) {
  active.classList.add("crew__img-active");
  notActive1.classList.remove("crew__img-active");
  notActive2.classList.remove("crew__img-active");
  notActive3.classList.remove("crew__img-active");
}

function slideMember(active, notActive1, notActive2, notActive3) {
  active.forEach((element) => {
    element.classList.add("crew__slides-active");
  });
  notActive1.forEach((element) => {
    element.classList.remove("crew__slides-active");
  });
  notActive2.forEach((element) => {
    element.classList.remove("crew__slides-active");
  });
  notActive3.forEach((element) => {
    element.classList.remove("crew__slides-active");
  });
}
