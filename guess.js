/* NOTE: This code all needs commenting! - MBM */
function getRandomInt(min, max) {
  // see https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    return Math.random() * (max - min) + min;
}

function playGame(player) {
    var Turns = 0;
    var Answered = 0;
    var Answer = getRandomInt(1,101);
    do {
        var Guess = prompt("Guess the integer between 0 and 100!");
        Turns++;
        if (isNaN(Guess) !== true) {
            if (Guess == Answer) {
                alert("CORRECT! You guessed it in "+Turns+" turns.");
                Correct = 1;
            }
            else if (Guess > Answer) {
                alert("Hint: Try a lower number!");
            }
            else {
                alert("Hint: Try a higher number!");
            }
        }
        else {
            alert("Quitter!");
            player.losses ++;
        }
    }
    while (Answered == 0);
}

function start() {
    var playAgain = 'y';
    do {
        playGame();
        playAgain = prompt("Would you like to play again? (y or n)");
    }
    while(playAgain == 'y');
}

alert("Steel your mind for this, the ultimate game of skill!");
start();
