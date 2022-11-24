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
let result

buttonChoices.forEach(buttonChoice => buttonChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.innerHTML = playerChoice
    generateComputerChoice()
    showResult()

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
 * This function displays if the player or computer won
 */
function showResult() {

    if (playerChoice == computerChoice) {
        result = "Draw!"
    }
    if (playerChoice == "rock" && computerChoice == "paper") {
        result = "Computer wins!"
    }
    if (playerChoice == "rock" && computerChoice == "scissors" ) {
        result = "Player wins!"
    }
    if (playerChoice == "paper" && computerChoice == "rock") {
        result = "Player wins!"
    }
    if (playerChoice == "paper" && computerChoice == "scissors") {
        result = "Computer wins!"
    }
    if (playerChoice == "scissors" && computerChoice == "rock") {
        result = "Computer wins!"
    }
    if (playerChoice == "scissors" && computerChoice == "paper") {
        result = "Player wins!"
    }

    resultDisplay.innerHTML = result

}



/**
 * This function displays the players current winning score
 */
function incrementPlayerWin() {

}

/**
 * This function displays the computers current winning score
 */
function incrementComputerWin() {

}

/**
 * This function displays the amount of rounds played 
 */
function incrementRounds() {

}