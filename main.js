// console.log("test");

// var inquirer = require('inquirer');
// inquirer.prompt([/* Pass your questions in here */]).then(function (answers) {
//     // Use user feedback for... whatever!!
// });



// var prompt = require('prompt');


var Word = require('./word.js');
var prompt = require('prompt');

console.log("Super Bike Hangman!");
console.log("Guess a letter of the name of a motorcycle");
console.log("-----------------------------");
prompt.start();



game = {
 	wordBank: ['aprilia', 'ktm', 'triumph', 'harley-davidson', 'kawasaki', 'ducati'],
 	wordsWon: 0,
 	guessesRemaining: 10,
 	currentWrd: null,
 	
 	startGame: function (wrd) {
 		this.resetGuesses();
 		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
 		this.currentWrd.getLet();
 		this.promptUser();
 	},

 	resetGuesses: function(){
 		this.guessesRemaining = 10;
 	},

 	promptUser: function(){
 		var self = this;
 		prompt.get(['guessLet'], function(err, result){
 			console.log("You guessed: " + result.guessLet);
 			var manyGuessed = self.currentWrd.checkLetter(result.guessLet);

 			if(manyGuessed ==0) {
 				console.log("Sorry Try Again");
 				self.guessesRemaining--;
 				
 			} else {
 				console.log("Correct");
 					if(self.currentWrd.findWord()){
 						console.log("You won!");
 						console.log("-------------------");
 						return;
 					}
 			}

 			console.log("Guesses remaining: " + self.guessesRemaining);
 			console.log("-------------------");
 			if((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
 				self.promptUser();
 			}
 			else if(self.guessesRemaining ==0){
 				console.log("Game over. Correct Word ", self.currentWrd.target);
 			} else {
 				console.log(self.currentWrd.wordRender());
 			}
 		});

 	}


};

game.startGame();
