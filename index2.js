    var temp = document.querySelector('.timer');
 	var words = document.querySelector(".word");
 	var timerDiv = document.querySelector(".time");
 	var scoreDiv = document.querySelector(".score");
    var button = document.querySelector("button");
 	var points = 0;
 	var seconds = 20;

    // Play music when start button is clicked
    document.querySelector("button").addEventListener("click", function() {
        var gameMusic = new Audio("musics/test.mp3");
        countdown();
        selectRandomWord()
        gameMusic.play();
    
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
    }
