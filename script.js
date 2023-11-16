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
