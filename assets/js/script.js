
/**
 * "Declare constants for DOM elements and
 * possible choices"
 * ^ -- QUOTED FROM CI PP2 SCOPE- REWORD THIS! -- ^
 */
const playerChoiceDisplay = document.getElementById('player-choice')
const computerChoiceDisplay = document.getElementById('computer-choice')
const resultDisplay = document.getElementById('result')
const buttonChoices = document.querySelectorAll('button')
let computerChoice

buttonChoices.forEach(buttonChoice => buttonChoice.addEventListener('click', (e) => {
playerChoice = e.target.id 
playerChoiceDisplay.innerHTML = playerChoice
generateComputerChoice()

})) // The block of code above was slightly reworded for my project and taken from: https://www.youtube.com/watch?v=RwFeg0cEZvQ 


/**
 * This function randomly generates and displays the
 * computers choice in the game
 */
function generateComputerChoice() {

    let generateNumber = Math.floor(Math.random() * 3) + 1;

    if (generateNumber == 1) {
        computerChoice = "rock"
    }
    if (generateNumber == 2) {
        computerChoice = "paper"
    }
    if (generateNumber == 3) {
        computerChoice = "scissors"
    }

    computerChoiceDisplay.innerHTML = computerChoice

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