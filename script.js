 function createGridSquares() {
    let gSContainer = document.getElementById("grid-square-container");

    // Create 16 divs
    for (let i = 0; i < 36; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add('grid-square');
        gSContainer.appendChild(gridSquare);
    }

   
    console.log("16 grid squares created");
}

createGridSquares();