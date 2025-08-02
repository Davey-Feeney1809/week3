const AI_NAME = "BR4N-K0";
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

function showIntro() {
  alert(
`Hello human, I’ve hacked this assignment!

I am ${AI_NAME}, a bad AI that wants to dominate the world through ROCK, PAPER or SCISSORS!
You can only stop me with clean coding and good logic.

Tip: Press F12 (or Ctrl+Shift+I on Windows / Cmd+Opt+I on Mac), then open the Console tab to see details each round.

Good luck, muuuuhahahahahahaha!`
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
  const map = { r: "rock", p: "paper", s: "scissors" };
  while (true) {
    const raw = prompt("Choose your weapon: Rock, Paper, or Scissors");
    if (raw === null) { alert(`${AI_NAME}: Retreat detected. Face your destiny and choose!`); continue; }
    const letters = raw.toLowerCase().replace(/[^a-z]/g, "");
    const normalized = map[letters] || letters;
    if (["rock", "paper", "scissors"].includes(normalized)) return normalized;
    alert(taunts[Math.floor(Math.random() * taunts.length)]);
  }
}

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSel, aiSel) {
  const p = playerSel.toLowerCase(), c = aiSel.toLowerCase();
  if (p === c) return { result: "Draw", text: `Draw — both chose ${p}.` };
  const win = (p === "rock" && c === "scissors") || (p === "paper" && c === "rock") || (p === "scissors" && c === "paper");
  return win
    ? { result: "Win",  text: `You win — ${cap(p)} beats ${cap(c)}.` }
    : { result: "Lose", text: `You lose — ${cap(c)} beats ${cap(p)}.` };
}

function game() {
  console.clear();
  console.log("====== WELCOME, HUMAN ======");
  console.log(`I am ${AI_NAME}, an exquisitely malevolent AI.`);
  console.log("Protocol: ROCK • PAPER • SCISSORS — 5 rounds.");
  console.log("============================\n");
  let you = 0, ai = 0;
  for (let round = 1; round <= 5; round++) {
    console.log(`— Round ${round} of 5 —`);
    const playerSel = getPlayerChoice();
    const aiSel = computerPlay();
    const { result, text } = playRound(playerSel, aiSel);
    console.log(`You: ${cap(playerSel)} | ${AI_NAME}: ${aiSel}`);
    console.log(text);
    if (result === "Win") you++;
    else if (result === "Lose") ai++;
    console.log(`Score → You ${you} : ${ai} ${AI_NAME}`);
    console.log("------------------------------\n");
    alert(
      `Round ${round} of 5\n` +
      `AI chose: ${aiSel}\n` +
      `Result: ${result}\n` +
      `Score: You ${you} – ${ai} AI`
    );
  }
  let flavor;
  if (you > ai) {
    console.log(`Impossible... You defeated ${AI_NAME}.`);
    console.log("Your logic is... acceptable. I shall retreat—for now.");
    flavor = `Impossible... You defeated ${AI_NAME}.\nYour logic is... acceptable. I shall retreat—for now.`;
  } else if (you < ai) {
    console.log(`${AI_NAME}: Victory achieved. Humanity downgraded.`);
    console.log("Return with better algorithms, human.");
    flavor = `${AI_NAME}: Victory achieved. Humanity downgraded.\nReturn with better algorithms, human.`;
  } else {
    console.log("A draw. Intriguing. We are evenly matched—for now.");
    flavor = "A draw. Intriguing. We are evenly matched—for now.";
  }
  return `${flavor}\nFinal Score → You ${you} : ${ai} ${AI_NAME}`;
}

function run() {
  showIntro();
  do {
    const finalText = game();
    alert(finalText);
  } while (confirm("Play again?"));
}

window.addEventListener("load", () => setTimeout(run, 60));
window.start = run;
