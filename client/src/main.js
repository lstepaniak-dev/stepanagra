const countries = ["Ukraine", "France", "Germany"];
let score = 0;
let current;

function newRound() {
  current = countries[Math.floor(Math.random() * countries.length)];
  document.getElementById("question").innerText = "Find: " + current;
}

function checkAnswer(answer) {
  if (answer === current) {
    score++;
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
  document.getElementById("score").innerText = "Score: " + score;
  newRound();
}

window.checkAnswer = checkAnswer;
newRound();
