function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}


function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if ( playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors')
    || (playerSelection === 'scissors' && computerSelection === 'paper')
    || (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}
