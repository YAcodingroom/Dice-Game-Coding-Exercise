var randomNumber1 = Math.floor(Math.random()*6)+1;
switch(randomNumber1) {
  case 1:
    document.querySelector(".dice_img1").setAttribute("src", "images/dice-1.png");
    break;
  case 2:
    document.querySelector(".dice_img1").setAttribute("src", "images/dice-2.png");
    break;
  case 3:
    document.querySelector(".dice_img1").setAttribute("src", "images/dice-3.png");
    break;
  case 4:
      document.querySelector(".dice_img1").setAttribute("src", "images/dice-4.png");
      break;
  case 5:
      document.querySelector(".dice_img1").setAttribute("src", "images/dice-5.png");
      break;
}


var randomNumber2 = Math.floor(Math.random()*6)+1;
switch(randomNumber2) {
  case 1:
    document.querySelector(".dice_img2").setAttribute("src", "images/dice-1.png");
    break;
  case 2:
    document.querySelector(".dice_img2").setAttribute("src", "images/dice-2.png");
    break;
  case 3:
    document.querySelector(".dice_img2").setAttribute("src", "images/dice-3.png");
    break;
  case 4:
      document.querySelector(".dice_img2").setAttribute("src", "images/dice-4.png");
      break;
  case 5:
      document.querySelector(".dice_img2").setAttribute("src", "images/dice-5.png");
      break;
}

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "You Win! <img class='title_icon' src='images/rocket-1.png'>";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "You Lose.. <img class='title_icon' src='images/rocket-2.png'>";
}
else {
  document.querySelector("h1").innerHTML = "-Draw-";
}
