function generatePassword() {
// Assignment Code
var possible = [];
  var numeric = ['0', '7', '8', '9', '4', '5', '6', '1', '2', '3'];
  var uppercase = ['Z', 'A', 'C', 'H', 'B', 'D', 'E', 'F', 'G', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y',];
  var lowercase = ['h', 'a', 'n', 's', 'o', 'f', 'g', 'b', 'i', 'j', 'k', 'l', 'm', 'c', 'e', 'p', 'q', 'r', 'd', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var special = ['@', '%', '+', '\\','😁', '/', "'", '😂','!', '#', '$', '^', '?', ':', ',', ')', '😀', '}', '{', ']', '[', '~', '-', '_', '.'];
  
  // Confirm the input matches the criteria
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

else {
  alert("No numbers.");
}

Special = confirm("Use special characters? %&#@!");
if (Special) {
  alert("Your password will have special characters.");
}
else {
  alert("No special characters.");
}

if (Lowercase === false && Uppercase === false && Numbers === false && Special === false) {
  return "Please Select the blue button to continue and select at least one option.";
};

// groups all selections and applys them to the password 
if (Lowercase) {
  possible = possible.concat(lowercase);
}
if (Uppercase) {
  possible = possible.concat(uppercase);
}
if (Numbers) {
  possible = possible.concat(numeric);
}
if (Special) {
  possible = possible.concat(special);
}

// engine for the password length and randomizer 
let randompasswordgenerated = ""
for (let i = 0; i < CharacterCount; i++) {
  let rng =[Math.floor(Math.random() * possible.length)];
  randompasswordgenerated = randompasswordgenerated + possible[rng];
}
alert("Your password is:  " + randompasswordgenerated);
return "Thank you for using Password Generator"
};


var generateBtn = document.querySelector("#generate");

function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}

// Adds Event Listener to Generate Password Button
generateBtn.addEventListener("click", writePassword);

