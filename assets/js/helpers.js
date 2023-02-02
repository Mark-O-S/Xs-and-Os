export const PLAYER_X = 'x';
export const PLAYER_CIRCLE = 'circle';
export const WINNING_COMBO = [
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
export const cellElements = document.querySelectorAll('[data-cell]');
export const boardElement = document.getElementById('board');
export const winningMessage = document.getElementById('winningMsg');
export const winningMessageText = document.getElementById('winningMsgText');
export const restartButton = document.getElementById('restartButton');

// Check if the current player has won the game
export function checkWin(currentPlayer) {
    return WINNING_COMBO.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentPlayer);
        });
    });
}

// Update the player winning score
export function updatePlayerWinScore(playerScoreTagID) {
    var currentScore = Number(document.getElementById(playerScoreTagID).innerHTML);
    currentScore += 1
    document.getElementById(playerScoreTagID).innerHTML = currentScore
}

// Game function if it's a draw
export function isaDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(PLAYER_X) || cell.classList.contains(PLAYER_CIRCLE);
    });
}

// Place Mark function
export function placeMark(cell, currentPlayer) {
    cell.classList.add(currentPlayer);
}

export function setBoardHoverClass() {
    boardElement.classList.remove(PLAYER_X);
    boardElement.classList.remove(PLAYER_CIRCLE);
    boardElement.classList.add(PLAYER_X);
}
