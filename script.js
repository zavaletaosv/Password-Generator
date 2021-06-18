// Assignment Code
var generateBtn = document.querySelector("#generate");
var pageLoad = alert('Hello! Click "Generate Password" to begin');
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '<', '>', '?'];
var passwordLength;
var newPassword = '';

function generatePassword() {
  passwordLength = prompt('How long would you like your password to be? Enter in a value between 8-128 characters.');
  uppercase = confirm('Would you like to include an uppercase character?');
  lowercase = confirm('Would you like to include a lowercase character?');
  number = confirm('Would you like to include a number?');
  special = confirm('Would you like to include a special character?');


  if ((passwordLength < 8) && (passwordLength > 128)) {
    alert('Password must be between 8-128 characters in length.');
    return passwordLength;
  }

  console.log(uppercase);
  console.log(lowercase);
  console.log(number);
  console.log(special);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
