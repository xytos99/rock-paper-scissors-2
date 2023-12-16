function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}


function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if ( playerSelection === computerSelection) {
    tie += 1;
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors')
    || (playerSelection === 'scissors' && computerSelection === 'paper')
    || (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    win += 1;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    loss += 1;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}


let win = 0;
let loss = 0;
let tie = 0;

let body = document.querySelector('body');
let result = document.querySelector('#result');
const score = document.querySelector('#score');

body.addEventListener('click', (e) => {
  let target = e.target;
  
  switch(target.id) {
    case 'rock':
      result.textContent = playRound('rock', getComputerChoice());
      score.textContent = `Win: ${win} | Loss: ${loss} | Tie: ${tie}`;
      break;
    case 'paper':
      result.textContent = playRound('paper', getComputerChoice());
      score.textContent = `Win: ${win} | Loss: ${loss} | Tie: ${tie}`;
      break;
    case 'scissors':
      result.textContent = playRound('scissors', getComputerChoice());
      score.textContent = `Win: ${win} | Loss: ${loss} | Tie: ${tie}`;
      break;
  }
})

function game() {


}

game();