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
  if (p ===
