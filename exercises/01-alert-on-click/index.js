window.myClickFunction = function myClickFunction() {
	alert("Your first function!");
};
let button = document.querySelector("#button2");
button.addEventListener("click", function() {
	alert("your Secound function");
});
