    var temp = document.querySelector('.time');
    var words = document.querySelector(".word");
 	var timerDiv = document.querySelector(".time");
 	var scoreDiv = document.querySelector(".score");
    var button = document.querySelector("button");
 	var points = 0;
 	var seconds = 20;
    var spans;
    var typed;
    var gameMusic = new Audio("musics/test.mp3");

    // Main function which executes once start button is clicked
    button.addEventListener("click", function() {  
        countdown();
        selectRandomWord();
        gameMusic.play();
        button.disabled = true;	
    
    });
    

    function countdown() {
        points = 0;
        var timer = setInterval(function(){
        button.disabled = true;
        seconds--;
        temp.innerHTML = seconds;
           if (seconds === 0) {
               alert("Game over! Your score is " + points);
               scoreDiv.innerHTML = "0";
               words.innerHTML = "";
               button.disabled = false;
               clearInterval(timer);
               seconds = 20;
               timerDiv.innerHTML = "20";
               button.disabled = false;	
           }
        }, 1000);
     }

     const wordsList = ['mountain','ninth','ocean','office','parent','peanut','pencil','picnic','police','pretty','across','against','answer','between','board'];

     function selectRandomWord() {
        words.innerHTML = "";
        var random = Math.floor(Math.random() * (15));
        words.innerHTML = wordsList[random];
        typedWord = wordsList[random];
        // var wordArray = wordsList[random].split("");
        // for (var i = 0; i < wordArray.length; i++) { //building the words with spans around the letters
        //     var span = document.createElement("span");
        //     span.classList.add("span");
        //     span.innerHTML = wordArray[i];
        //     words.appendChild(span);
        // }
        // spans = document.querySelectorAll(".span");
    }

    function checkTyped(typedWord) {
        
    }

    function typing(e) {
        typed = String.fromCharCode(e.which);
        for (var i = 0; i < spans.length; i++) {
            if (spans[i].innerHTML === typed) { // if typed letter is the one from the word
                if (spans[i].classList.contains("bg")) { // if it already has class with the bacground color then check the next one
                    continue;
                } else if (spans[i].classList.contains("bg") === false && spans[i-1] === undefined || spans[i-1].classList.contains("bg") !== false ) { // if it dont have class, if it is not first letter or if the letter before it dont have class (this is done to avoid marking the letters who are not in order for being checked, for example if you have two "A"s so to avoid marking both of them if the first one is at the index 0 and second at index 5 for example)
                    spans[i].classList.add("bg");
                    break;
                }
            }
        }
        var checker = 0;
        for (var j = 0; j < spans.length; j++) { //checking if all the letters are typed
            if (spans[j].className === "span bg") {
                checker++;
            }
            if (checker === spans.length) { // if so, animate the words with animate.css class
                gameMusic.pause();
                gameMusic.currentTime = 0;
                gameMusic.play();
                words.classList.add("animated");
                words.classList.add("fadeOut");
                points++; // increment the points
                scoreDiv.innerHTML = points; //add points to the points div
                document.removeEventListener("keydown", typing, false);
                setTimeout(function(){
                    words.className = "words"; // restart the classes
                    selectRandomWord(); // give another word
                    document.addEventListener("keydown", typing, false);
                }, 400);
            }

        }
}

document.addEventListener("keydown", typing, false);

