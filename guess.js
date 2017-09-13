

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function playGame(player) {
    var Turns = 0;
    var Correct = 0;
	var State = 0;
    var Answer = getRandomInt(1,10);
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
            alert("Wrong!");
            player.losses ++;
        }
    }
    while (Correct == 0);
	while (State == 0);
}

function testmessage() {
		var saythis="something to say";
		message(saythis); // Call the function Message and pass it the value of the variable Saythis
		x=0;
		while (x<1000){
			message("*");
			x++;
			}
		var saythis="something else to say";
		message(saythis);
}

function start() {
    var playAgain = 'y';
    do {
        playGame();
        playAgain = prompt("Would you like to play again? (y or n)");
    }
    while(playAgain == 'y');
}

function message (saythis){
	var containdiv = document.getElementById("message");   // Get the <div> element with id="message"  
	var para = document.createElement("p");
	var node = document.createTextNode(saythis);
	para.appendChild(node);
	containdiv.removeChild(containdiv.childNodes[0]);
	document.getElementById("message").appendChild(para);
}
alert("This is a guessing game, which you will prevail at!");
testmessage();