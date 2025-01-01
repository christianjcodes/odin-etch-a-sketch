const container = document.getElementById("container");
let columns = document.getElementsByClassName("gridCol");
let cells = document.getElementsByClassName("cell");

defaultGrid();
etchCells();

function defaultGrid() {
    createColumn(16);
    createCells(16);
}

function createColumn(colNum) {
    for (let i = 0; i < colNum; i++) {
        let column = document.createElement("div");
        container.appendChild(column).className = "gridCol";
    }
}

function createCells(cellNum) {
    for (let i = 0; i < columns.length; i++) {
        for (let j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            columns[j].appendChild(newCell).className = "cell";
        }
    }
}

// Function that changes the color of the cells when hovered

function etchCells() {

    for (let i = 0; i < cells.length; i++) {

        cells[i].onmouseover = function() {mouseOver()};
    
        function mouseOver() {
            cells[i].style.backgroundColor = "white";
        }
    
    }
}

let button = document.getElementById("gridBtn");

button.addEventListener("click", function() {
    
    let gridSize = prompt("Enter the number of squares per side of the grid (Max 100): ");

    if (gridSize === null) {
        alert("Enter a number less than 100!");
        return;
    }

    if (!parseInt(gridSize)) {
        alert("Enter a number less than 100!")
    }

    gridSize = parseInt(gridSize);

    if (gridSize > 100) {
        alert("The number cannot be bigger than 100!");
        return;
    }

    // Clear container and create a new grid
    document.getElementById("container").innerHTML = "";
    createColumn(gridSize);
    createCells(gridSize);
    etchCells();
});
