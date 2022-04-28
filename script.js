function createRow(rowNum) {
    for (let i = 0; i < rowNum; i++) {
        let row = document.createElement("div");
        container.appendChild(row);
        row.className = "row";
    }
}

function createColumn(columnNum) {
    for (let i = 0; i < rows.length; i++) {
        for (j = 0; j < columnNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        }
    }
}

