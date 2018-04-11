var numOfSquares = 6;
var colors = generateRandomColors(6);
var h1 = document.querySelector("h1")
var body = document.querySelector("body");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var hard = document.querySelector("#hard");
var easy = document.querySelector("#easy")



easy.addEventListener("click", function(){
  this.classList.add("seleceted")
  hard.classList.remove("seleceted")
  numOfSquares = 3;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(i = 0; i < squares.length; i++){
  // squares[i].style.backgroundColor = colors[i];
  if(colors[i]){
    squares[i].style.backgroundColor = colors[i];
  }
  else {
    squares[i].style.display = "none";
  }
}
h1.style.backgroundColor = "steelblue"
resetButton.textContent = "New Colors"
messageDisplay.textContent = "";
})

hard.addEventListener("click", function(){
  this.classList.add("seleceted")
  easy.classList.remove("seleceted")
  numOfSquares = 6;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(i = 0; i < squares.length; i++){

    squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
  }
  h1.style.backgroundColor = "steelblue"
  resetButton.textContent = "New Colors"
  messageDisplay.textContent = "";

})



resetButton.addEventListener("click", function(){
h1.style.backgroundColor = "steelblue"
resetButton.textContent = "New Colors"
messageDisplay.textContent = "";
colors = generateRandomColors(numOfSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for(i = 0; i < squares.length; i++){
squares[i].style.backgroundColor = colors[i];}
})

colorDisplay.textContent = pickedColor;

for(i=0; i< squares.length; i++){
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  // add  click listener to squares
  squares[i].addEventListener("click", function(){
    // grab color of clicked squered

    var clickedColor = this.style.backgroundColor;
      // console.log(clickedColor, pickedColor)
    // compare to picked color
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
