var generateBtn = document.querySelector("#generate");
// Variables for the possible inputs of lower case letters, upper case letters, numbers and special characters
var lowerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChoice = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharChoice = ["'", ".", ",", ":", ";", "=", "?", "/", "_", "~", "|", '"', "&", "<", ">", "!", "$", "#", "%", "(", ")", "*", "[", "]", "+", "-"];

// Creating a function to select a random number for an array
function randomNumber(array) {
    return Math.floor(Math.random() * array.length);
}
// Creating a function to use the random number generated as an index of each input array
function randomChoice(array) {
    return array[randomNumber(array)];
}
// Creating a shuffling function to shuffle a string of letters for the ending password
function shuffle(password) {
    var arr = password.split("");
    arr.sort(function() {
        return 0.5 - Math.random();
    });
    password = arr.join("");
    return password;
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

function generatePassword() {
    var password = "";
    // Prompting to determine how many characters the password is going to be (forcing a range of 8 to 128 characters)
    var numChar = prompt("How many characters do you want in the password? (Must be between 8 and 128 characters)")
    if (numChar < 8 || numChar > 128) {
        alert("Please pick a number between 8 and 128");
        password = "";
        return password;
    }
    // Once correct character amount is picked, confirming what needs to be included in the password
    else {
        var confirmArray = [];
        var initialCharAdded = 0;
        var lowerQ = confirm("Do you want to include lowercase letters in your password?");
        var upperQ = confirm("Do you want to include uppercase letters in your password?");
        var numQ = confirm("Do you want to include numeric values in your password?");
        var specialQ = confirm("Do you want to include special characters in your password?");
        // If no variable is chosen, alert that at least one variable has to be selected
        if (lowerQ === false && upperQ === false && numQ === false && specialQ === false) {
            alert("Your password has to include something!");
            password = "";
            return password
        }
        // Conditional on the lowerQ being true then push to the combined array 
        if (lowerQ === true) {
            password += randomChoice(lowerChoice);
            confirmArray.push(lowerChoice);
            initialCharAdded++;
        }
        // Conditional on the upperQ being true then push to the combined array 
        if (upperQ === true) {
            password += randomChoice(upperChoice);
            confirmArray.push(upperChoice);
            initialCharAdded++;
        }
        // Conditional on the numberQ being true then push to the combined array 
        if (numQ === true) {
            password += randomChoice(numberChoice);
            confirmArray.push(numberChoice);
            initialCharAdded++;
        }
        // Conditional on the specialQ being true then push to the combined array 
        if (specialQ === true) {
            password += randomChoice(specialCharChoice);
            confirmArray.push(specialCharChoice);
            initialCharAdded++;
        }
        for (var i = 0; i < (numChar - initialCharAdded); i++) {
            password += randomChoice(confirmArray[randomNumber(confirmArray)]);
            password = shuffle(password);
        }
        return password;
    }
}
generateBtn.addEventListener("click", writePassword);