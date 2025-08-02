const AI_NAME = "BR4N-K0"; 


function getLogEl() { return document.getElementById("logs"); }
function logToPage(msg) { getLogEl().textContent += msg + "\n"; }
function log(msg) { console.log(msg); logToPage(msg); }
function clearLogs() { getLogEl().textContent = ""; }
function capitalize(w) { return w.charAt(0).toUpperCase() + w.slice(1); }


function showIntro() {
  alert(
    `Hello human, I’ve hacked this assignment!\n\n` +
    `I am ${AI_NAME}, a bad AI that wants to dominate the world through the game of ROCK, PAPER or SCISSORS!\n` +
    `You can only stop me with clean coding and good logic!\n\n` +
    `Rules:\n` +
    `• 5 rounds will be played.\n` +
    `• I will try to outsmart you each time.\n\n` +
    `Tip: Press F12 (or Ctrl+Shift+I on Windows / Cmd+Opt+I on Mac), then open the Console tab to see round-by-round details.\n\n` +
    `Good luck, muuuuhahahahahahaha!`
  );
}


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


function game() {
  console.clear();
  clearLogs();

  log(`====== WELCOME, HUMAN ======`);
  log(`I am ${AI_NAME}, an exquisitely malevolent AI.`);
  log(`Domination protocol: ROCK • PAPER • SCISSORS (5 rounds).`);
  log(`============================\n`);

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

    
    alert(
      `Round ${round}\n` +
      `You: ${capitalize(playerSelection)} | ${AI_NAME}: ${computerSelection}\n` +
      `${result}\n\n` +
      `Current Score → You ${playerScore} : ${computerScore} ${AI_NAME}`
    );
  }

  
  let finalLines = "";
  if (playerScore > computerScore) {
    log(`Impossible... You defeated ${AI_NAME}.`);
    log("Your logic is... acceptable. I shall retreat—for now.");
    finalLines = `Impossible... You defeated ${AI_NAME}.\nYour logic is... acceptable. I shall retreat—for now.`;
  } else if (playerScore < computerScore) {
    log(`${AI_NAME}: Victory achieved. Humanity downgraded.`);
    log("Return with better algorithms, human.");
    finalLines = `${AI_NAME}: Victory achieved. Humanity downgraded.\nReturn with better algorithms, human.`;
  } else {
    log("A draw. Intriguing. We are evenly matched—for now.");
    finalLines = "A draw. Intriguing. We are evenly matched—for now.";
  }

  const scoreLine = `Final Score → You ${playerScore} : ${computerScore} ${AI_NAME}`;
  return {
    finalText: `${finalLines}\n${scoreLine}`,
    confirmText: `${finalLines}\n${scoreLine}\n\nPlay again?`
  };
}

// ---------- Start on user click (Opera/Brave friendly) ----------
function startGameFlow(button) {
  button.disabled = true;
  button.textContent = "Game in progress…";
  try {
    showIntro(); // intro + console tip
    do {
      const { finalText, confirmText } = game();
      alert(finalText);                 
      if (!confirm(confirmText)) break; 
    } while (true);
  } finally {
    button.disabled = false;
    button.textContent = "Play Again";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("startBtn");
  btn.addEventListener("click", () => startGameFlow(btn));
});
