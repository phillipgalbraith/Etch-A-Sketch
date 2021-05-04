let sideLength = 0;
let sideLengthStr = "";


//set up the 16X16 original grid
const container = document.querySelector('#container'); //select grid container
for (i = 0 ; i < 16*16 ; ++i){
const newSquare = document.createElement('div');
newSquare.classList.add('square');
container.appendChild(newSquare);
}


let root = document.documentElement;




////Erase button not yet working






// the Erase/Repeat button is selected
const buttonElement = document.getElementById('button');
//clicking the button 
buttonElement.addEventListener('onclick', alert("yeet"));


function requestNewGridSize() {

    prompt('How many squares per side?', sideLengthStr, "16");
    sideLength = parseInt(sideLengthStr);
    if (sideLength == NaN || sideLength < 1 || sideLength > 100) {
        alert('Max is 100. Numbers only.');
        return
    } else {
     
    const container = document.querySelector('#container'); //select grid container
    //clear it out
       while (container.hasChildNodes()) {  
         container.removeChild(list.firstChild);
       }
    }
    //gives a new grid size and squareWidth to the styles.css
    root.style.setProperty('--gridBoxes', sideLength);
    root.style.setProperty('--gridBoxSize', '' + 100/sideLength + '%');
    //add the new squares
    for (i = 0 ; i < gridBoxes * gridBoxes ; ++i){
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    container.appendChild(newSquare);
    }
  return
  };
