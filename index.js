var updateTimer = document.querySelector(".timer");
var words = document.querySelector(".word");
var initTimer = document.querySelector(".time");
var initScore = document.querySelector(".score");
var button = document.querySelector("button");
var score = 0;
var time = 20;
var index = 0;
var random;
var correct = new Audio("musics/correct.mp3");
var gameOver = new Audio("musics/gameOver.mp3");
gameOver.load();

// Play music when start button is clicked
document.querySelector("button").addEventListener("click", function (e) {
  var gameMusic = new Audio("musics/test2.mp3");
  index = 1;
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
      gameOver.play();
      setTimeout(function () {
        alert("Game over! Your score is " + score);
      }, 3000);
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
function selectRandomWord() {
  // words.innerHTML = "";
  random = Math.floor(Math.random() * 15);
  words.innerHTML = wordsList[random];
}

document.addEventListener(
  "keypress",
  (letter) => {
    if (index == words.innerHTML.length) {
      correct.play();
      score += 1;
      initScore.innerHTML = score;
      selectRandomWord();
      index = 1;
    } else if (letter.key == words.innerHTML[index - 1]) {
      index += 1;
    }
  },
  false
);
