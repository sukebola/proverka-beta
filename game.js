const boardSize = 5;  // Сетка 5x5
let board = [];

function initGame() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';
    board = Array(boardSize * boardSize).fill(0);

    for (let i = 0; i < boardSize * boardSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gameBoard.appendChild(cell);
    }

    document.getElementById('reveal-button').style.display = 'inline-block';
    document.getElementById('reset-button').style.display = 'none';
    document.getElementById('reveal-button').disabled = false;
}

function revealCells() {
    let revealedCount = 0;
    const revealNextCell = () => {
        let randomIndex = Math.floor(Math.random() * board.length);
        if (board[randomIndex] === 0) {
            const cell = document.querySelectorAll('.cell')[randomIndex];
            cell.textContent = '⭐';
            cell.classList.add('revealed');
            board[randomIndex] = 1;
            revealedCount++;
        }

        if (revealedCount < 3) {
            setTimeout(revealNextCell, 500); // Открываем следующий квадрат через 500 мс
        } else {
            document.getElementById('reveal-button').disabled = true;
            document.getElementById('reset-button').style.display = 'inline-block';
        }
    };

    revealNextCell();
}

function resetGame() {
    initGame();
}

window.onload = () => {
    initGame();
    document.getElementById('reveal-button').addEventListener('click', revealCells);
    document.getElementById('reset-button').addEventListener('click', resetGame);
    const slider = document.getElementById('mine-slider');
    const sliderValue = document.getElementById('slider-value');

    slider.addEventListener('input', () => {
        sliderValue.textContent = slider.value;
    });
};
