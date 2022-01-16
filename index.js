var updateTimer = document.querySelector(".timer");
var words = document.querySelector(".word");
var initTimer = document.querySelector(".time");
var initScore = document.querySelector(".score");
var button = document.querySelector("button");
var score = 0;
var time = 20;
var typed;

// Play music when start button is clicked
document.querySelector("button").addEventListener("click", function (e) {
  var gameMusic = new Audio("musics/test2.mp3");
  countdown();
  gameMusic.play();
  selectRandomWord(e);
  button.disabled = true;
});

// Function to start the game timer 20seconds
function countdown() {
  score = 0;
  var timer = setInterval(function () {
    button.disabled = true;
    time--;
    updateTimer.innerHTML = time;
    if (time === 0) {
      alert("Game over! Your score is " + score);
      initScore.innerHTML = "0";
      words.innerHTML = "";
      button.disabled = false;
      clearInterval(timer);
      time = 20;
      initTimer.innerHTML = "20";
      button.disabled = false;
    }
  }, 1000);
}

//List of words
const wordsList = [
  "mountain",
  "ninth",
  "ocean",
  "office",
  "parent",
  "peanut",
  "pencil",
  "picnic",
  "police",
  "pretty",
  "across",
  "against",
  "answer",
  "between",
  "board",
];

// Function to select random word from the list
function selectRandomWord(e) {
  // words.innerHTML = "";
  var random = Math.floor(Math.random() * 15);
  words.innerHTML = wordsList[random];
}

// function checkTypedWord(currWord) {
//     var x = document.getElementByClass("input").value;
//     typed.push(x);
// }
