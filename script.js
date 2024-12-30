const container = document.getElementById("container");
let columns = document.getElementsByClassName("gridCol");
let cells = document.getElementsByClassName("cell");

defaultGrid();

function defaultGrid() {
    createRow(16);
    createColumn(16);
}

cells.onmouseover = function() {
    document.cells.style.backgroundColor = "white";
}

function createRow(colNum) {
    for (let i = 0; i < colNum; i++) {
        let column = document.createElement("div");
        container.appendChild(column).className = "gridCol";
    }
}

function createColumn(cellNum) {
    for (let i = 0; i < columns.length; i++) {
        for (let j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            columns[j].appendChild(newCell).className = "cell";
        }
    }
}
