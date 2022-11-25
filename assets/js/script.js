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
const roundsDisplay = document.getElementById("rounds-played")
let rounds = 0;
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
        compScore++;
    }
    if (playerChoice == "Rock" && computerChoice == "Scissors" ) {
        result = "Player wins!"
        playerScore++;
    }
    if (playerChoice == "Paper" && computerChoice == "Rock") {
        result = "Player wins!"
        playerScore++;
    }
    if (playerChoice == "Paper" && computerChoice == "Scissors") {
        result = "Computer wins!"
        compScore++;
    }
    if (playerChoice == "Scissors" && computerChoice == "Rock") {
        result = "Computer wins!"
        compScore++;
    }
    if (playerChoice == "Scissors" && computerChoice == "Paper") {
        result = "Player wins!"
        playerScore++;
    }
    if (result != "Draw!"){
        rounds++;
    }

    if (playerScore == 3 || compScore == 3) {
        rounds = 0;
        playerScore = 0;
        compScore = 0;
    }



    resultDisplay.innerHTML = result
    playerScoreDisplay.innerHTML = playerScore
    compScoreDisplay.innerHTML = compScore
    roundsDisplay.innerHTML = rounds

}
