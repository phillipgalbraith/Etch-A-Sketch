let sideLength = 16;
let sideLengthStr = 960/sideLength + "px";

//select a container for the grid
const container = document.querySelector('#container');

function eraseSquares() {
  for (i = 0 ; i < sideLength*sideLength ; ++i) {  
    container.removeChild(container.firstElementChild);
  }
  return
};


// end line "newSquare.style.backgroundColor = " with css rgb() values
function getRandomInt() {
  //random 25 - 225
  return Math.floor(Math.random() * 200 + 25);
};

function newSquares() {
    for (i = 0 ; i < sideLength*sideLength ; ++i){
      const newSquare = document.createElement('div');
      newSquare.classList.add('newSquare');
      newSquare.style.zIndex = "5";
      newSquare.style.backgroundColor = "white";
      newSquare.style.height = "" + 960/sideLength + "px";
      newSquare.style.width = "" + 960/sideLength + "px";
      container.appendChild(newSquare);
      newSquare.addEventListener('mouseenter', event => {
        newSquare.style.backgroundColor = "rgb(" + getRandomInt() + "," + getRandomInt() + "," + getRandomInt() + ")";})
    }
  };

function askNewSize() {
  eraseSquares();
  let oldLength = sideLength;
  let sideLengthStr = prompt('How many squares per side?', "16");
    sideLength = parseInt(sideLengthStr);
    if (Number.isNaN(sideLength) === true || sideLength < 1 || sideLength > 100) {
        alert('Max is 100. Numbers only.');
        sideLength = oldLength;
        newSquares();
        return
    };
    
    newSquares();
   
    return
  };
  
newSquares();
document.getElementById("buttonNew").addEventListener("click", askNewSize);
