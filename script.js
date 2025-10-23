const grid = document.querySelector("#grid");

function createGrid(a,b) {
    for (i = 0; i < a; i++) {
        var column = document.createElement("div");
        column.id = "column";
        for (j = 0; j < b; j++) {
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

createGrid(16,16);
