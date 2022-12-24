import "../styles/style.scss";
import "animate.css";
new WOW().init();

const imageObject = document.getElementById("image");
const date = new Date();

switch (date.getDay()) {
  case 3:
    imageObject.src = "./img/sreda.jpg";
    break;

  case 5:
    imageObject.src = "./img/friday.jpg";
    break;

  default:
    imageObject.src = "./img/any.jpg";
    break;
}
