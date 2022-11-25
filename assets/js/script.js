/**
 * "Declare constants for DOM elements and
 * possible choices"
 * ^ -- QUOTED FROM CI PP2 SCOPE- REWORD THIS! -- ^
 */
const playerChoiceDisplay = document.getElementById("player-choice")
const computerChoiceDisplay = document.getElementById("computer-choice")
const resultDisplay = document.getElementById("result")
const playerScoreDisplay = document.getElementById("player-score")
const compScoreDisplay = document.getElementById("comp-score")
const buttonChoices = document.querySelectorAll("button")
let playerChoice
let computerChoice
let result
let playerScore = 0;
let compScore = 0;

for (let button of buttonChoices) {
    button.addEventListener("click", function() {
        playerChoice = this.getAttribute("data-choice");
        playerChoiceDisplay.innerHTML = playerChoice
        generateComputerChoice()
        showResult()
        incrementPlayerWin()
        incrementComputerWin()
    })
    
}

/**
 * This function randomly generates and displays the
 * computers choice in the game
 */
function generateComputerChoice() {

    let generateNumber = Math.floor(Math.random() * 5);
    const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    computerChoice = choices[generateNumber]

    computerChoiceDisplay.innerHTML = computerChoice

}

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

    if (playerChoice == "Rock" && computerChoice == "Scissors" ) {
        result = "Player wins!"
        playerScore++;
    }
    if (playerChoice == "Paper" && computerChoice == "Rock") {
        result = "Player wins!"
        playerScore++;
    }
    if (playerChoice == "Scissors" && computerChoice == "Paper") {
        result = "Player wins!"
        playerScore++;
    }

    playerScoreDisplay.innerHTML = playerScore

}

/**
 * This function displays the computers current winning score
 */
/*function incrementComputerWin() {

    if (playerChoice == "Rock" && computerChoice == "Paper") {
        compScore++;
    } 

    if (playerChoice == "Paper" && computerChoice == "Scissors") {
        result = "Computer wins!"
        compScore++;
    }
    if (playerChoice == "Scissors" && computerChoice == "Rock") {
        result = "Computer wins!"
        compScore++;
    }

    compScoreDisplay.innerHTML = compScore++;

}*/

/**
 * This function displays the amount of rounds played 
 */
function incrementRounds() {

}