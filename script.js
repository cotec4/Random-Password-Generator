// Remaining Questions - how to ensure a selection from each array is chosen when arrays are combined? Code seems very dry, there has to be a way to make it less dry?
var generateBtn = document.querySelector("#generate");
// Variables for the possible inputs of lower case letters, upper case letters, numbers and special characters
var lowerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChoice = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharChoice = ["'", ".", ",", ":", ";", "=", "?", "/", "_", "~", "|", "&quot", "&apos", "&amp", "&lt", "&gt", "!", "$", "#", "%", "(", ")", "*", "[", "]", "+", "-"];

// Creating a function to select a random number for an array
function randomNumber(array) {
    return Math.floor(Math.random() * array.length);
}
// Creating a function to use the random number generated as an index of each input array
function randomChoice(array) {
    return array[randomNumber(array)];
}
// Creating a function to randomize the generated password (if more than one confirm is true)
function randomCharacter(characters) {
    return
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Join two arrays to be able to randomly choose from the combined arrays
function arrayJoiner(array1, array2) {
    return array1.concat(array2);
}
// Combine three arrays to be able to randomly choose from the combined arrays
function threeArrayJoiner(array1, array2, array3) {
    return array1.concat(array2).concat(array3);
}
// Combine all four arrays to be able to randomly choose from the combined arrays 
function fourArrayJoiner(array1, array2, array3, array4) {
    return array1.concat(array2).concat(array3).concat(array4);
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
        var lowerQ = confirm("Do you want to include lowercase letters in your password?");
        var upperQ = confirm("Do you want to include uppercase letters in your password?");
        var numQ = confirm("Do you want to include numeric values in your password?");
        var specialQ = confirm("Do you want to include special characters in your password?");
        // A for loop function for lower case letters
        function lower(numChar) {
            if (lowerQ === true) {
                for (var i = 0; i <= numChar; i++) {
                    password += randomChoice(lowerChoice);
                }
            }
        }
        // A for loop function for upper case letters
        function upper(numChar) {
            if (upperQ === true) {
                for (var i = 0; i <= numChar; i++) {
                    password += randomChoice(upperChoice);
                }
            }
        }
        // A for loop function for numbers
        function numF(numChar) {
            if (numQ === true) {
                for (var i = 0; i <= numChar; i++) {
                    password += randomChoice(numberChoice);
                }
            }
        }
        // A for loop function for special characters
        function special(numChar) {
            if (specialQ === true) {
                for (var i = 0; i <= numChar; i++) {
                    password += randomChoice(specialCharChoice);
                }
            }
        }
    }
    // If all selections are false, alerting that one must be chosen
    if (lowerQ === false && upperQ === false && numQ === false && specialQ === false) {
        alert("There has to be at least one variable included!");
        password = "";
        return password;
    }
    else if (lowerQ === true && upperQ === false && numQ === false && specialQ === false) {
        // Only one is true so can just run function for each (lower, upper, number and special)
        lower(numChar);
        return password;
    }
    else if (lowerQ === false && upperQ === true && numQ === false && specialQ === false) {
        // Only one is true so can just run function for each (lower, upper, number and special)
        upper(numChar);
        return password;
    }
    else if (lowerQ === false && upperQ === false && numQ === true && specialQ === false) {
        // Only one is true so can just run function for each (lower, upper, number and special)
        numF(numChar);
        return password;
    }
    else if (lowerQ === false && upperQ === false && numQ === false && specialQ === true) {
        // Only one is true so can just run function for each (lower, upper, number and special)
        special(numChar);
        return password;
    }
    else if (lowerQ === true && upperQ === true && numQ === false && specialQ === false) {
        // Join the two arrays to choose randomly in the combined array
        var lowUp = arrayJoiner(lowerChoice, upperChoice);
        for (var i = 0; i < numChar; i++) {
            password += randomChoice(lowUp);
        }
        return password;
    }
    else if (lowerQ === true && upperQ === false && numQ === true && specialQ === false) {
        // Join the two arrays to choose randomly in the combined array
        var lowNum = arrayJoiner(lowerChoice, numberChoice);
        for (var i = 0; i < numChar; i++) {
            password += randomChoice(lowNum);
        }
        return password;
    }
    else if (lowerQ === true && upperQ === false && numQ === false && specialQ === true) {
        // Join the two arrays to choose randomly in the combined array
        var lowSpec = arrayJoiner(lowerChoice, specialCharChoice);
        for (var i = 0; i < numChar; i++) {
            password += randomChoice(lowSpec);
        }
        return password;
    }
    else if (lowerQ === false && upperQ === true && numQ === true && specialQ === false) {
        // Join the two arrays to choose randomly in the combined array
        var upperNum = arrayJoiner(upperChoice, numberChoice);
        for (var i = 0; i < numChar; i++) {
            password += randomChoice(upperNum);
        }
        return password;
    }
    else if (lowerQ === false && upperQ === true && numQ === false && specialQ === true) {
        // Join the two arrays to choose randomly in the combined array
        var upperSpec = arrayJoiner(upperChoice, specialCharChoice);
        for (var i = 0; i < numChar; i++) {
            password += randomChoice(upperSpec);
        }
        return password;
    }
    else if (lowerQ === false && upperQ === false && numQ === true && specialQ === true) {
        // Join the two arrays to choose randomly in the combined array
        var numSpec = arrayJoiner(numberChoice, specialCharChoice);
        for (var i = 0; i < numChar; i++) {
            password += randomChoice(numSpec);
        }
        return password;
    }
    else if (lowerQ === true && upperQ === true && numQ === true && specialQ === false) {
        // Join the three arrays to choose randomly in the combined array
        var lowUpNum = threeArrayJoiner(lowerChoice, upperChoice, numberChoice);
        for (var i = 0; i < numChar; i++) {
            password += randomChoice(lowUpNum);
        }
        return password;
    }
    else if (lowerQ === true && upperQ === true && numQ === false && specialQ === true) {
        // Join the three arrays to choose randomly in the combined array
        var lowUpSpec = threeArrayJoiner(lowerChoice, upperChoice, specialCharChoice);
        for (var i = 0; i < numChar; i++) {
            password += randomChoice(lowUpSpec);
        }
        return password;
    }
    else if (lowerQ === true && upperQ === false && numQ === true && specialQ === true) {
        // Join the three arrays to choose randomly in the combined array
        var lowNumSpec = threeArrayJoiner(lowerChoice, numberChoice, specialCharChoice);
        for (var i = 0; i < numChar; i++) {
            password += randomChoice(lowNumSpec);
        }
        return password;
    }
    else if (lowerQ === false && upperQ === true && numQ === true && specialQ === true) {
        // Join the three arrays to choose randomly in the combined array
        var upperNumSpec = threeArrayJoiner(upperChoice, numberChoice, specialCharChoice);
        for (var i = 0; i < numChar; i++) {
            password += randomChoice(upperNumChoice);
        }
        return password;
    }
    else if (lowerQ === true && upperQ === true && numQ === true && specialQ === true) {
        // Join the four arrays then do random choices
        var lowUpNumSpec = fourArrayJoiner(lowerChoice, upperChoice, numberChoice, specialCharChoice);
        for (var i = 0; i < numChar; i++) {
            password += randomChoice(lowUpNumSpec);
        }
        return password;
    }
}
generateBtn.addEventListener("click", writePassword);