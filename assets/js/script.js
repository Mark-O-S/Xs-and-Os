// Target all cells with class of "row"
// Set up event listener for when each cell is clicked

function clickThis() {
    console.log(this.row)
}

let cellars = document.getElementsByClassName("row")
console.log("these are cells", cellars)
for (let i = 0; i < cellars.length; i++) {
    cellars[i].addEventListener('click', clickThis);
}




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
console.log("fhjiowesjfgoiJwepgIOJH")

// Create the game board
// const gameBoard = [
//     ["", "", ""],
//     ["", "", ""],
//     ["", "", ""]
// ]
// console.log("these are cells")

// // Update the game board for when a user clicks 




