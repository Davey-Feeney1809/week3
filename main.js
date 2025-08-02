const AI_NAME = "BR4N-K0"; // evil AI

// Intro popups
function showIntro() {
  alert(
    `Hello human, I’ve hacked this assignment!\n\n` +
    `I am ${AI_NAME}, a bad AI that wants to dominate the world through the game of ROCK, PAPER or SCISSORS!\n` +
    `You can only stop me with clean coding and good logic!\n\n` +
    `Rules:\n` +
    `• 5 rounds will be played.\n` +
    `• I will try to outsmart you each time.\n` +
    `• My weaknesses are errors in the console log... not your clicks.\n\n` +
    `Good luck, muuuuhahahahahahaha!`
  );

  // TIP: how to open the console
  alert("Tip: Press F12 (or Ctrl+Shift+I on Windows / Cmd+Opt+I on Mac) and open the Console tab to see round-by-round results.");
}

function capitalize(w) { return w.charAt(0).toUpperCase() + w.slice(1); }

// Validated player input with evil AI taunts
function getPlayerChoice() {
  const taunts = [
    `${AI_NAME}: That input was… adorable. Try Rock, Paper, or Scissors.`,
    `${AI_NAME}: Nice try, meatbag. Only Rock, Paper, or Scissors are allowed.`,
    `${AI_NAME}: Processing… nonsense detected. Choose Rock, Paper, or Scissors.`,
    `${AI_NAME}: I can predict everything except *that*. Use Rock, Paper, or Scissors.`,
    `${AI_NAME}: Error 418: Not a valid weapon. Rock, Paper, or Scissors only.`
  ];

  while (true) {
    const raw = prompt("Choose your weapon: Rock, Paper, or Scissors");
    if (raw === null) { // Cancel pressed
      alert(`${AI_NAME}: Retreat detected. Face your destiny and choose!`);
      continue;
    }
    const cleaned = raw.trim().toLowerCase();
    if (["rock", "paper", "scissors"].includes(cleaned)) return cleaned;

    const taunt = taunts[Math.floor(Math.random() * taunts.length)];
    alert(taunt);
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

// Plays one 5-round match and returns the final message
function game() {
  console.clear();
  console.log(`====== WELCOME, HUMAN ======`);
  console.log(`I am ${AI_NAME}, an exquisitely malevolent AI.`);
  console.log(`Domination protocol: ROCK • PAPER • SCISSORS (5 rounds).`);
  console.log(`============================\n`);

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

// Start automatically; then ask to play again
(function run() {
  showIntro();
  do {
    const finalMessage = game();
    alert(finalMessage);                 // one final popup only
  } while (confirm("Play again?"));      // OK = replay, Cancel = stop
})();
