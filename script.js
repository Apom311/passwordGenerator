// Assignment Code
var generateBtn = document.querySelector("#generate");

var lilLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generatePassword = function() {

  var combineChar = [];

  var passwordLength = window.prompt("How long would you like your password to be? [choose a number between 8-128]")
  console.log(passwordLength);

  if (!passwordLength) {
    window.alert("No number detected.");
    return;
  } else if (passwordLength > 7 && passwordLength < 129) {

    var lils = window.confirm("Click 'OK' to include lowercase letters?");
  
    if (lils) {
      combineChar = combineChar.concat(lilLetters);
      console.log(lilLetters);
      console.log(combineChar);   
    }

    var bigs = window.confirm("Click 'OK' to include UPPERCASE letters?");

    if (bigs) {
      combineChar = combineChar.concat(bigLetters); 
    }

    var nums = window.confirm("Click 'OK' to include numbers?");

    if (nums) {
      combineChar = combineChar.concat(numbers); 
    }

    var syms = window.confirm("Click 'OK' to include special characters?");

    if (syms) {
      combineChar = combineChar.concat(symbols);
    }

    console.log(combineChar);

    var blankSpace = [];

    for (let i = 0; i < passwordLength; i++) {
      const finalChoice = combineChar[Math.floor(Math.random() * combineChar.length)]
      blankSpace.push(finalChoice);       
    }
    var password = blankSpace.join("");
    
    return password;
  } else {
    window.alert("Number does not match acceptable input.");
    return;
  }
}