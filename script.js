const gSContainer = document.getElementById("grid-square-container");
const sliderCaption = document.getElementById("slider-caption");
let numSquaresPerSide = 16;
let eraserOn = false;

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
            if (eraserOn && gridSquare.classList.contains('colored')) {
                gridSquare.classList.remove('colored');
            } else {
                gridSquare.classList.add('colored');
            }
        });

        gridSquare.addEventListener("mouseover", () => {
            if (mouseDown == true) {
                if (eraserOn && gridSquare.classList.contains('colored')) {
                    gridSquare.classList.remove('colored');
                } else {
                    gridSquare.classList.add('colored');
                }
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
    }
}

 
// Eraser Button
const eraserBtn = document.getElementById('eraser-btn');
eraserBtn.addEventListener("click", () => {
    if (eraserOn == true) {
        eraserBtn.classList.remove('eraser-on');
        eraserOn = false;
    } else {
        eraserBtn.classList.add('eraser-on');
        eraserOn = true;
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

// Range slider
const rangeSlider = document.getElementById('range-slider');
rangeSlider.addEventListener("input", () => {
    let numSquaresPerSide = rangeSlider.value;
    sliderCaption.innerHTML = numSquaresPerSide;
});

rangeSlider.addEventListener("change", () => {
    generateGrid(rangeSlider.value);
});




