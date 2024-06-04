let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const choices = ["rock", "scissors", "paper"];

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

const divResult = document.getElementById("result");
const para = document.createElement("p");
divResult.appendChild(para);

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  let roundResult;
  if (playerSelection === computerSelection) {
    roundResult = `It's a tie! Both chose ${playerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    humanScore++;
    roundResult = `You win this round! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    roundResult = `You lose this round! ${computerSelection} beats ${playerSelection}`;
  }
  roundsPlayed++;

  para.textContent = roundResult;
  const scoreText = `<br>Your Score: ${humanScore}<br>Computer Score: ${computerScore}`;
  para.innerHTML += scoreText;

  if (roundsPlayed === 5) {
    para.textContent += ` Game Over !`;
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (roundsPlayed < 5) {
      const playerSelection = button.id;
      playRound(playerSelection);
    }
  });
});
