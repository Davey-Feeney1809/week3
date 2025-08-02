const AI_NAME = "BR4N-K0"; // evil AI


function getLogEl() { return document.getElementById("logs"); }
function clearLogs() { getLogEl().textContent = ""; }
function logToPage(msg) { getLogEl().textContent += msg + "\n"; }
function log(msg) { console.log(msg); logToPage(msg); }
function cap(w) { return w.charAt(0).toUpperCase() + w.slice(1); }


function showIntro() {
  alert(
    `Hello human, I’ve hacked this assignment!\n\n` +
    `I am ${AI_NAME}, a bad AI that wants to dominate the world through ROCK, PAPER or SCISSORS!\n` +
    `You can only stop me with clean coding and good logic.\n\n` +
    `Tip: Press F12 (or Ctrl+Shift+I on Windows / Cmd+Opt+I on Mac) and open the Console tab to see round-by-round logs.\n\n` +
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
    if (raw === null) {               // user pressed Cancel
      alert(`${AI_NAME}: Retreat detected. Face your destiny and choose!`);
      continue;
    }
    const cleaned = raw.trim().toLowerCase();
    if (["rock", "paper", "scissors"].includes(cleaned)) return cleaned;

    // const map = { r: "rock", p: "paper", s: "scissors" };
    // if (map[cleaned]) return map[cleaned];

    alert(taunts[Math.floor(Math.random() * taunts.length)]);
  }
}

// ---------- Core helpers ----------
function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  const p = playerSelection.toLowerCase();
  const c = computerSelection.toLowerCase();
  if (p === c) return { result: "Draw", text: `Draw — both chose ${p}.` };

  const playerWins =
    (p === "rock" && c === "scissors") ||
    (p === "paper" && c === "rock") ||
    (p === "scissors" && c === "paper");

  return playerWins
    ? { result: "Win",  text: `You win — ${cap(p)} beats ${cap(c)}.` }
    : { result: "Lose", text: `You lose — ${cap(c)} beats ${cap(p)}.` };
}


function game() {
  console.clear();
  clearLogs();

  log(`====== WELCOME, HUMAN ======`);
  log(`I am ${AI_NAME}, an exquisitely malevolent AI.`);
  log(`Protocol: ROCK • PAPER • SCISSORS — 5 rounds.`);
  log(`============================\n`);

  let player = 0, ai = 0;

  for (let round = 1; round <= 5; round++) {
    log(`— Round ${round} of 5 —`);

    const playerSel = getPlayerChoice();
    const aiSel = computerPlay();
    const { result, text } = playRound(playerSel, aiSel);

    log(`You: ${cap(playerSel)} | ${AI_NAME}: ${aiSel}`);
    log(text);

    if (result === "Win") player++;
    else if (result === "Lose") ai++;

    log(`Score → You ${player} : ${ai} ${AI_NAME}`);
    log(`------------------------------\n`);

    
    alert(
      `Round ${round} of 5\n` +
      `AI chose: ${aiSel}\n` +
      `Result: ${result}\n` +
      `Score: You ${player} – ${ai} AI`
    );
  }

 
  let flavor = "";
  if (player > ai) {
    log(`Impossible... You defeated ${AI_NAME}.`);
    log("Your logic is... acceptable. I shall retreat—for now.");
    flavor = `Impossible... You defeated ${AI_NAME}.\nYour logic is... acceptable. I shall retreat—for now.`;
  } else if (player < ai) {
    log(`${AI_NAME}: Victory achieved. Humanity downgraded.`);
    log("Return with better algorithms, human.");
    flavor = `${AI_NAME}: Victory achieved. Humanity downgraded.\nReturn with better algorithms, human.`;
  } else {
    log("A draw. Intriguing. We are evenly matched—for now.");
    flavor = "A draw. Intriguing. We are evenly matched—for now.";
  }

  const scoreLine = `Final Score → You ${player} : ${ai} ${AI_NAME}`;
  return { finalText: `${flavor}\n${scoreLine}` };
}


function startGameFlow(button) {
  button.disabled = true;
  button.textContent = "Game in progress…";
  try {
    showIntro();
    do {
      const { finalText } = game();
      alert(finalText);                 
    } while (confirm("Play again?"));   
  } finally {
    button.disabled = false;
    button.textContent = "Play Again";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("startBtn");
  btn.addEventListener("click", () => startGameFlow(btn));
});
