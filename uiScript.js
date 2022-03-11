// Declare variables
const buttons = document.querySelectorAll('button');
const rock = "ROCK"
const paper = "PAPER"
const scissors = "SCISSORS"
let displayWinner = document.querySelector('#winner');
let playerPick;
// let winner;
// let loser;
let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');
let playerPoint = 0;
let computerPoint = 0;

// Initialize score to 0;
computerScore.textContent += computerPoint;
playerScore.textContent += playerPoint;


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
    console.log(`computer: ` + computerSelection);
    console.log(`player: ` + playerSelection);    

    // Winning declarations when player choose ROCK:
    if(playerSelection === rock && computerSelection === rock) {
        displayWinner.textContent = "TIE";
    } else if (playerSelection === rock && computerSelection === paper) {
        displayWinner.textContent = "COMPUTER WINS";
        computerPoint++;
        // computerScore.textContent += computerPoint;
    } else if (playerSelection === rock && computerSelection === scissors) {
        displayWinner.textContent = "YOU WIN";
        playerPoint++;
        // playerScore.textContent += playerPoint;
    } 
    // Winning declarations when player choose PAPER
   else if (playerSelection === paper && computerSelection === paper) {
        displayWinner.textContent = "TIE";
    } else if (playerSelection === paper && computerSelection === rock) {
        displayWinner.textContent = "YOU WIN";
        playerPoint++;
        // playerScore.textContent +=  playerPoint;
    } else if (playerSelection === paper && computerSelection === scissors) {
        displayWinner.textContent = "COMPUTER WINS";
        computerPoint++;
        // computerScore.textContent += computerPoint;
    }
    // Winning declarations when player choose SCISSORS
    else if (playerSelection === scissors && computerSelection === scissors) {
        displayWinner.textContent = "TIE";
    } else if (playerSelection === scissors && computerSelection === paper) {
        displayWinner.textContent = "YOU WIN";
        playerPoint++;
        // playerScore.textContent += playerPoint;
    } else if (playerSelection === scissors && computerSelection === rock) {
        displayWinner.textContent = "COMPUTER WINS";
        computerPoint++;
        // computerScore.textContent += computerPoint;
    }
    
    // game plays for 5 rounds, then displays the winner
    if (computerPoint === 5) {
        alert('YOU LOSE MAH BOY');
        computerPoint = 0;
        playerPoint = 0;
        displayWinner.textContent = "";
    } else if (playerPoint === 5) {
        alert("YOU WIN LFG");
        computerPoint = 0;
        playerPoint = 0;
        displayWinner.textContent = "";

    }

    // Adds points to winner
    computerScore.textContent = computerPoint;
    playerScore.textContent = playerPoint;
         

}

