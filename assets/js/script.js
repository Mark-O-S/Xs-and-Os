// Modal pop up box for the 'How to play' section

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('how-to-overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.how-to-modal.active')
    modals.forEach( modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.how-to-modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal === null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal === null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}


// Create variable for player 'X' and player 'O'

const PLAYER_X = 'x'
const PLAYER_CIRCLE = 'circle'

// Set rule to win the game 

const WINNING_COMBO = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// Target data-row attribute with square bracket

const dataRow = document.querySelectorAll ('[data-row]')

// Target the following attributes

const theBoard = document.getElementById ('board')
const winningMessage = document.getElementById ('winningMsg')
const winningMessageText = document.getElementById ('winningMsgText')
const playAgain = document.getElementById ('restartButton')


// Start game function

let circleFirst

startGame()
restartButton.addEventListener('click', startGame)

function startGame() {
    circleFirst = false
    dataRow.forEach (row => {
        row.classList.remove (PLAYER_X)
        row.classList.remove (PLAYER_CIRCLE)
        row.removeEventListener ('click', handleRowClick)
        row.addEventListener ('click', handleRowClick, { once: true })
    })
    setBoardHoverClass ()
    winningMessage.classList.remove ('show')
}

// End game function

function endGame(draw) {
    if (draw) {
        winningMessageText.innerText = "It's a draw!"
    } else {
        winningMessageText.innerText = `Player with ${circleFirst ? "X's" : "O's"} win!`
    }
    winningMessage.classList.add('show')
}

// Draw game function

function isaDraw() {
    return [...dataRow].every(row => {
        return row.classList.contains(PLAYER_X) || row.classList.contains(PLAYER_CIRCLE)
    })
}

// Place Mark function

function placeMark(row, currentPlayer) {
    row.classList.add(currentPlayer)
}

function nextTurn() {
    circleFirst = !circleFirst
}

function setBoardHoverClass () {
    theBoard.classList.remove(PLAYER_X)
    theBoard.classList.remove(PLAYER_CIRCLE)
    if (circleFirst) {
        theBoard.classList.add(PLAYER_CIRCLE)
    } else {
        theBoard.classList.add(PLAYER_X)
    }
}

function handleRowClick (mouse) {
    const row = mouse.target
    const currentPlayer = circleFirst ? PLAYER_X : PLAYER_CIRCLE

    placeMark(row, currentPlayer)

    if (checkWin (currentPlayer)) {
        endGame(false)
    } else if (isaDraw()) {
        endGame(true)
    } else {
        nextTurn()
        setBoardHoverClass()
    }
}

function checkWin (currentPlayer) {
    return WINNING_COMBO.some(combination => {
        return combination.every(index => {
            return dataRow[index].classList.contains(currentPlayer)
        })
    })
}


