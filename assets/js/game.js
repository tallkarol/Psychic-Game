
// VARIABLES
// =========================================

// set-up computer choices
var compGuess = ["a","b","c","e","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// Start the game with 0 wins, 0 losses, 5 lives, 3 turns per life,
var winCounter = 0;
var lossCounter = 0;
var lifeCounter = 5;
var turnCounter = 3;


// FUNCTIONS
// ===========================================


// Function to render guess
function renderGuess() {

}

//
    if (userGuess === compGuess) {
        winCounter++;
        document.querySelector("#wins").innerHTML = winCounter;
    }

    else (userGuess !== compGuess) {
        turnCounter--;
        // if turnCounter < 1; lossCounter++; if lossCounter = 5; run function gameOver
    }
}

// MAIN PROCESS
// =========================================

// Calling functions to start the game

renderGuess();

// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {

    // Determine which key was pressed, make it lowercase and set it to userGuess
    var userGuess = event.key.toLowerCase
}
