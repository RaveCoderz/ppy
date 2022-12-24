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
      <br>
      <h2>You are great shit eater!</h2>`;
      splash.classList.add("splash");
      document.body.append(splash);

      const audio = new Audio("./audio/circles.mp3");
      audio.play();

      splash.addEventListener("click", () => {
        splash.remove();
        audio.pause();
      });
    }
  });
});

const imageObject = document.getElementById("ppy-4");
const day = document.getElementById("day");
const date = new Date();

day.innerText = date.getDate();

switch (date.getDay()) {
  case 3:
    imageObject.src = "./img/sreda.jpg";
    break;

  case 5:
    imageObject.src = "./img/friday.jpg";
    break;

  default:
    imageObject.src = "./img/beer.jpg";
    break;
}
