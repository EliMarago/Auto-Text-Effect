const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const btn = document.querySelector(".btn");

const quotes = [
  "The only way to do great work is to love what you do",
  "Believe you can and you're halfway there",
  "Great things never come from comfort zones.",
  "The future belongs to those who believe in the beauty of their dreams",
  "Your limitation it's only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Dream it. Wish it. Do it.",
  "You are never too old to set another goal or to dream a new dream.",
  "Success doesn’t just find you. You have to go out and get it.",
];
let text = quotes[Math.floor(Math.random() * quotes.length)];
let idx = 1;
let speed = 300 / speedEl.value;

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }
  setTimeout(writeText, speed);
}
speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
btn.addEventListener("click", () => {
  window.location.reload();
});
writeText();
