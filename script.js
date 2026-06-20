let humanScore = 0;
let computerScore = 0;

console.log("Welcome to Rock, Paper, Scissors!");
console.log("There will be 5 rounds. May the best player win!");

function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

