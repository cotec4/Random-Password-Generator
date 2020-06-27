var generateBtn = document.querySelector("#generate");
var lowerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChoice = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharChoice = ["'", ".", ",", ":", ";", "=", "?", "/", "_", "~", "|", "&quot", "&apos", "&amp", "&lt", "&gt", "!", "$", "#", "%", "(", ")", "*", "[", "]", "+", "-"];

function randomNumber(array) {
    return Math.floor(Math.random() * array.length);
}
function randomChoice(array) {
    return array[randomNumber(array)];
}
function randomCharacter(characters) {
    return
}

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
        var lowerQ = confirm("Do you want to include lowercase letters in your password?");
        var upperQ = confirm("Do you want to include uppercase letters in your password?");
        var numQ = confirm("Do you want to include numeric values in your password?");
        var specialQ = confirm("Do you want to include special characters in your password?");
        function lower(numChar) {
            if (lowerQ === true) {
                for (var i = 0; i <= numChar; i++) {
                    password += randomChoice(lowerChoice);
                }
            }
        }
        function upper(numChar) {
            if (upperQ === true) {
                for (var i = 0; i <= numChar; i++) {
                    password += randomChoice(upperChoice);
                }
            }
        }
        function numF(numChar) {
            if (numQ === true) {
                for (var i = 0; i <= numChar; i++) {
                    password += randomChoice(numberChoice);
                }
            }
        }
        function special(numChar) {
            if (specialQ === true) {
                for (var i = 0; i <= numChar; i++) {
                    password += randomChoice(specialCharChoice);
                }
            }
        }
    }
    if (lowerQ === false && upperQ === false && numQ === false && specialQ === false) {
        alert("There has to be at least one variable included!");
    }
    else if (lowerQ === true && upperQ === false && numQ === false && specialQ === false) {
        lower(numChar);
        return password;
        console.log(password);
    }
    else if (lowerQ === true && upperQ === true && numQ === false && specialQ === false) {
        lower(numChar / 2) + upper(numChar / 2);
        return password;
        console.log(password);
    }
    else if (lowerQ === true && upperQ === true && numQ === true && specialQ === false) {
        lower(numChar / 3) + upper(numChar / 3) + numF(numChar / 3);
        return password;
        console.log(password);
    }
    else if (lowerQ === true && upperQ === true && numQ === true && specialQ === true) {
        lower(numChar / 4) + upper(numChar / 4) + numF(numChar / 4) + special(numChar / 4);
        return password;
        console.log(password);
    }
    // What if we had a function that's only purpose is to randomize and get an Element from an array?

    console.log(randomChoice(password));
}
console.log(randomChoice(password));

generateBtn.addEventListener("click", writePassword);
// console.log(passwordText);