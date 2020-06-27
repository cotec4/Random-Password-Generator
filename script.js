var generateBtn = document.querySelector("#generate");
var lowerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChoice = ["1", "2", "3", "4", "5","6", "7", "8", "9"];
var specialCharChoice = ["'", ".", ",", ":", ";", "=", "?", "/", "_", "~", "|", "&quot", "&apos", "&amp", "&lt", "&gt", "!", "$", "#", "%", "(", ")", "*", "[", "]", "+", "-"];

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

function generatePassword() {
    var numChar = prompt("How many characters do you want in the password? (Must be between 8 and 128 characters)")
    if (numChar < 8 || numChar > 128) {
        alert("Please pick a number between 8 and 128");
    }
    else {
        var lowerCase = confirm("Do you want to include lowercase letters in your password?");
        var upperCase = confirm("Do you want to include uppercase letters in your password?");
        var numIncl = confirm("Do you want to include numeric values in your password?");
        var special = confirm("Do you want to include special characters in your password?");
    }
    // if (lowerCase === true) { words += lowerChoice };
    // if (UpperCase === true) { words += upperChoice };
    // if (mnumIncl === true) { words += numberChoice };
    // if (special === true) { words += specialCharChoice };
    
    if (lowerCase === false && upperCase === false && numIncl === false && special === false) {
        alert("There has to be at least one variable included!");
    }
    else if (lowerCase === true && upperCase === true && numIncl === true && special === true) {
        while (parseInt(passwordText) < parseInt(numChar)) {
            var passwordText = passwordText += lowerChoices[Math.floor(Math.random() *parseInt(numChar))] + upperChoices[Math.floor(Math.random() *parseInt(numChar))] + numberChoice[Math.floor(Math.random() *parseInt(numChar))];
        }
        // for (var i = 0; i < numChar; i++) {
        //     symbol = Math.floor(Math.random() * parseInt(numChar));
        //     passwordText = lowerChoice[symbol] + upperChoice[symbol] + numberChoice[symbol] + specialCharChoice[symbol];
        // }
    }
    console.log(passwordText);
    // else if (lowerCase === true && upperCase === true && numIncl === true && special === false) {
    // }
    // else if (lowerCase === true && upperCase === true && numIncl === false && special === false) {
    // }
    // else if (lowerCase === true && upperCase === false && numIncl === false && special === false) {
    // }
}
generateBtn.addEventListener("click", writePassword);