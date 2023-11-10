// Globals
const board = document.querySelector('.board');
const dimensionsBtn = document.querySelector('.dimensions_btn');
const resetBtn = document.querySelector('.reset_btn');
const colorPicker = document.querySelector('.color_picker');
const sideLen = 16 // 16 Side Length Default
var numSquares = 256; // 16 x 16 Default
var color = 'red'; //Default Color
let isDrawing = false;

// First pass draw
drawBoard(numSquares);

//* Inserts number of squares corresponding to "len"
function drawBoard (len) {
    // Generate squares to draw in
    for (let i = 0; i < len; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.addEventListener('mousedown', () => {
            isDrawing = true;
        });
        
        square.addEventListener('mouseup', () => {
            isDrawing = false;
        });
        
        square.addEventListener('mousemove', (e) => {
            if (!isDrawing) return;
            square.style.backgroundColor = color;
        });
        board.appendChild(square);
    }
}

//* Takes out square divs
function clearBoard () {
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
}

dimensionsBtn.addEventListener('click', () => {
    const dimensions = prompt('Please enter your desired side length: ');
    if (dimensions >= 100) {
        alert('Please enter a smaller number!');
        return;
    }
    clearBoard();
    board.style.width = dimensions * 38 + 'px';
    drawBoard(dimensions**2);
});

colorPicker.addEventListener('click', () => {
    color = prompt('Pick a color: ');
});

resetBtn.addEventListener('click', () => {
    clearBoard();
    board.style.width = sideLen * 38 + 'px';
    drawBoard(numSquares);
});
