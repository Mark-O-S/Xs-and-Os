// Create variable for player 'X' and player 'Circle'
// Set rule to win the game 
const PLAYER_X = 'x';
const PLAYER_CIRCLE = 'circle';
const PLAYER_ONE = 'Player 1';
const BOT_NAME = 'Bot';
const PLAYER_ONE_SCORE_TAG_ID = 'player1-score';
const BOT_SCORE_TAG_ID = 'bot-score';
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
let playerOneScore = document.getElementById('player1-score');
let botScore = document.getElementById('bot-score');

// Start game function

startGame();

restartButton.addEventListener('click', startGame);
//Set up the board for a new game
function startGame() {
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
function handleCellClick(e) {
    const cell = e.target;
    const currentPlayer = PLAYER_X;
    placeMark(cell, currentPlayer);

    if (checkWin(currentPlayer)) {
        endGame(false, false);
    } else if (isaDraw()) {
        endGame(true, false);
    } else {
        setBoardHoverClass();
    }

    // Bot is going to take their turn now
    // Use the rand function to generate a random available position for the bot to place their shape on the board
    // freecells is a list of the cell indices that are available e.g. [2,5,8]
    if (!winningMessage.classList.contains('show')) {
        const freeCells = getNumberOfFreeCells();
        const randomCell = Math.floor(Math.random() * freeCells.length);
        const botCell = freeCells[randomCell]
        const botPlayer = "bot";
        placeMark(botCell, PLAYER_CIRCLE);
        
        if (checkWin(PLAYER_CIRCLE)) {
            endGame(false, true);
        } else if (isaDraw()) {
            endGame(true, true);
        } else {
            setBoardHoverClass();
        }
    }
}

function getNumberOfFreeCells() {
    let freeCells = [];
    // Get all the cells
    // Get all the cells that have class as cell, meaning it is an available cell
    cellElements.forEach(cell => {
        if (!cell.classList.contains(PLAYER_X) && !cell.classList.contains(PLAYER_CIRCLE)) {
            freeCells.push(cell)
        }
    });
    return freeCells;
}

// Validate the input the user enters for the player name
// Checks the user input must be less than 11 characters, is a string type and is not an empty string
function validatePlayerNameUserInput (playerName) {
    validPlayerName = PLAYER_ONE;
    if (playerName !== "" && playerName.length < 11 && typeof playerName === 'string') {
        validPlayerName = playerName
    }
    return validPlayerName
}

// Update the player winning score
function updatePlayerWinScore(playerScoreTagID) {
    var currentScore = Number(document.getElementById(playerScoreTagID).innerHTML);
    currentScore += 1
    document.getElementById(playerScoreTagID).innerHTML = currentScore
}

// Note to self - Fix issue that Player O keeps winning
// End game function
function endGame(draw, isABot) {
    let playerWinner = BOT_NAME;
    if (!isABot) {
        playerWinner = validatePlayerNameUserInput(document.getElementById('player1').value);
    }
    if (draw) {
        winningMessageText.innerText = "It's a draw!";
    } else {
        winningMessageText.innerText = `${playerWinner} Wins!`;
    }
    const playerScoreTagID = isABot ? BOT_SCORE_TAG_ID : PLAYER_ONE_SCORE_TAG_ID
    updatePlayerWinScore(playerScoreTagID)
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

function setBoardHoverClass() {
    boardElement.classList.remove(PLAYER_X);
    boardElement.classList.remove(PLAYER_CIRCLE);
    boardElement.classList.add(PLAYER_X);
}

// Check if the current player has won the game
function checkWin(currentPlayer) {
    return WINNING_COMBO.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentPlayer);
        });
    });
}
