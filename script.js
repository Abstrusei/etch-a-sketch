let gSContainer = document.getElementById("grid-square-container");

function createGridSquares(number) {
    for (let i = 0; i < (number * number); i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add('grid-square');
        gridSquare.style.cssText = `border: 1px solid lightgray; height: calc(100%/${number}); display: inline-block;`
        gSContainer.appendChild(gridSquare);
    }
}

createGridSquares(16);

let mouseDown = false;
gSContainer.onmousedown = () => (mouseDown = true);
gSContainer.onmouseup = () => (mouseDown = false);

let gridSquares = document.querySelectorAll('.grid-square');
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

