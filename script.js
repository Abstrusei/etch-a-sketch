const gSContainer = document.getElementById("grid-square-container");
const sliderCaption = document.getElementById("slider-caption");

function generateGrid(number) {
    for (let i = 0; i < (number * number); i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add('grid-square');
        gridSquare.style.cssText = `border: 1px solid lightgray; height: calc(100%/${number}); display: inline-block;`
        gSContainer.appendChild(gridSquare);
    }
    addColoringFunctionality();
    sliderCaption.innerHTML = `${number}`
}

generateGrid(16);

function addColoringFunctionality() {
    let mouseDown = false;
    gSContainer.onmousedown = () => (mouseDown = true);
    gSContainer.onmouseup = () => (mouseDown = false);

    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(gridSquare => {
        gridSquare.addEventListener("mousedown", () => {
            gridSquare.classList.add('colored');
        });

        gridSquare.addEventListener("mouseover", () => {
            if (mouseDown == true) {
                gridSquare.classList.add('colored');
            }
        });
    });
}

function removeGrid() {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(gridSquare => {
        gSContainer.removeChild(gridSquare);
    });
}

// Clear Button

// Eraser Button

// Reset Button
const resetBtn = document.getElementById('clear-btn');
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
    removeGrid();
    generateGrid(rangeSlider.value);
});




