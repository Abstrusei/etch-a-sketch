const gSContainer = document.getElementById("grid-square-container");
const sliderCaption = document.getElementById("slider-caption");
let numSquaresPerSide = 16;
let eraserOn = false;
let prevPenColor = "black";
let penColor = 'black';

function generateGrid(number) {
    if (gSContainer.innerHTML != "") {
        removeGrid();
    }

    for (let i = 0; i < (number * number); i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add('grid-square');
        gridSquare.style.cssText = `border: 1px solid lightgray; height: calc(100%/${number}); display: inline-block;`
        gSContainer.appendChild(gridSquare);
    }
    
    turnEraserOff()
    enableColoring();
    sliderCaption.innerHTML = `${number}`
    numSquaresPerSide = number; //Set number of squares per side in case of 'clear'
}

generateGrid(numSquaresPerSide);

let mouseDown = false;
gSContainer.onmousedown = () => (mouseDown = true);
gSContainer.onmouseup = () => (mouseDown = false);

function enableColoring() {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(gridSquare => {
        gridSquare.addEventListener("mousedown", () => {
            gridSquare.style.backgroundColor = penColor;
        });
        gridSquare.addEventListener("mouseover", () => {
            if (mouseDown == true) {
                gridSquare.style.backgroundColor = penColor;
            }
        });
    });
}

function removeGrid() {
    gSContainer.innerHTML = "";
}

function turnEraserOff() {
    if (eraserOn == true) {
        eraserBtn.classList.remove('eraser-on');
        eraserOn = false;
        penColor = prevPenColor;
    }
}

 
// Eraser Button
const eraserBtn = document.getElementById('eraser-btn');
eraserBtn.addEventListener("click", () => {
    if (eraserOn == true) {
        eraserBtn.classList.remove('eraser-on');
        eraserOn = false;
        penColor = prevPenColor;
    } else {
        eraserBtn.classList.add('eraser-on');
        eraserOn = true;
        prevPenColor = penColor;
        penColor = 'white';
    }
})

// Clear Button
const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener("click", () => {
    generateGrid(numSquaresPerSide);
    turnEraserOff();
})

// Reset Button
const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener("click", () => {
    window.location.reload();
})

// Pick a color 
let colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener("change", () => {
    penColor = colorPicker.value;
});


// Range slider
const rangeSlider = document.getElementById('range-slider');
rangeSlider.addEventListener("input", () => {
    let numSquaresPerSide = rangeSlider.value;
    sliderCaption.innerHTML = numSquaresPerSide;
});

rangeSlider.addEventListener("change", () => {
    generateGrid(rangeSlider.value);
});




