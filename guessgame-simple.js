/* Guessing Game by Mr. M. */

/* Initialize Variables */
var totalTurns = 0; 
var Games = 0;
var Average = 0;
var playAgain = "y";

// alert("totalTurns="+totalTurns+)

/* Start Playing */

do {
	Games++;
	var Answer = Math.floor(Math.random() * (99) + 1);
	console.log(Answer);
	var turns = 0;
	do	{
		turns++
		Guess = prompt("Turn "+turns+": Enter a guess from 1 through 100.");
		if (Guess > Answer){
			alert("too high");
		}
		else if (Guess < Answer){
			alert("too low");
		}
	}
	while (Guess != Answer);
	alert("Congratulations! You guessed it in "+turns+" turns.");
	totalTurns=totalTurns+turns;
	average=totalTurns/Games; 
	alert("Your average is "+average);
	playAgain = prompt("Would you like to play again? y=Yes");
}
while (playAgain == "y");
/* End Playing */
alert("You played " + Games + " games");
