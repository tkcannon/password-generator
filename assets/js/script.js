// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Class for password vars
var passwordInfo = {
  length: 8,
  characters: [],
}

// Class for symbol arrays
var symbols = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  special: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
}

// Generate password
function generatePassword() {
  var password = ""; //clears any existing password
  passwordInfo.characters.length = 0; //clears any previously selected charactertypes

  getUserInput();

  // Create password
  for (i = 0; i < passwordInfo.length - passwordInfo.characters.length; i++) {
    password += getCharacter();
  }

  // ensures that password has at least one character of each selected type
  for (i = 0; i < passwordInfo.characters.length; i++) {
    characterType = passwordInfo.characters[i];
    password += characterType[randomNumber(0, passwordInfo.characters.length)];
  }

  return password;
}

// push desired character types to playerInfo.characters array
function getUserInput() {
  var length = parseInt(window.prompt("How long would you like your new password to be? (Must be between 8 and 128 characters)"));

  if (8 <= length && length <= 128) {
    passwordInfo.length = length;
  }

  else {
    while (!(8 <= length && length >= 128)) {
      length = parseInt(window.prompt("Please enter a number between 8 and 128"));
      if (8 <= length && length <= 128) {
        passwordInfo.length = length;
      }
    }
  }
  useCharacterTypes();
}

function useCharacterTypes() {
  if (useInPassword("lower case letters")) {
    passwordInfo.characters.push(symbols.lower);
  }

  if (useInPassword("upper case letters")) {
    symbols.upper = symbols.lower.toUpperCase();
    passwordInfo.characters.push(symbols.upper);
  }

  if (useInPassword("numbers")) {
    passwordInfo.characters.push(symbols.numbers);
  }

  if (useInPassword("special symbols")) {
    passwordInfo.characters.push(symbols.special);
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
  }
  return bool;
}

// Random number generator
function randomNumber(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);
  return value;
};

// Pulls random character from random type of available characters and types
function getCharacter() {
  var characterType = passwordInfo.characters[randomNumber(0, passwordInfo.characters.length)];
  var character = characterType[randomNumber(0, characterType.length)];
  return character;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);