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
* prompt for uppercase letters
* prompt for lowercase letters
* prompt for numbers
* prompt for special characters
* if no on all alert that nothing was selected and return to beginning
* 
* generatePassword must return created password string
*/

function generatePassword () {

}

/*  ??? Randomize function to rearrange lettering order
*   if I go this route generate password will call this function
*   this function will then return a string to generatePassword that will then return to writePassword
*/


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);