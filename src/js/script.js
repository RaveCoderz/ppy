const imageObject = document.getElementById("image");
const date = new Date();

switch (date.getDay()) {
  case 3:
    imageObject.src = "./src/img/sreda.jpg"
    break;

  case 5:
    imageObject.src = "./src/img/friday.jpg"
    break;

  default:
    imageObject.src = "./src/img/any.jpg"
    break;
}
