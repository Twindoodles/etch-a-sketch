const grid = document.querySelector("#grid");

function createGrid(num) {
    for (i = 0; i < num; i++) {
        var column = document.createElement("div");
        column.id = "column";
        for (j = 0; j < num; j++) {
            var square = document.createElement("div");
            square.id = "square";
            column.appendChild(square);
        }
        grid.appendChild(column);
    }
}

document.addEventListener("mouseover", e => {
    if (e.target.matches("#square")){
        e.target.style.backgroundColor = "white";
    }
});

const button = document.querySelector("button");
button.addEventListener("click", e => {
    let dimensions = prompt("What res do you want the next canvas? (Enter the number of pixels of one side)");
    while (grid.children.length > 0) {
        grid.removeChild(grid.lastChild);
    }
    createGrid(dimensions);
});

createGrid(16);
