var numOfSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1")
var body = document.querySelector("body");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
 init();
function init () {
setupModeButtons();
setupSquares();
reset();
}

//sets squares
function setUpSquares() {
  for(i=0; i< squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add  click listener to squares
    squares[i].addEventListener("click", function(){
      // grab color of clicked squered

      var clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor){
        h1.style.backgroundColor = clickedColor;
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = " Play again ?"
        colorChange(clickedColor);
      }
      else {
        this.style.backgroundColor = "black";
        messageDisplay.textContent = "Try again!";
      }

    })
  }
}
// mode buttons event listeners
function setUpModeButtons () {
  for(i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      modeButtons[2].classList.remove("selected");
      this.classList.add("selected");

      this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
      if(this.textContent === "Hero") {
        numOfSquares = 39;
      }
      reset();
    });
  }
}
// resets game
function reset() {
  h1.style.backgroundColor = "steelblue"
  resetButton.textContent = "New Colors"
  messageDisplay.textContent = "";
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }
    else {
      squares[i].style.display = "none";
    }


  }
}

resetButton.addEventListener("click", function(){
  reset();
})

function colorChange(color){
  for(i=0; i< squares.length; i++){
    squares[i].style.backgroundColor = color;
  }

}
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  var arr = [];
  for(i=0; i < num; i++){
    arr.push(randomColor())
  }
  return arr;

  function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb("+r +", " + g + ", " + b + ")";
  }
}
