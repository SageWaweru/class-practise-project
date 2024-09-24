// accesing
const blueColour = document.querySelector(".blue");
const yellowColour = document.querySelector(".yellow");
const imageCard = document.querySelector(".p-image");
const cartButton = document.getElementById("button");
const feedbackBtn = document.querySelector(".feedback");
const itemTag = document.getElementsById("tag");

// manipulating
blueColour.addEventListener("click", function () {
  cartButton.style.backgroundColor = "rgb(59, 49, 203)";
  itemTag.style.backgroundColor = "rgb(59, 49, 203)";
  imageCard.style.backgroundImage = 'url("images/basic-dress-blue.jpeg")';
});

yellowColour.addEventListener("click", function () {
  cartButton.style.backgroundColor = "rgb(250, 166, 64)";
  itemTag.style.backgroundColor = "rgb(250, 166, 64)";
  imageCard.style.backgroundImage = 'url("images/basic-dress-yellow.jpeg")';
});

const cart = () => {
  cartButton.style.display = "none";
  feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click", cart);

const feedback = () => {
  cartButton.style.display = "block";
  feedbackBtn.style.display = "none";
};
feedbackBtn.addEventListener("click", cart);

const purpleColour = document.querySelector(".purple");
const blackColour = document.querySelector(".black");
const navyColour = document.querySelector(".navy-blue");
const imageCard2 = document.querySelector(".p-image2");
const itemTag2 = document.getElementsById("tag2");

purpleColour.addEventListener("click", function () {
    cartButton.style.backgroundColor = "rgb(167, 84, 188)";
    itemTag.style.backgroundColor = "rgb(167, 84, 188)";
    imageCard.style.backgroundImage = 'url("images/top-purple.jpg")';
  });

  blackColour.addEventListener("click", function () {
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("images/top-purple.jpg")';
  });

  navyColour.addEventListener("click", function () {
    cartButton.style.backgroundColor = "rgb(37, 28, 164)";
    itemTag.style.backgroundColor = "rgb(37, 28, 164)";
    imageCard.style.backgroundImage = 'url("images/top-purple.jpg")';
  });
  