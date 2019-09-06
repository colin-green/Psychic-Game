var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var hardMode = false;
var userKey2 = "";

// hardMode = confirm("Welcome! Would you like to play on hard mode (I could be thinking of a number, too)?");
// if (hardMode) {
//     alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// }

var targetChar = alphabet[Math.floor(Math.random()*alphabet.length)];
console.log("Answer: " + targetChar);

var winCountDiv = $("#winCount");
winCountDiv.text("Wins: " + winCount);

var lossCountDiv = $("#lossCount");
lossCountDiv.text("Losses: " + lossCount);

var guessesLeftDiv = $("#guessesLeft");
guessesLeftDiv.text("You have " + guessesLeft + " guesses remaining.");

var guessesSoFarDiv = $("#guessesSoFar");
guessesSoFarDiv.text("Here's what you've guessed so far: [" + guessesSoFar + "]");

// function addGuess(keyboardGuess) {
//     guessesSoFar.push(keyboardGuess);
// }

function resetGame() {
    guessesLeft = 10;
    guessesLeftDiv.text("You have " + guessesLeft + " guesses remaining.");
    guessesSoFar = [];
    guessesSoFarDiv.text("Here's what you've guessed so far: [" + guessesSoFar + "]");
    targetChar = alphabet[Math.floor(Math.random()*alphabet.length)];
}

function getKey(event) {
    var userKey1 = event.keyCode;
    var userKey2 = String.fromCharCode(userKey1).toUpperCase();
    guessesLeft -= 1;
    guessesLeftDiv.text("You have " + guessesLeft + " guesses remaining.");
    guessesSoFar.push(userKey2);
    guessesSoFarDiv.text("Here's what you've guessed so far: [" + guessesSoFar + "]");

    if (userKey2 == targetChar) {
        winCount += 1;
        winCountDiv.text("Wins: " + winCount);
        alert("You win!!! I -was- thinking of the letter '" + targetChar + "'! :D");
        resetGame();
    }

    if (guessesLeft == 1) {
        guessesLeftDiv.text("You have " + guessesLeft + " guess remaining. Make it count!");
    }

    if (guessesLeft == 0) {
        lossCount += 1;
        lossCountDiv.text("Losses: " + lossCount);
        alert("Aww, you lost! I was thinking of the letter '" + targetChar + "'. Feel free to try again!");
        resetGame();
    }
}
