// Declare variables
const buttons = document.querySelectorAll('input');

const computerRock = document.getElementById('rockMove-comp');
const computerPaper = document.getElementById('paperMove-comp');
const computerScissors = document.getElementById('scissorsMove-comp')

const playerRock = document.getElementById('rockMove');
const playerPaper = document.getElementById('paperMove');
const playerScissors = document.getElementById('scissorsMove')

const rock = "ROCK"
const paper = "PAPER"
const scissors = "SCISSORS"

let displayWinner = document.querySelector('#winner');
let playerPick;
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
            playerPick = e.target.value.toUpperCase();
        })

        if (playerPick === rock) {
            document.getElementById('rockMove').classList.add('moveShow');
            document.getElementById('paperMove').classList.remove('moveShow');
            document.getElementById('scissorsMove').classList.remove('moveShow');
        } else if (playerPick === paper) {
            document.getElementById('rockMove').classList.remove('moveShow');
            document.getElementById('paperMove').classList.add('moveShow');
            document.getElementById('scissorsMove').classList.remove('moveShow');
        } else if (playerPick === scissors) {
            document.getElementById('rockMove').classList.remove('moveShow');
            document.getElementById('paperMove').classList.remove('moveShow');
            document.getElementById('scissorsMove').classList.add('moveShow');
        }
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

    // dislays the hand move generated
    if (randomPick === rock) {
        computerRock.classList.add('moveShow');
        computerPaper.classList.remove('moveShow');
        computerScissors.classList.remove('moveShow');
    } else if (randomPick === paper) {
        computerRock.classList.remove('moveShow');
        computerPaper.classList.add('moveShow');
        computerScissors.classList.remove('moveShow');
    } else if (randomPick === scissors) {
        computerRock.classList.remove('moveShow');
        computerPaper.classList.remove('moveShow');
        computerScissors.classList.add('moveShow');
    }

    // returns the generated pick
    return randomPick;
}

// Takes player and computer selection and determines winner
function playRound(computerSelection, playerSelection) {
    // grabs the computer & player move for current move
    computerSelection = computerPlay();
    playerSelection = playerChoice();
    
    // current move gets displayed
    document.getElementById('playerMove').style.display = "block";
    document.getElementById('computerMove').style.display = "block";
    
    // displays moves in console 
    console.log(`computer: ` + computerSelection);
    console.log(`player: ` + playerSelection);    

    // Winning declarations when player choose ROCK:
    if(playerSelection === rock && computerSelection === rock) {
        displayWinner.textContent = "tie. you both chose rock.";
        displayWinner.style.color ="#eeeeee";
        document.getElementById('playerRock').style.stroke = "#eeeeee";
        document.getElementById('compRock').style.stroke = "#eeeeee";
    } else if (playerSelection === rock && computerSelection === paper) {
        displayWinner.textContent = "computer wins. paper beats rock.";
        displayWinner.style.color = "#ff9494";
        document.getElementById('playerRock').style.stroke = "#ff9494";
        document.getElementById('compPaper').style.stroke = "#4ecca3";
        computerPoint++;
        // computerScore.textContent += computerPoint;
    } else if (playerSelection === rock && computerSelection === scissors) {
        displayWinner.textContent = "you win! rock beats scissors.";
        displayWinner.style.color ="#4bca81";
        document.getElementById('playerRock').style.stroke = "#4ecca3";
        document.getElementById('compScissors').style.stroke = "#ff9494";
        playerPoint++;
        // playerScore.textContent += playerPoint;
    } 
    // Winning declarations when player choose PAPER
   else if (playerSelection === paper && computerSelection === paper) {
        displayWinner.textContent = "tie. you both chose paper.";
        displayWinner.style.color ="#eeeeee";
        document.getElementById('playerPaper').style.stroke = "#eeeeee";
        document.getElementById('compPaper').style.stroke = "#eeeeee";
    } else if (playerSelection === paper && computerSelection === rock) {
        displayWinner.textContent = "you win! paper beats rock.";
        displayWinner.style.color ="#4bca81";
        document.getElementById('playerPaper').style.stroke = "#4ecca3";
        document.getElementById('compRock').style.stroke = "#ff9494";
        playerPoint++;
        // playerScore.textContent +=  playerPoint;
    } else if (playerSelection === paper && computerSelection === scissors) {
        displayWinner.textContent = "computer wins. scissors beats paper.";
        displayWinner.style.color = "#ff9494";
        document.getElementById('playerPaper').style.stroke = "#ff9494";
        document.getElementById('compScissors').style.stroke = "#4ecca3";
        computerPoint++;
        // computerScore.textContent += computerPoint;
    }
    // Winning declarations when player choose SCISSORS
    else if (playerSelection === scissors && computerSelection === scissors) {
        displayWinner.textContent = "tie. you both chose scissors.";
        displayWinner.style.color ="#eeeeee";
        document.getElementById('playerScissors').style.stroke = "#eeeeee";
        document.getElementById('compScissors').style.stroke = "#eeeeee";
    } else if (playerSelection === scissors && computerSelection === paper) {
        displayWinner.textContent = "you win! scissors beats paper.";
        displayWinner.style.color ="#4bca81";
        document.getElementById('playerScissors').style.stroke = "#4ecca3";
        document.getElementById('compPaper').style.stroke = "#ff9494";
        playerPoint++;
        // playerScore.textContent += playerPoint;
    } else if (playerSelection === scissors && computerSelection === rock) {
        displayWinner.textContent = "computer wins. rock beats scissors.";
        displayWinner.style.color = "#ff9494";
        document.getElementById('playerScissors').style.stroke = "#ff9494";
        document.getElementById('compRock').style.stroke = "#4ecca3";
        computerPoint++;
        // computerScore.textContent += computerPoint;
    }
    
    // game plays for 5 rounds, then displays the winner & clears interface
    if (computerPoint === 5) {
        alert('Sorry you lose. better luck next time! 😕');
        computerPoint = 0;
        playerPoint = 0;
        displayWinner.textContent = "";
        document.getElementById('playerMove').style.display = "none";
        document.getElementById('computerMove').style.display = "none";
        console.clear();

    } else if (playerPoint === 5) {
        alert("You win! Good job!! 😀");
        computerPoint = 0;
        playerPoint = 0;
        displayWinner.textContent = "";
        document.getElementById('playerMove').style.display = "none";
        document.getElementById('computerMove').style.display = "none";
        console.clear();
    }

    // Adds points to winner
    computerScore.textContent = computerPoint;
    playerScore.textContent = playerPoint;
         
}

