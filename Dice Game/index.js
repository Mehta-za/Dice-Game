var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage = "images/dice" + randomNumber1 + ".png";

var randomImage2 = "images/dice" + randomNumber2 + ".png";

var randomDiceImage = document.querySelector("img.img1").setAttribute("src", randomImage);

var randomDiceImage2 = document.querySelector("img.img2").setAttribute("src", randomImage2);

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Draw";
}

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins";
}

if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins";
}
