const grid = document.querySelector("#grid");

createGrid(16,16);

function createGrid(a,b) {
    for (i = 0; i < (a * b); i++) {
        var square = document.createElement("div");
        square.id = "square";
        grid.appendChild(square);
    }
}

