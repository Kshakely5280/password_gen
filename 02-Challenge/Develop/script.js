// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerChar = 'abcdefghijklmnopqrstuvwxyz';
var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numeric = '0123456789';
var symbols = '!@#$%^&*()';


function generatePassword() {
  var approvedChar = '';
  var finalPassword = '';
  var userLength = prompt('Please choose a password length between 8 and 128 characters')
    userLength = parseInt(userLength);


  while (isNaN(userLength) || userLength < 8 || userLength > 128) {
      alert('Password length *must* be a number between 8 and 128');
      userLength = prompt('Enter the desired length of your password (between 8 and 128 characters)');
      userLength = parseInt(userLength);
  }
  var userLowercase = confirm('Would you like to include lowercase characters?')
  var userUppercase = confirm('would you like to include uppercase characters?')
  var userNumeric = confirm('Would you like numbers to be included?')
  var userSymbol = confirm('Would you like to include special characters?')
if (userLowercase === true) {
  approvedChar += lowerChar;
} if (userUppercase === true) {
  approvedChar  += upperChar;
} if (userNumeric === true) {
  approvedChar += numeric;
} if (userSymbol === true) {
  approvedChar += symbols;
}
for (let i = 0; i < userLength; i++) {
  var randomIndex = Math.floor(Math.random() * approvedChar.length)
  finalPassword += approvedChar[randomIndex];

}
return finalPassword;
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


