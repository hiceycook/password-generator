// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page



// Assignment Code
var generateBtn = document.querySelector("#generate");
// WRITE PASSWORD TO THE #PASSWORD INPUT//
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
//PASSWORD FUNCTION THAT WRITES TO THE DOM//
var generatePassword = function () {
    //PROMPT USER TO CHOOSE A PASSWORD LENGTH (BETWEEN 8-128)//
    var passwordLength = window.prompt("How long would you like your password to be? Please choose between 8 and 128 characters?");

    //ARRAYS FOR EACH CORRESPONDING WINDOW CONFIRM//
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "="];


    // LIST OF CHARACTERS FUNCTION CAN CHOOSE FROM//
    var passwordChar = [];

    // VALIDATE USER'S CHOSEN PASSWORD LENGTH
    if (passwordLength >= 8 && passwordLength <= 128) {
        //PASSWORD GENERATION LOGIC BELOW//
        // USER CHARACTER TYPE SELECTION//
        var isUpperCase = window.confirm("Would you like to include UPPER CASE letters in your password?");
        var isLowerCase = window.confirm("Would you like to include lowercase letters in your password?");
        var isNumber = window.confirm("Would you like to include numbers in your password?");
        var isSpecialChar = window.confirm("Would you like to include special characters? (@, $, !, etc.)");
        if (!isUpperCase && !isLowerCase && !isNumber && !isSpecialChar) {
            window.alert("You must choose at least one character type for your password.")
            generatePassword();
        }
        //IF USER CHOOSES A NUMBER OUTSIDE OF 8 AND 120, PROMPT AND EXECUTE FUNCTION AGAIN //
    } else {
        window.alert("You must choose a password between 8 and 128 characters.");
        generatePassword();
    }

}

//EVENT LISTENER TO BUTTON
generateBtn.addEventListener("click", writePassword);