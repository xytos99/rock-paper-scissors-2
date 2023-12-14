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

function game() {

  let playerChoice;

  playerChoice = prompt("What do you choose('rock', 'paper', 'scissors')");
  console.log(playRound(playerChoice, getComputerChoice()));
  console.log(`Win: ${win} Loss: ${loss} Tie: ${tie}`);

  let result;
  if (win === loss) {
    result = "It's a Tie!";
  } else if (win > loss) {
    result = "You Win!";
  } else {
    result = "You Lose!";
  }

  console.log(""); // Adds a blank line before the result
  console.log(result);
}

game();