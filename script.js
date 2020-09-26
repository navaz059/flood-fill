color = {
    0: 'red',
    1: 'blue',
    2: 'green',
    3: 'yellow'
}

let matrix = [
    [0,0,1,0],
    [3,2,1,2],
    [2,3,1,3],
    [0,0,3,2],
    [3,2,2,1],
]

currentRow = '';
currentColumn = '';
let nextColor;

x_axis = [1,-1,0,0];
y_axis = [0,0,1,-1];

function setColor(next) {
    document.getElementById("selectedColor").innerHTML = color[next];
    nextColor = next;
}

function reDrawMatrix(matrix, row, col) {

    if (!nextColor) {
        alert("Select a color to fill");
    }

    if (matrix[row][col] == nextColor) {
        alert("Selected and Cell Same Color");
    }

    matrix = flood_fill(matrix, row, col, nextColor)
}

function drawTable(matrix) {
    for (let i= 0; i < matrix.length; i++) {
        let row = table.insertRow(i);
        for (let j=0; j < matrix[i].length; j++) {
            let cell = row.insertCell(j);
            cell.style.backgroundColor = color[matrix[i][j]];
            cell.onclick = function(){reDrawMatrix(matrix, row.rowIndex, cell.cellIndex)};
        }
    }
}

window.onload = function() {
    drawTable(matrix);
  };