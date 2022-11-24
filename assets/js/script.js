
/**
 * "Declare constants for DOM elements and
 * possible choices"
 * ^ -- QUOTED FROM CI PP2 SCOPE- REWORD THIS! -- ^
 */
const playerChoiceDisplay = document.getElementById('player-choice')
const computerChoiceDisplay = document.getElementById('computer-choice')
const resultDisplay = document.getElementById('result')
const buttonChoices = document.querySelectorAll('button')
let userChoice

buttonChoices.forEach(buttonChoice => buttonChoice.addEventListener('click', (e) => {
userChoice = e.target.id 
playerChoiceDisplay.innerHTML = userChoice
})) // The block of code above was slightly reworded for my project and taken from: https://www.youtube.com/watch?v=RwFeg0cEZvQ 


/**
 * This function displays the players choice in the game
 */
 function playerChoice() {

}

/**
 * This function randomly generates and displays the
 * computers choice in the game
 */
function generateComputerChoice() {

}

/**
 * This function displays the players current winning score
 */
function incrementWin() {

}

/**
 * This function displays the players current losing score
 */
function incrementLoss() {

} 

/**
 * This function displays the amount of rounds played 
 */
function incrementRounds() {
    
}