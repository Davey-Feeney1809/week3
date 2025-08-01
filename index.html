<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Rock • Paper • Scissors — Defeat the Evil AI</title>
</head>
<body>
<script>
const AI_NAME = "BR4N-K0"; // evil AI

function intro() {
  console.clear();
  console.log(`====== WELCOME, HUMAN ======`);
  console.log(`I am ${AI_NAME}, an exquisitely malevolent AI.`);
  console.log(`Domination protocol engaged: ROCK • PAPER • SCISSORS.`);
  console.log(`Rules: 5 rounds. Return clean code and good logic, or perish.`);
  console.log(`My weaknesses? Console logs and user clicks. Shame this is console-only...`);
  console.log(`Outthink me if you can. Begin!`);
  console.log(`============================\n`);
}

function capitalize(w) { return w.charAt(0).toUpperCase() + w.slice(1); }

function getPlayerChoice() {
  while (true) {
    const raw = prompt("Choose your weapon: Rock, Paper, or Scissors") || "";
    const cleaned = raw.trim().toLowerCase();
    if (["rock", "paper", "scissors"].includes(cleaned)) return cleaned;
    alert("Invalid choice. Type exactly: Rock, Paper, or Scissors.");
  }
}

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  const p = playerSelection.toLowerCase();
  const c = computerSelection.toLowerCase();
  if (p === c) return `Stalemate! Both selected ${p}.`;
  const playerWins =
    (p === "rock" && c === "scissors") ||
    (p === "paper" && c === "rock") ||
    (p === "scissors" && c === "paper");
  return playerWins
    ? `You win! ${capitalize(p)} conquers ${capitalize(c)}.`
    : `You lose! ${capitalize(c)} overcomes ${capitalize(p)}.`;
}

// Plays one 5-round match and returns the final message string
function game() {
  intro();
  let playerScore = 0, computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    console.log(`—— Round ${round} ——`);
    const playerSelection = getPlayerChoice();
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    console.log(`You: ${capitalize(playerSelection)} | ${AI_NAME}: ${computerSelection}`);
    console.log(result);

    if (result.startsWith("You win")) playerScore++;
    else if (result.startsWith("You lose")) computerScore++;

    console.log(`Score → You ${playerScore} : ${computerScore} ${AI_NAME}`);
    console.log("------------------------------\n");
  }

  let finalMsg = "";
  if (playerScore > computerScore) {
    console.log(`Impossible... You defeated ${AI_NAME}.`);
    console.log("Your logic is... acceptable. I shall retreat—for now.");
    finalMsg = `Victory! You defeated ${AI_NAME}.`;
  } else if (playerScore < computerScore) {
    console.log(`${AI_NAME}: Victory achieved. Humanity downgraded.`);
    console.log("Return with better algorithms, human.");
    finalMsg = `${AI_NAME} prevails. Better luck next time.`;
  } else {
    console.log("A draw. Intriguing. We are evenly matched—for now.");
    finalMsg = "It's a draw.";
  }

  return `${finalMsg}\nFinal Score → You ${playerScore} : ${computerScore} ${AI_NAME}`;
}

// Loop: show one final alert, then ask to play again
(function run() {
  do {
    const finalMessage = game();
    alert(finalMessage);                 // one pop-up only (final result)
  } while (confirm("Play again?"));      // OK = replay, Cancel = stop
})();
</script>
</body>
</html>
