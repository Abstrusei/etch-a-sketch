 function createGridSquares() {
    let gSContainer = document.getElementById("grid-square-container");

    // Create 16x16 divs
    for (let i = 0; i < 256; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add('grid-square');
        gSContainer.appendChild(gridSquare);
    }

}

createGridSquares();