# password-generator
Challenge 3


  ## How It Works
- Gets user input to determine length of password and character types to use.
- Characters are stored in arrays based on type in the symbols class.
- Symbols arrays are added to a character type array in passwordInfo class that contains all user selected character types.
- Individual characters are added to the password by first randomly choosing a character type, then choosing a random character of that type until desired length is reached.
- The last characters in the password are guaranteed to be one of each character type chosen by user.
- Upon generating new password, previous selections of password length and character types are cleared.

## link
https://tkcannon.github.io/password-generator/
