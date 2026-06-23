let humanScore = 0;
let computerScore = 0;


const buttons = document.querySelectorAll(".choice-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const humanChoice = button.dataset.choice;
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    });
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        updateResult(`It's a tie! Both chose ${humanChoice}.`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        updateResult(`You win! ${capitalize(humanChoice)} beats ${computerChoice}.`);
    } else {
        computerScore++;
        updateResult(`You lose! ${capitalize(computerChoice)} beats ${humanChoice}.`);
    }

    updateScores();
    checkGameOver();
}

function updateResult(message) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = message;
}

function updateScores() {
    document.getElementById("human-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;
}

function checkGameOver() {
    if (humanScore === 5) {
        alert("Congratulations! You won the game!");
        resetGame();
    } else if (computerScore === 5) {
        alert("Game over! The computer won the game.");
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScores();
    updateResult("Make your choice!");
}

