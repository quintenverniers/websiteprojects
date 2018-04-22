;(function($) {
	'use strict'
	//constants
	var max = 6;
	var min = 1;

	//general functions
	var clear = function(){
		$('#resultOne').text("");
		$('#resultTwo').text("");
	}

	//single dice
	var previousNumber = 0;

	var print = function(number){
		clear();
		$('#resultOne').text(number | 0+"");
	};

	var rndm = function(){
		var number = 1 + Math.floor(Math.random() * 6);
		var currentNumber = parseInt(number,10);
		if(currentNumber == previousNumber){
			rndm();
		} else{
			previousNumber = number;
			console.log(currentNumber);
			print(currentNumber);
		}
	}

	//double dice
	var printDouble = function(numberOne, numberTwo){
		clear();
		$('#resultOne').text(numberOne | 0+"");
		$('#resultTwo').text(numberTwo | 0+"");
	};

	var rndm2 = function(){
		var numberOne = 1 + Math.floor(Math.random() * 6);
		var currentNumberOne = parseInt(numberOne,10);
		var numberTwo = 1 + Math.floor(Math.random() * 6);
		var currentNumberTwo = parseInt(numberTwo,10);
		console.log(currentNumberOne);
		console.log(currentNumberTwo);

		printDouble(currentNumberOne,currentNumberTwo);
	}

	$(document).ready(function(){
		$('#roll').on("click",function(){
			console.log("single!");
			rndm();
		});

		$('#rollTwice').on("click",function(){
			console.log("double!");
			rndm2();
		});
	});


})(jQuery);