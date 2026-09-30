// Rock Paper Scissors - played in the browser console

// Step 2: randomly return "rock", "paper" or "scissors"
function getComputerChoice() {
  const random = Math.random(); // 0 <= random < 1

  if (random < 1 / 3) {
    return "rock";
  } else if (random < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Step 3: get the human's choice via prompt
function getHumanChoice() {
  const choice = prompt("Enter your choice: rock, paper, or scissors");
  return choice;
}

// Step 6: play the entire game (5 rounds)
function playGame() {
  // Step 4: score variables (moved inside playGame)
  let humanScore = 0;
  let computerScore = 0;

  // Step 5: play a single round
  function playRound(humanChoice, computerChoice) {
    // make human choice case-insensitive
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log(`It's a tie! You both chose ${humanChoice}.`);
      return;
    }

    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(
        `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`
      );
    } else {
      computerScore++;
      console.log(
        `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`
      );
    }
  }

  // helper: "rock" -> "Rock"
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  // play 5 rounds (new choices are fetched every round)
  for (let round = 1; round <= 5; round++) {
    console.log(`--- Round ${round} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);
  }

  // declare the final winner
  console.log("===== Game Over =====");
  if (humanScore > computerScore) {
    console.log(`You won the game! ${humanScore} - ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`You lost the game! ${humanScore} - ${computerScore}`);
  } else {
    console.log(`The game is a tie! ${humanScore} - ${computerScore}`);
  }
}

playGame();