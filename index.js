var pl1_image = document.getElementById("pl1_img");
var pl2_image = document.getElementById("pl2_img");
// var result = document.getElementById("result");
var result = document.querySelector("h1");

var imgDir = "images/";
var imgArray = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

var img1Item = imgArray[Math.floor(Math.random()*imgArray.length)];
var img1Index = img1Item.charAt(4);
var img1Src = imgDir + img1Item;

var img2Item = imgArray[Math.floor(Math.random()*imgArray.length)];
var img2Index = img2Item.charAt(4);
var img2Src = imgDir + img2Item;

function diceThrow() {
  pl1_image.setAttribute("src", img1Src);
  pl1_image.setAttribute("alt", img1Index);
  pl2_image.setAttribute("src", img2Src);
  pl2_image.setAttribute("alt", img2Index);

  if (img1Index > img2Index) {
    result.innerHTML = "<i class='fas fa-flag-checkered'></i> Player 1 Wins!";
  } else if (img2Index > img1Index) {
    result.innerHTML = "Player 2 Wins! <i class='fas fa-flag-checkered'></i>";
  } else {
    result.innerHTML = "<i class='fas fa-flag-checkered'></i> It's a draw! <i class='fas fa-flag-checkered'></i>";
  }
}

diceThrow();
