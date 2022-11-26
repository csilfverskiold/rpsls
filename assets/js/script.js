/**
 * Declare variables for DOM elements
 */
const playerChoiceDisplay = document.getElementById("player-choice")
const computerChoiceDisplay = document.getElementById("computer-choice")
const resultDisplay = document.getElementById("result")
const playerScoreDisplay = document.getElementById("player-score")
const compScoreDisplay = document.getElementById("comp-score")
const buttonChoices = document.querySelectorAll("button")
const roundsDisplay = document.getElementById("rounds-played")
let playerChoice
let computerChoice
let result
let playerScore = 0;
let compScore = 0;
let rounds = 0;

/**
 * Event listener to fire when player clicks button choice
 */
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
    if (playerChoice == "Rock" && computerChoice == "Scissors") {
        result = "Player wins!"
        playerScore++;
    }
    if (playerChoice == "Rock" && computerChoice == "Lizard") {
        result = "Player wins!"
        playerScore++;
    }
    if (playerChoice == "Rock" && computerChoice == "Spock") {
        result = "Computer wins!"
        compScore++;
    }
    if (playerChoice == "Paper" && computerChoice == "Rock") {
        result = "Player wins!"
        playerScore++;
    }
    if (playerChoice == "Paper" && computerChoice == "Scissors") {
        result = "Computer wins!"
        compScore++;
    }
    if (playerChoice == "Paper" && computerChoice == "Lizard") {
        result = "Computer wins!"
        compScore++;
    }
    if (playerChoice == "Paper" && computerChoice == "Spock") {
        result = "Player wins!"
        playerScore++;
    }
    if (playerChoice == "Scissors" && computerChoice == "Rock") {
        result = "Computer wins!"
        compScore++;
    }
    if (playerChoice == "Scissors" && computerChoice == "Paper") {
        result = "Player wins!"
        playerScore++;
    }
    if (playerChoice == "Scissors" && computerChoice == "Lizard") {
        result = "Player wins!"
        playerScore++;
    }
    if (playerChoice == "Scissors" && computerChoice == "Spock") {
        result = "Computer wins!"
        compScore++;
    }
    if (playerChoice == "Lizard" && computerChoice == "Rock") {
        result = "Computer wins!"
        compScore++;
    }
    if (playerChoice == "Lizard" && computerChoice == "Paper") {
        result = "Player wins!"
        playerScore++;
    }
    if (playerChoice == "Lizard" && computerChoice == "Scissors") {
        result = "Computer wins!"
        compScore++;
    }
    if (playerChoice == "Lizard" && computerChoice == "Spock") {
        result = "Player wins!"
        playerScore++;
    }
    if (playerChoice == "Spock" && computerChoice == "Rock") {
        result = "Player wins!"
        playerScore++;
    }
    if (playerChoice == "Spock" && computerChoice == "Paper") {
        result = "Computer wins!"
        compScore++;
    }
    if (playerChoice == "Spock" && computerChoice == "Scissors") {
        result = "Player wins!"
        playerScore++;
    }
    if (playerChoice == "Spock" && computerChoice == "Lizard") {
        result = "Computer wins!"
        compScore++;
    }
    if (result != "Draw!"){
        rounds++;
    }
    if (playerScore == 5 || compScore == 5) {
        rounds = 0;
        playerScore = 0;
        compScore = 0;
    }

    resultDisplay.innerHTML = result
    playerScoreDisplay.innerHTML = playerScore
    compScoreDisplay.innerHTML = compScore
    roundsDisplay.innerHTML = rounds

}
