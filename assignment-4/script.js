function computerPlay() {
    const computerOption = ['Rock', 'Paper', 'Scissors'];
    const option = Math.floor(Math.random() * (3 - 0) + 0);
    return computerOption[option];
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === computer) return `It's a draw! ${player} can't do anything with ${computer}`;
    if (player === 'rock' && computer === 'paper') return 'You lose! Paper beats Rock';
    if (player === 'rock' && computer === 'scissors') return 'You win! Rock beats Scissors';
    if (player === 'paper' && computer === 'rock') return 'You win! Paper beats Rock';
    if (player === 'paper' && computer === 'scissors') return 'You lose! Scissors beats Paper';
    if (player === 'scissors' && computer === 'rock') return 'You lose! Rock beats Scissors';
    if (player === 'scissors' && computer === 'paper') return 'You win! Scissors beats Paper';
}

let playerPoints = 0;
let computerPoints = 0;

for (let i = 0; i < 5; i++) {
    function game() {
        const play = prompt('Choose Rock, Paper or Scissors');
        const computer = computerPlay();
        return playRound(play, computer);
    }

    const result = game();
    console.log(result);
    if(result.slice(0, 7) === 'You win') { playerPoints = playerPoints + 1}
    if(result.slice(0, 8) === 'You lose') { computerPoints = computerPoints + 1 }
}

if(playerPoints === computerPoints) { 
    console.log(`It's a draw! The final points are You with ${playerPoints} points and Computer with ${computerPoints} points`);
}

if(playerPoints > computerPoints) { 
    console.log(`You are the winner! The final points are You with ${playerPoints} points and Computer with ${computerPoints} points`);
}

if(playerPoints < computerPoints) {
    console.log(`You are a loser! The final points are You with ${playerPoints} points and Computer with ${computerPoints} points`);
}
