let humanScore = 0;
let computerScore = 0;

console.log("Welcome to Rock, Paper, Scissors!");
console.log("There will be 5 rounds. May the best player win!");

function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

function getHumanChoice(){
    const userInput = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
    return userInput;
}
let userinp;
do{
    userinp = prompt("Do you want to play? (yes/no)").toLowerCase();
    if(userinp === "yes" || userinp === "y"){
        playGame();
    }
} while(userinp === "yes" || userinp === "y");

function playGame(){
    for(let i=0; i<5; i++){
        const playerSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
    }
    function playRound(playerSelection,computerSelection){
        if(playerSelection === computerSelection){
            console.log(`It's a tie! Both chose ${playerSelection}`);
        }
        else if(playerSelection === "rock" && computerSelection === "scissors" ||
                playerSelection === "paper" && computerSelection === "rock" ||
                playerSelection === "scissors" && computerSelection === "paper"){

            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            humanScore++;
        }
        else{
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            computerScore++;
        }

        console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
}

if(humanScore > computerScore){
    console.log("Congratulations! You won the game!");
}
else if(computerScore > humanScore){
    console.log("Sorry! The computer won the game!");
}
else{
    console.log("It's a tie game!");
}
