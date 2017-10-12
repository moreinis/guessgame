/* Initialize Variables */
var turn=0;
var answer=0;
var guess=0;
var playAgain="n";
var games=0;
var totalTurns=0;
var average=0;

/* New Game */
do { // while playAgain = y;
	var answer = Math.floor(Math.random() * (100) + 1);
	/* for debugging */
	console.log(answer);
	var turn = 1;
	do	{ // while guess != answer
		guess = prompt("Please enter a guess from number 1 through 100. You're on turn " + turn+". ");
		if (!isNaN(guess)) {
			if (guess > answer){
				alert("Too high");
			}
			else if (guess < answer){
				alert("Too low");
			}
			turn++;
		}
		else if (isNaN(guess)) {
			alert("Out of range. Try again.");
		}
	}
	while (guess != answer);
	/* Ending Sequence */
	alert("You Win! You took "+turn+" turns.");
	games++;
	totalTurns=totalTurns+turn;
	average=totalTurns/games;
	alert("Your average is "+average+" turns per game.");
	playAgain=prompt("Play again? y or n");
}
while (playAgain=="y");
alert("Thank you for playing.");
