// Create variable for player 'X' and player 'Circle'
// Set rule to win the game 
const PLAYER_X = 'x';
const PLAYER_CIRCLE = 'circle';
const WINNING_COMBO = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Target data-cell attribute with square bracket
// Target the following attributes
const cellElements = document.querySelectorAll('[data-cell]');
const boardElement = document.getElementById('board');
const winningMessage = document.getElementById('winningMsg');
const winningMessageText = document.getElementById('winningMsgText');
const restartButton = document.getElementById('restartButton');

// Start game function
let circleFirst;

startGame();

restartButton.addEventListener('click', startGame);
//Set up the board for a new game
function startGame() {
    circleFirst = false;
    cellElements.forEach(cell => {
        cell.classList.remove(PLAYER_X);
        cell.classList.remove(PLAYER_CIRCLE);
        cell.removeEventListener('click', handleCellClick);
        cell.addEventListener('click', handleCellClick, {
            once: true
        });
    });
    setBoardHoverClass();
    winningMessage.classList.remove('show');
}

// Check if player has clicked a cell
// Note to self: Change this functions for the bot code for tomorrow
function handleCellClick(e) {
    const cell = e.target;
    const currentPlayer = circleFirst ? PLAYER_CIRCLE : PLAYER_X;
    placeMark(cell, currentPlayer);

    if (checkWin(currentPlayer)) {
        endGame(false);
    } else if (isaDraw()) {
        endGame(true);
    } else {
        nextTurn();
        setBoardHoverClass();
    }
}

// End game function
function endGame(draw) {
    if (draw) {
        winningMessageText.innerText = "It's a draw!";
    } else {
        winningMessageText.innerText = `${circleFirst ? 'O' : 'X'} Wins!`;
    }
    winningMessage.classList.add('show');
}

// Game function if it's a draw
function isaDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(PLAYER_X) || cell.classList.contains(PLAYER_CIRCLE);
    });
}

// Place Mark function
function placeMark(cell, currentPlayer) {
    cell.classList.add(currentPlayer);
}

// Move to next player after each turn
function nextTurn() {
    circleFirst = !circleFirst;
}

function setBoardHoverClass() {
    boardElement.classList.remove(PLAYER_X);
    boardElement.classList.remove(PLAYER_CIRCLE);
    if (circleFirst) {
        boardElement.classList.add(PLAYER_CIRCLE);
    } else {
        boardElement.classList.add(PLAYER_X);
    }
}

// Check if the current player has won the game
function checkWin(currentPlayer) {
    return WINNING_COMBO.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentPlayer);
        });
    });
}
