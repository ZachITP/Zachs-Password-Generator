// Assignment Code
CharacterCount = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
  if (CharacterCount < 8 || CharacterCount > 128) {
    return "Please select the blue button and choose a number between 8 and 128.";
  } else if (isNaN(CharacterCount)) {
    CharacterCount = prompt("Numeric entry only.");
  }
  else {
    alert("Your password will be " + CharacterCount + " characters long.");
    
  }

  //Prompts to build the password
  Lowercase = confirm("Use lowercase letters? abcd");
  if (Lowercase) {
     alert("Your password will have lowercase letters.");
  }
  else {
    alert("No lowercase letters.");
  }

  Uppercase = confirm("Use UPPERCASE letters? ABCD");
  if (Uppercase) {
    alert("Your password will have UPPERCASE letters.");
  }
  else {
    alert("No UPPERCASE letters.");
  }

  Numbers = confirm("Use numbers? 1234");
  if (Numbers) {
    alert("Your password will have numbers.");
var generateBtn = document.querySelector("#generate");
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
