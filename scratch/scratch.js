// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowercaseCharacters = arrayFromLowToHigh(65, 90)
const uppercaseCharacters = arrayFromLowToHigh(97, 122)
const Numbers= arrayFromLowToHigh(48, 57)
const specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
        
    }
    return array
}


function continue() {
    const result = confirm('true')
    if (result == false) {
        event.preventDefault()
    }
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) {
    event.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeSymbols, includeNumbers)
};








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
