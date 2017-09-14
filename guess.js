
function readGuess(){
   message(this.value);
   document.getElementById("userInput").value= "";
}

function testmessage() {
		var saythis="Guessing Game!";
		message(saythis); // Call the function Message and pass it the value of the variable Saythis
		var delayMillis = 1000; //1 second
		setTimeout(function() {
			var saythis="Enter a guess (1-100)";
			message(saythis);
		}, delayMillis);

}

function start() {
    var playAgain = 'y';
    do {
        playGame();
        playAgain = prompt("Would you like to play again? (y or n)");
    }
    while(playAgain == 'y');
}

function message(saythis){
	var containdiv = document.getElementById("message");   // Get the <div> element with id="message"
	var para = document.createElement("p");
	var node = document.createTextNode(saythis);
	para.appendChild(node);
	containdiv.removeChild(containdiv.childNodes[0]);
	document.getElementById("message").appendChild(para);
}
