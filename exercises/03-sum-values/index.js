window.calculateSumListener = function calculateSumListener() {
	//Return the value of the input #firstNumber
	var stringA = document.getElementById("firstNumber").value;
	//Return the value of the input #secondNumber
	var stringB = document.getElementById("secondNumber").value;

	//your code goes here
	var resultNumber = stringA + stringB;
	resultNumber.addEventListener("click", function() {
		document.getElementById("resultNumber").appendChild(resultNumber);
	});
};
