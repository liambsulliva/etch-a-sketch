// Globals
const numSquares = 256; // 16 x 16 Default
const board = document.querySelector('.board');
const dimensionsBtn = document.querySelector('.dimensions_btn');
const colorPicker = document.querySelector('.color_picker');
const resetBtn = document.querySelector('.reset_btn');

// First pass draw
drawBoard(numSquares);

//* Inserts number of squares corresponding to "len"
function drawBoard (len) {
    // Generate squares to draw in
    for (let i = 0; i < len; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        board.appendChild(square);
        square.addEventListener('mouseover', (e) => {
            square.style.backgroundColor = '#000050';
        });
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
    const color = prompt('Pick a color: ');
    //! Missing Implementation
});

resetBtn.addEventListener('click', () => {
    clearBoard();
    drawBoard(numSquares);
});
