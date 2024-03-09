  
const playerSelectionUpper = prompt("Enter your value");
const playerSelection = playerSelectionUpper.toLowerCase();

  const getComputerChoice = () => {
    const option1 = 'rock';
    const option2 = 'paper';
    const option3 = 'scissors';

    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return option1;
    } else if (randomNumber === 2) {
        return option2;
    } else {
        return option3;
    }

  };
  const computerSelection = getComputerChoice();

  function playGame(playerSelection, computerSelection) {

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return "Draw!";
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            return "You lost! Paper beats rock.";
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            return "You win! Rock beats scissors.";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            return "You win! Paper beats rock.";
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            return "You lost! Scissors beats paper.";
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            return "You lost! Rock beats scissors.";
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            return "You win! Scissors beats paper.";
        } else {
            return "Invalid selection. Please choose rock, paper, or scissors.";
        }
    }
    return playRound(playerSelection, computerSelection);
  }
  console.log(playGame(playerSelection, computerSelection));