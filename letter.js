//Dean's example

// function HangmanLetter(letter, guessed) {
// 	this.letter = letter
// 	this.guessedCorrectly = guessedCorrectly
// 	this.display = function() {
// 		if (this.guessedCorrectly) {
// 			return this.letter
// 		} else {
// 			return '_'
// 		}
// 	}
// }

// module.exports. HangmanLetter


var letter = function(let){
	this.charac = let;
	this.appear = false;
	this.letterRender = function(){
		return !(this.appear) ? "_" : this.charac;
	};
};

//export the constructor
module.exports = letter;


