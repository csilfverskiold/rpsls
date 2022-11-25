/**
 * "Declare constants for DOM elements and
 * possible choices"
 * ^ -- QUOTED FROM CI PP2 SCOPE- REWORD THIS! -- ^
 */
const playerChoiceDisplay = document.getElementById('player-choice')
const computerChoiceDisplay = document.getElementById('computer-choice')
const resultDisplay = document.getElementById('result')
const buttonChoices = document.querySelectorAll('button')
let playerChoice
let computerChoice
let result

for (let button of buttonChoices) {
    button.addEventListener("click", function() {
        let playerChoice = this.getAttribute("data-choice");
        playerChoiceDisplay.innerHTML = playerChoice
        generateComputerChoice()
        showResult()
    })
}

/**
 * This function randomly generates and displays the
 * computers choice in the game
 */
function generateComputerChoice() {

    let generateNumber = Math.floor(Math.random() * 3) + 1;

    if (generateNumber == 1) {
        computerChoice = "Rock"
    }
    if (generateNumber == 2) {
        computerChoice = "Paper"
    }
    if (generateNumber == 3) {
        computerChoice = "Scissors"
    }

    computerChoiceDisplay.innerHTML = computerChoice

}

// The block of code above was slightly reworded for my project and taken from: https://www.youtube.com/watch?v=RwFeg0cEZvQ 

/**
 * This function displays if the player or computer won
 */
function showResult() {

    if (playerChoice == computerChoice) {
        result = "Draw!"
    }
    if (playerChoice == "Rock" && computerChoice == "Paper") {
        result = "Computer wins!"
    }
    if (playerChoice == "Rock" && computerChoice == "Scissors" ) {
        result = "Player wins!"
    }
    if (playerChoice == "Paper" && computerChoice == "Rock") {
        result = "Player wins!"
    }
    if (playerChoice == "Paper" && computerChoice == "Scissors") {
        result = "Computer wins!"
    }
    if (playerChoice == "Scissors" && computerChoice == "Rock") {
        result = "Computer wins!"
    }
    if (playerChoice == "Scissors" && computerChoice == "Paper") {
        result = "Player wins!"
    }

    resultDisplay.innerHTML = result

}

// The block of code above was slightly reworded for my project and taken from: https://www.youtube.com/watch?v=RwFeg0cEZvQ 

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