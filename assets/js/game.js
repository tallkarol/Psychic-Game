
// VARIABLES
// =========================================

// set-up computer choices
var letters = ["a","b","c","e","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// Start the game with 0 wins, 0 losses, 5 lives, 3 turns per life,
var winCounter = 0;
var lossCounter = 0;
var guessCounter = 5;


// Start the Game

// Computer makes an initial random letter choice on page load

var compGuess = letters[Math.floor(Math.random() * letters.length)];

console.log("initial compGuess: " + compGuess)

// User makes an initial guess
document.onkeyup = function(event) {
    // Captures the key press, converts it to lowercase, and saves it to a variable
    var userGuess = event.key.toLowerCase();

    console.log(userGuess);
    if (userGuess === compGuess) {
        alert("Congratulations, you have won!");
        // Increase the win counter
        winCounter++;
        this.getElementById("wins").innerHTML = winCounter;
        // Generate new compGuess;
        guessCounter = 5;
        this.getElementById("guessesLeft").innerHTML = guessCounter;
        this.getElementById("guessesSoFar").innerHTML = "";
        compGuess = letters[Math.floor(Math.random() * letters.length)];
        console.log("New compGuess: " + compGuess);
    }

    else if (userGuess !== compGuess && guessCounter > 1) {
        guessCounter--;
        alert("Not quite, keep guessing. You have " + guessCounter + " guesses remaining.");
        this.getElementById("guessesLeft").innerHTML = guessCounter;
        this.getElementById("guessesSoFar").append("  " + userGuess + "  ");
    }

    else if (userGuess !== compGuess && guessCounter == 1) {
        guessCounter--;
        this.getElementById("guessesLeft").innerHTML = guessCounter;
        alert("Oh no! It appears you are out of guesses and you have lost the game.");
        lossCounter++;
        this.getElementById("losses").innerHTML = lossCounter;
        guessCounter = 5;
        this.getElementById("guessesLeft").innerHTML = guessCounter;
        this.getElementById("guessesSoFar").innerHTML = "";
        compGuess = letters[Math.floor(Math.random() * letters.length)];
        console.log("New compGuess: " + compGuess);
    }
}