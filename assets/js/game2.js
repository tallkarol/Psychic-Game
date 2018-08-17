/* This js is written with an emphasis on functions */


// VARIABLES
// =========================================

// set-up computer choices
var letters = ["a","b","c","e","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// Start the game with 0 wins, 0 losses, 5 lives, 3 turns per life,
var winCounter = 0;
var lossCounter = 0;
var guessCounter = 5;


// Functions

function increaseWinCounter() {
    winCounter++;
    document.getElementById("wins").innerHTML = winCounter;
}

// After running out of guesses, you lose
function increaseLossCounter() {
    lossCounter++;
    document.getElementById("losses").innerHTML = lossCounter;
}

// Decrease the amount of remaining guesses (accounting for a userGuess)
function decreaseGuessCounter() {
    guessCounter--;
    document.getElementById("guessesLeft").innerHTML = guessCounter;
}

// Reset the guessCounter to 5; clear p.guessesSoFar
function resetGuessCounter() {
    guessCounter = 5;
    document.getElementById("guessesLeft").innerHTML = guessCounter;
    document.getElementById("guessesSoFar").innerHTML = "";
}

// Initialize a new compGuess
function newCompGuess() {
    compGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log("New compGuess: " + compGuess);
}

// Start the Game

// Computer makes an initial random letter choice on page load

var compGuess = letters[Math.floor(Math.random() * letters.length)];

console.log("initial compGuess: " + compGuess)

// User makes an initial guess
document.onkeyup = function(event) {
    // Captures the key press, converts it to lowercase, and saves it to a variable
    var userGuess = event.key.toLowerCase();

    // The following line is a cheat-code built into the console to allow for full testing
    console.log(userGuess);
    
    // What happens ...

    // If userGuess is correct
    if (userGuess === compGuess) {
        alert("Congratulations, you have won!");
        increaseWinCounter();
        resetGuessCounter();
        newCompGuess();
    }

    // If userGuess is incorrect but you still have guesses left
    else if (userGuess !== compGuess && guessCounter > 1) {
        decreaseGuessCounter();
        alert("Not quite, keep guessing. You have " + guessCounter + " guesses remaining.");
        this.getElementById("guessesSoFar").append("  " + userGuess + "  ");
    }

    // If userGuess is incorrect and you have no more guesses left
    else if (userGuess !== compGuess && guessCounter == 1) {
        decreaseGuessCounter();
        alert("Oh no! It appears you are out of guesses and you have lost the game.");
        increaseLossCounter();
        resetGuessCounter();
        newCompGuess();
    }
}