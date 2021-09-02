function computerPlay() {
    let play = ['rock', 'paper', 'scissors'];
    return play[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection = computerPlay()) {
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'rock') return 'Draw';
            else if (computerSelection === 'scissors') return 'You Win! Rock beats Scissors';
            else if (computerSelection === 'paper') return 'You Lose! Paper beats Rock';
            break;
        case 'paper':
            if (computerSelection === 'rock') return 'You Win! Paper beats Rock';
            else if (computerSelection === 'scissors') return 'You Lose! Scissors beats Paper';
            else if (computerSelection === 'paper') return 'Draw';
            break;
        case 'scissors':
            if (computerSelection === 'rock') return 'You Lose! Rock beats Scissors';
            else if (computerSelection === 'scissors') return 'Draw';
            else if (computerSelection === 'paper') return 'You Win! Scissors beats Paper';
            break;
        default:
            return 'Invalid player selection.  Try again.'
    }
}

function fiveGames() {
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt('Rock, Paper, or Scissors?');
        console.log(`Game ${i}: ${playRound(playerSelection)}`);
    }
}