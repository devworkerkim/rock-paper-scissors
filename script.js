const playerRock = document.querySelector('#rock');
const playerPaper = document.querySelector('#paper');
const playerScissors = document.querySelector('#scissors');
const result = document.querySelector('#result');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
var player = 0;
var computer = 0;

function computerPlay() {
    let play = ['rock', 'paper', 'scissors'];
    return play[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection = computerPlay()) {
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'rock') result.innerText = 'Draw';
            else if (computerSelection === 'scissors') {
                result.innerText = 'Player Point! Rock beats Scissors';
                updateScore(true);
            } else if (computerSelection === 'paper') {
                result.innerText = 'Computer Point! Paper beats Rock';
                updateScore(false);
            }
            break;
        case 'paper':
            if (computerSelection === 'rock') {
                result.innerText = 'Player Point! Paper beats Rock';
                updateScore(true);
            } else if (computerSelection === 'scissors') {
                result.innerText = 'Computer Point! Scissors beats Paper';
                updateScore(false);
            } else if (computerSelection === 'paper') result.innerText = 'Draw';
            break;
        case 'scissors':
            if (computerSelection === 'rock') {
                result.innerText = 'Computer Point! Rock beats Scissors';
                updateScore(false);
            } else if (computerSelection === 'scissors') result.innerText = 'Draw';
            else if (computerSelection === 'paper') {
                result.innerText = 'Player Point! Scissors beats Paper';
                updateScore(true);
            }
            break;
        default:
            return 'Invalid player selection.  Try again.'
    }
}

function updateScore(win) {
    if (player === 5 || computer === 5) player = 0, computer = 0;
    if (win) player++;
    else if (!win) computer++;
    playerScore.innerText = player;
    computerScore.innerText = computer;
    if (player === 5) playerScore.innerText += ' Winner!';
    if (computer === 5) computerScore.innerText += ' Winner!';
}

playerRock.addEventListener('click', () => playRound('rock'));
playerPaper.addEventListener('click', () => playRound('paper'));
playerScissors.addEventListener('click', () => playRound('scissors'));