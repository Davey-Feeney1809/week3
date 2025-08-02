const AI_NAME = "BR4N-K0"; // evil AI

// ---------- Logging helpers ----------
function getLogEl() {
  let el = document.getElementById("logs");
  if (!el) {
    el = document.createElement("pre");
    el.id = "logs";
    document.body.appendChild(el);
  }
  return el;
}
function logToPage(msg) { getLogEl().textContent += msg + "\n"; }
function log(msg) { console.log(msg); logToPage(msg); }

// ---------- Intro ----------
function showIntro() {
  alert(
    `Hello human, I’ve hacked this assignment!\n\n` +
    `I am ${AI_NAME}, a bad AI that wants to dominate the world through the game of ROCK, PAPER or SCISSORS!\n` +
    `You can only stop me with clean coding and good logic!\n\n` +
    `Rules:\n` +
    `• 5 rounds will be played.\n` +
    `• I will try to outsmart you each time.\n` +
    `• My weaknesses are errors in the console log... not your clicks.\n\n` +
    `Tip: Press F12 (or Ctrl+Shift+I on Windows / Cmd+Opt+I on Mac) and open the Console tab to see round-by-round results.\n\n` +
    `Good luck, muuuuhahahahahahaha!`
  );
}
function ensureConsoleOpen() {
  alert("Open the Console now (F12 → Console tab), then click OK to begin Round 1.");
}

function capitalize(w) { return w.charAt(0).toUpperCase() + w.slice(1); }

// ---------- Input (with taunts on invalid) ----------
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
    if (raw === null) { alert(`${AI_NAME}: Retreat detected. Face your destiny and choose!`); continue; }
    const cleaned = raw.trim().toLowerCase();
    if (["rock", "paper", "scissors"].includes(cleaned)) return cleaned;
    alert(taunts[Math.floor(Math.random() * taunts.length)]);
  }
}

// ---------- Game logic ----------
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
  getLogEl().textContent = "";

  log(`====== WELCOME, HUMAN ======`);
  log(`I am ${AI_NAME}, an exquisitely malevolent AI.`);
  log(`Domination protocol: ROCK • PAPER • SCISSORS (5 rounds).`);
  log(`============================\n`);

  ensureConsoleOpen();

  let playerScore = 0, computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    log(`—— Round ${round} ——`);
    const playerSelection = getPlayerChoice();
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    log(`You: ${capitalize(playerSelection)} | ${AI_NAME}: ${computerSelection}`);
    log(result);

    if (result.startsWith("You win")) playerScore++;
    else if (result.startsWith("You lose")) computerScore++;

    log(`Score → You ${playerScore} : ${computerScore} ${AI_NAME}`);
    log("------------------------------\n");

    // NEW: per-round popup with running score
    alert(
      `Round ${round}\n` +
      `You: ${capitalize(playerSelection)} | ${AI_NAME}: ${computerSelection}\n` +
      `${result}\n\n` +
      `Current Score → You ${playerScore} : ${computerScore} ${AI_NAME}`
    );
  }

  let finalMsg = "";
  if (playerScore > computerScore) {
    log(`Impossible... You defeated ${AI_NAME}.`);
    log("Your logic is... acceptable. I shall retreat—for now.");
    finalMsg = `Victory! You defeated ${AI_NAME}.`;
  } else if (playerScore < computerScore) {
    log(`${AI_NAME}: Victory achieved. Humanity downgraded.`);
    log("Return with better algorithms, human.");
    finalMsg = `${AI_NAME} prevails. Better luck next time.`;
  } else {
    log("A draw. Intriguing. We are evenly matched—for now.");
    finalMsg = "It's a draw.";
  }
  return `${finalMsg}\nFinal Score → You ${playerScore} : ${computerScore} ${AI_NAME}`;
}

// ---------- Start after load ----------
window.addEventListener("load", () => {
  showIntro();
  setTimeout(() => {
    do {
      const finalMessage = game();
      alert(finalMessage);             // final popup
    } while (confirm("Play again?"));  // OK = replay, Cancel = stop
  }, 50);
});
