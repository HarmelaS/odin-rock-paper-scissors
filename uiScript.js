// Declare variables
const buttons = document.querySelectorAll('button');
const rock = "ROCK"
const paper = "PAPER"
const scissors = "SCISSORS"
let playerPick;
let winner;
let loser;
let playerPoint = 0;
let computerPoint = 0;


// Game starts when choice is picked
buttons.forEach((button) => {
    button.addEventListener('click', () => 
    playRound(),
    playerChoice()
)})


// Gets player selection 
 buttons.forEach((button) => {
    button.addEventListener('click', playerChoice);
})

function playerChoice() {
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            playerPick = e.target.textContent.toUpperCase();
        })
    })
    return playerPick
}

// Generates random selection for rock, paper, scissors
function computerPlay() {
    let list = ["Rock", "Paper", "Scissors"];
    // get random index from array
    let randomIndex = Math.floor(Math.random() * list.length); 
    // get the string from random index
    let randomPick = list[randomIndex].toUpperCase();
    // displays on the console
    return randomPick;
}

// Takes player and computer selection and determines winner
function playRound(computerSelection, playerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerChoice();
}   

