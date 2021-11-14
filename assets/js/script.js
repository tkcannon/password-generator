// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

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
  var passwordLength = definePasswordLength();
  console.log(passwordLength);
}

/*  ??? Randomize function to rearrange lettering order
*   if I go this route generate password will call this function
*   this function will then return a string to generatePassword that will then return to writePassword
*/


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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);