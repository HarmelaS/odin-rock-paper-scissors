// computer picks from list of Rock, Paper, Scissors
// player inputs a move
// goes through a function that checks if it is a valid option
    // if option is NOT valid, return to prompt
    //  if it is valid, goes to the playRound()
// game function takes playerSection and computerSelection
    /*
    P - C

    r - r = tie
    p - r = player W
    s - r = computer W


    r - p = player W
    p - p = tie
    s - p = player W

    r - s = player W
    p - s = computer W
    s - s = tie
    */


// Declares variables
const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";


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



function playRound(computerSelection, playerSelection) {
    // gets computer & player selection 
    computerSelection = computerPlay();
    playerSelection = userPlay();
    console.log(playerSelection, computerSelection);

    // Winner when computer chooses ROCK:
    if (computerSelection === rock && playerSelection === rock) {
        alert(`TIE: You both chose ${computerSelection}`);
    } else if (computerSelection === rock && playerSelection === paper) {
        alert(`YOU WIN!: Computer chose ${computerSelection}`);
    } else if (computerSelection === rock && playerSelection === scissors) {
        alert(`YOU LOSE: Computer chose ${computerSelection}`);
    }
    // Winner when computer chooses PAPER
    else if (computerSelection === paper && playerSelection === rock) {
        alert(`YOU LOSE: Computer chose ${computerSelection}`);
    } else if (computerSelection === paper && playerSelection === paper) {
        alert(`TIE: You both chose ${computerSelection}`);
    } else  if (computerSelection === paper && playerSelection === scissors) {
        alert(`YOU WIN!: Computer chose ${computerSelection}`);
    }
    // Winner when computer chose SCISSORS
    else if (computerSelection === scissors && playerSelection === rock) {
        alert(`YOU WIN!: Computer chose ${computerSelection}`);
    } else if (computerSelection === scissors && playerSelection === paper) {
        alert(`YOU LOSE: Computer chose ${computerSelection}`);
    } else if (computerSelection === scissors && playerSelection === scissors) {
        alert(`TIE: You both chose ${computerSelection}`);
    }
}

playRound();
