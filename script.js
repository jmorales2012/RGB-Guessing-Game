var colors = [];
var pickedColor;
var numSquares = 6;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.getElementById("colorDisplay");


init();

function init() {
  // setup mode & reset button and squares
  setupModeButtons();
  setupSquares();
  setupResetButton();
  reset();
}

function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    // add click listeners to squares
    squares[i].addEventListener("click", function() {
      // grab color of clicked square
      var clickedColor = this.style.backgroundColor;

      // compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        h1.style.backgroundColor = pickedColor;
        changeColors(pickedColor);
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again.";
      }
    });
  }
}

function setupResetButton() {
  resetButton.addEventListener("click", function() {
    reset();
  });
}

function changeColors(color) {
  // loop through all squares
  // change each color to match given color
  squares.forEach(function(square) {
    square.style.backgroundColor = color;
  });
}

function pickColor() {
  // pick a random number
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make an array
  var arr = [];
  // add num random colors to array
  for (var i = 0; i < num; i++) {
    // get random color and push into array
    arr.push(randomColor());
  }
  // return array
  return arr;
}

function randomColor() {
  // pick a "red" from 0 to 255
  var r = Math.floor(Math.random() * 256);
  // pick a "green" from 0 to 255
  var g = Math.floor(Math.random() * 256);
  // pick a "blue" from 0 to 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset() {
  // generate all new colors, new pickedColor
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  // change button text, display text, header color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  h1.style.backgroundColor = "steelblue";
  message.textContent = "";
  // change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}