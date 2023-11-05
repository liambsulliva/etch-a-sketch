// Globals
const numSquares = 256; // 16 x 16
const board = document.querySelector('.board');


// Generate squares to draw in
for (let i = 0; i < numSquares; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    board.appendChild(square);
}