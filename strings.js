console.log( "strings.js" );
var testString = "";
let submitBtn = document.getElementById("submit-button");
let inputField = document.getElementById("textInput");
let outputDiv = document.getElementById("output-div");

submitBtn.addEventListener("click", (event) => {
	event.preventDefault();
	testString = inputField.value;

	if (testString === "") {

		alert("Text field must not be blank.")

	}  else if (hasNumbers(testString)) {

		alert("Text field must not contain numbers.")

	}  else {
	// console.log( "testString", testString );
	let textReverse = reversal(testString);
	let textAlphabetical = alphabits(testString);
	let textPalindrome = palindrome(testString);
	outputDiv.innerHTML = `<p>Original Input: "${testString}"
						   <p>Characters Reversed: "${textReverse}"
						   <p>Characters Alphabetical: "${textAlphabetical}"
						   <p>Text Is A Palindrome: ${textPalindrome}`
	}
});


function addReturnButton(element) {
	element.addEventListener("keypress", (event) => {
		if (event.keycode === 13) {
			console.log( "return was pressed" );
			submitBtn.click();
		}
	});
}

addReturnButton(inputField);

function hasNumbers(inputString) {
	let regex = /\d/g;
	return regex.test(inputString);
}


function reversal(string) {
	let revCharacters = string.split("").reverse().join("");
	// console.log( "revCharacters", revCharacters );
	return revCharacters;
}

function alphabits(string) {
	let alphaCharacters = string.split("").sort().join("");
	// console.log( "alphaCharacters", alphaCharacters );
	return alphaCharacters;

}

function palindrome(string) {

	let stringReverse = string.split("").reverse().join("");

	if (stringReverse === string) {
		return true;
	}  else {
		return false;
	};
}


