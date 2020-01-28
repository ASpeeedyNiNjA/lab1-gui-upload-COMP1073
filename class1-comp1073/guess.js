// console.log('working');
var price;
var guessButton = document.querySelector('#guess');
var resetButton = document.querySelector("#reset");

guessButton.addEventListener("click", decideIfWon);
// resetButton.addEventListener('click', resetGame);


function resetGame () {
	var guessField = document.querySelector("#guessField");
	var lowOrHi = document.querySelector('#lowOrHi');
	
	randomize();
	guessField.value = '';
	lowOrHi.textContent = "";
}



// function decideIfWon() {
// 	console.log("inside ...?")
// }

function randomize () {
	price = Math.floor(Math.random() * 100) + 1;
	console.log(price);
}

function decideIfWon () {
	var guessField = document.querySelector("#guessField");
	// console.log(guessField.value);
	var lowOrHi = document.querySelector('#lowOrHi');

	if (guessField.value > price) {
		// console.log("too high");
		lowOrHi.textContent = 'too high';
	} else if (guessField.value < price) {
		// console.log("too low");
		lowOrHi.textContent = 'too low';
	} else {
		// console.log("winner");
		lowOrHi.textContent = 'winner';
		document.body.style.backgroundColor = 'yellow';
	}
}


randomize();