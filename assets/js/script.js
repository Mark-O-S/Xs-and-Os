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
