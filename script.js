// ROCK PAPER SCISSORS

// Declares variables
const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";
let winner;
let loser;
let playerPoint = 0;
let computerPoint = 0;


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

// Gets user input to play rock, paper, scissors
function userPlay () {
    const playerPrompt = prompt("Rock, Paper, Sissors, SHOOT!");
    const playerInput = playerPrompt.toUpperCase();    
    // Checks if user input is a valid option
    if (playerInput != rock && playerInput != paper && playerInput != scissors) {
        alert("Not valid please try again!");
        return userPlay();
    } 
    // Returns players valid input
    return playerInput;
}

// Takes player & computer selections and determines winner
function playRound(computerSelection, playerSelection) {
    // gets computer & player selection 
    computerSelection = computerPlay();
    playerSelection = userPlay();
    

    // Winner when computer chooses ROCK:
    if (computerSelection === rock && playerSelection === rock) {
     
        alert(`Tie round. Both chose rock. \n\nSCORE: PLAYER ${playerPoint} - COMPUTER ${computerPoint} `);
    } else if (computerSelection === rock && playerSelection === paper) {
        playerPoint++;
        alert(`You win! Paper beats rock. \n\nSCORE: PLAYER ${playerPoint} - COMPUTER ${computerPoint}`);
    } else if (computerSelection === rock && playerSelection === scissors) {
        computerPoint++;
        alert(`Computer wins. Rock beats scissors. \n\nSCORE: PLAYER ${playerPoint} - COMPUTER ${computerPoint} `);
    }
    // Winner when computer chooses PAPER
    else if (computerSelection === paper && playerSelection === rock) {
        computerPoint++;
        alert(`Computer wins. Paper beats rock. \n\nSCORE: PLAYER ${playerPoint} - COMPUTER ${computerPoint} `);
    } else if (computerSelection === paper && playerSelection === paper) {
        
        alert(`Tie round. Both chose paper. \n\nSCORE: PLAYER ${playerPoint} - COMPUTER ${computerPoint}`);
    } else  if (computerSelection === paper && playerSelection === scissors) {
       playerPoint++;
       alert(`You win! Paper beats scissors. \n\nSCORE: PLAYER ${playerPoint} - COMPUTER ${computerPoint} `);
    }
    // Winner when computer chose SCISSORS
    else if (computerSelection === scissors && playerSelection === rock) {
        playerPoint++;
        alert(`You win! Rock beats scissors. \n\nSCORE: PLAYER ${playerPoint} - COMPUTER ${computerPoint}`);
    } else if (computerSelection === scissors && playerSelection === paper) {
        computerPoint++;
        alert(`Computer wins. Scissors beats paper. \n\nSCORE: PLAYER ${playerPoint} - COMPUTER ${computerPoint} `);
    } else if (computerSelection === scissors && playerSelection === scissors) {
     
        alert(`Tie round. Both chose scissors. \n\nSCORE: PLAYER ${playerPoint} - COMPUTER ${computerPoint}`);
    }
    
}

// Runs the game through 5 rounds and determines winner & loser 
function game() {
    for (let i = 1; i < 6; i++) {
        alert("Round " + [i]);
        playRound();
    }
    if (playerPoint > computerPoint) {
        alert(`YOU WIN :) \n\nFINAL SCORE: PLAYER ${playerPoint} - COMPUTER ${computerPoint}`);
    } else if (playerPoint === computerPoint) {
        alert(`TIE GAME :/ \n\nFINAL SCORE: PLAYER ${playerPoint} - COMPUTER ${computerPoint}`)
    }
    else {
        alert(`YOU LOSE :( \n\nFINAL SCORE: PLAYER ${playerPoint} - COMPUTER ${computerPoint}`);
    }
}

// Initializes game 
// game();
