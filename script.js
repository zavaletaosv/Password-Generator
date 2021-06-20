// Variables: Arrays Used to Create a Unique Password

var generateBtn = document.querySelector("#generate");
var pageLoad = alert('Hello! Click "Generate Password" to begin');
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '<', '>', '?'];
var characters = [];
var newPassword = '';

// Password Confirmation for Different Characters

function generatePassword() {
  var passwordLength = prompt('How long would you like your password to be? Enter in a value between 8-128 characters.');
  var upper = confirm('Would you like to include an uppercase character?');
  var lower = confirm('Would you like to include a lowercase character?');
  var numb = confirm('Would you like to include a number?');
  var spec = confirm('Would you like to include a special character?');

// Condition: Used to Set Password Length Interval

  if ((passwordLength < 8) && (passwordLength > 128)) {
    alert('Password must be between 8-128 characters.')
    return generatePassword();
  };

// Concat: Used to Merge Two or More Arrays 

if (uppercase) {
    characters = characters.concat(uppercase);
  };

  if (lowercase) {
    characters = characters.concat(lowercase);
  };

  if (number) {
    characters = characters.concat(number);
  };

  if (special) {
    characters = characters.concat(special);
  };

// Used to Create Password by Taking Concat Items and Multiplying by the User's Desired PW Length

  for (var i = 0; i < passwordLength; i++) {
    newPassword += characters[Math.floor(Math.random() * characters.length)];
    console.log(newPassword);
  }

  return newPassword;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);