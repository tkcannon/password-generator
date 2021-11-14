// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var passwordInfo = {
  length: 8,
  characters: [],
  currentComplexity: 0,
  password: ""
}

var symbols = {
  letters: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
}

/*Create generatePassword function
*
* if statements to handle password complexity
* create prompts to gather desired password complexity that are stored as true false var
* prompt for length min 8 max 128
* prompt for uppercase letters
* prompt for lowercase letters
* prompt for numbers
* prompt for special characters
* if no on all alert that nothing was selected and return to beginning
* 
* generatePassword must return created password string
*/

function generatePassword() {
  passwordInfo.length = definePasswordLength();
  //generate arrays for symbols
  symbols.lower = symbols.letters.split("");
  symbols.upper = symbols.letters.toUpperCase();
  symbols.upper = symbols.upper.split("");
  symbols.numbers = symbols.numbers.split("");
  // push desired character types to playerInfo.characters array
  if (useInPassword("lower case letters")) {
    passwordInfo.characters.push(symbols.lower);
  }

  if (useInPassword("upper case letters")) {
    passwordInfo.characters.push(symbols.upper);
  }

  if (useInPassword("numbers")) {
    passwordInfo.characters.push(symbols.numbers);
  }

  // create password
  for (i = 0; i < passwordInfo.length; i++) {
    passwordInfo.password += getCharacter();
  }

  return passwordInfo.password;
}

// Random number generator
function randomNumber(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

// Pulls random character from random type of available characters and types
function getCharacter () {
  var characterType = passwordInfo.characters[randomNumber(0,passwordInfo.characters.length - 1)];
  var character = characterType[randomNumber(0,characterType.length - 1)];
  return character;
}

// Array to define length of password
function definePasswordLength() {
  var length = parseInt(window.prompt("How long would you like your new password to be? (Must be between 8 and 128 characters)"));

  if (8 <= length && length <= 128) {
    return length;
  }

  else {
    while (!(8 <= length && length >= 128)) {
      length = parseInt(window.prompt("Please enter a number between 8 and 128"));
      if (8 <= length && length <= 128) {
        return length;
      }
    }
  }
}

// Ask user what symbols they would like to use
function useInPassword(query) {
  var bool = window.prompt("Would you like to use " + query + " in your password? y/n");
  switch (bool) {
    case "y":
      bool = true;

      break;
    case "n":
      bool = false;
      break;
    default:
      window.alert("Please enter y or n when making you selection");
      bool = useInPassword(query);
      break;
  }
  return bool;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);