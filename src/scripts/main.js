import "../styles/style.scss";
import "animate.css";
new WOW().init();

const ppys = [
  document.getElementById("ppy-1"),
  document.getElementById("ppy-2"),
  document.getElementById("ppy-3"),
  document.getElementById("ppy-4"),
  document.getElementById("ppy-5"),
];

const activePpys = {
  "ppy-1": false,
  "ppy-2": false,
  "ppy-3": false,
  "ppy-4": false,
  "ppy-5": false,
};

ppys.forEach((ppy) => {
  ppy.addEventListener("click", (e) => {
    activePpys[e.target.id] = true;

    const values = Object.values(activePpys);
    if (values.filter((v) => v === false).length === 0) {
      const splash = document.createElement("div");
      splash.innerHTML = `
      <h1>Congratulations!</h1>
      <img class="osu" id="osu" src="./img/icons/osu.svg">
      <h2>You are great shit eater!</h2>`;
      splash.classList.add("splash");
      document.body.append(splash);

      document.body.innerHTML += `
      <div class="shit" id="shit">
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item" src="./img/icons/food.png" />
    </div>`;

      const storageKey = "shit";
      const snow = document.querySelector(".shit");
      const snowflakes = document.querySelectorAll(".shit__item");

      function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      function getRndFloat(min, max) {
        return (Math.random() * (max - min) + min).toFixed(1);
      }

      snowflakes.forEach((snowflake) => {
        snowflake.style.fontSize = getRndFloat(0.7, 1.5) + "em";
        snowflake.style.animationDuration = getRndInteger(10, 15) + "s";
        snowflake.style.animationDelay =
          getRndInteger(-1, snowflakes.length / 2) + "s";
      });

      function changeSnowAnimation(animationName) {
        snow.style.setProperty("--animation-name", animationName);
      }

      document.addEventListener("DOMContentLoaded", () => {
        let currentStorage = localStorage.getItem(storageKey);

        if (currentStorage) {
          snowToggle.querySelector(
            `.snow-toggle__control[value='${currentStorage}']`
          ).checked = true;
        }

        changeSnowAnimation(currentStorage);

        window.addEventListener("storage", () => {
          changeSnowAnimation(localStorage.getItem(storageKey));
        });
      });

      const audio = new Audio("./audio/circles.mp3");
      audio.play();
      audio.loop = true;
    }
  });
});

const imageObject = document.getElementById("ppy-4");
const day = document.getElementById("day");
const date = new Date();

day.innerText = date.getDate();

switch (date.getDay()) {
  case 0:
    imageObject.src = "./img/days/Sunday.png";
    break;
  case 1:
    imageObject.src = "./img/days/Monday.png";
    break;
  case 2:
    imageObject.src = "./img/days/Tuesday.png";
    break;
  case 3:
    imageObject.src = "./img/days/Wednesday.jpg";
    break;
  case 4:
    imageObject.src = "./img/days/Thursday.png";
    break;
  case 5:
    imageObject.src = "./img/days/Friday.jpg";
    break;
  case 6:
    imageObject.src = "./img/days/Saturday.png";
    break;
}
