const container = document.getElementById("container");
const resetButton = document.getElementById("reset-button");

let gridSize = 16; // default 16x16 grid

// Create grid function
function createGrid(size) {
    container.innerHTML = ''; // clear existing grid
    const squareSize = 960 / size; // size of each square in px

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Add hover effect
        square.addEventListener("mouseenter", () => {
            // Extra credit: random color
            // const r = Math.floor(Math.random() * 256);
            // const g = Math.floor(Math.random() * 256);
            // const b = Math.floor(Math.random() * 256);
            // square.style.backgroundColor = `rgb(${r},${g},${b})`;

            // Progressive darkening effect
            let currentOpacity = parseFloat(square.dataset.opacity) || 0;
            if (currentOpacity < 1) currentOpacity += 0.1;
            square.style.backgroundColor = `rgba(0,0,0,${currentOpacity})`;
            square.dataset.opacity = currentOpacity;
        });

        container.appendChild(square);
    }
}

// Button event to reset grid
resetButton.addEventListener("click", () => {
    let newSize = prompt("Enter new grid size (max 100):", gridSize);
    newSize = parseInt(newSize);
    if (newSize > 100) newSize = 100;
    if (newSize < 1 || isNaN(newSize)) newSize = 16;
    gridSize = newSize;
    createGrid(gridSize);
});

// Initial grid
createGrid(gridSize);
