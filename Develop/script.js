// Assignment Code
var generateBtn = document.querySelector("#generate"); 

// Creating Variables for my Password Creator
let password = "";
let numbers = "0123456789";
let specialChar = "!@#$%^&*()_-+=~[{|:;<,>.?\/}]";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let goodLength;
let tempPassword= "";
// Variables

// after generating the password this wipes it clean for it's next use
function rebuildPassword() {
  password = "";
  goodLength = 0;
  tempPassword = "";
}
//reset password

// intial prompt to enter in passsword length
function generatePassword() {;
  function firstPrompt() {
    let user = prompt("How long ya want your password to be, enter a number?");
      let inputNum = parseInt(user);
      if (inputNum >= 8 && inputNum <= 128) {
      goodLength = inputNum;
    } else {
       alert("Invalid Length, enter a number between 8-128");
    }
    }
    return firstPrompt();
  }
// Password length

/*
// I will just say I found this on StackOverflow but it helped a lot and make a lot of sense 
// essentially creating a random string of upper, lower, special char, and numbers
function randomLowerCase() {
  var lowerCaseLength = lowerCase.length;
  for ( var i = 0; i < lowerCase.length; i++) {
    password += lowerCase.charAt(Math.floor(Math.random() * lowerCaseLength));
  }
  return password;
}

function randomUpperCase() {
  var upperCaseLength = upperCase.length;
  for ( var i = 0; i < length; i++) {
    password += upperCase.charAt(Math.floor(Math.random() * upperCaseLength));
  }
  return password;
}

function randomSpecial() {
  var specialCharLength = specialChar.length;
  for ( var i = 0; i < length; i++) {
   password += specialChar.charAt(Math.floor(Math.random() * specialCharLength));
  }
  return password;
}

function randomNumber() {
  var numbersLength = numbers.length;
  for ( var i = 0; i < length; i++) {
    password += numbers.charAt(Math.floor(Math.random() * numbersLength));
  }
  return password;
}
// Random generators 

// confirming the want for characters 
var speicalCharCheck = confirm("Do ya want speical characters?");
if (speicalCharCheck = true) {
  tempPassword += randomSpecial(specialChar);
}

var numbersCheck = confirm("Do ya want numbers?");
if (numbersCheck = true) {
  tempPassword += randomNumber(numbers);
}

var lowerCaseCheck = confirm("Do ya want lower case letters?");
if (lowerCaseCheck = true) {
  tempPassword += randomLowerCase(lowerCase);
}

var upperCaseCheck = confirm("Do ya want UPPER CASE LETTERS?");
if (upperCaseCheck = true) {
  tempPassword += randomUpperCase(upperCase);
}
// Confirming what characters they wants

// Displaying the generated password
// storing new password
for ( var i  = 0; i < goodLength; i++) {
  password += tempPassword.charAt(math.floor(math.random() * tempPassword.length));
}
// storing new password
*/



// Write password to the #password input
function writePassword() { 
  var password = generatePassword(); 
  generatePassword();
  var passwordText = document.querySelector("#password");  
  passwordText.value = password; 
  rebuildPassword();
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




  // 0.5. create buckets for each character type
  // you code goes here
  // 1. get user preferences
  // 2. identify and collect the buckets the user has chosen
  // 3. Create a guaranteed collection 
  // 4. randomly draw characters
  // 5. create a password variable or an array
  // 6. use maybe push to take random characters ontp
  // the password array
  // 7. use for loop to repeat as many times as specified
  // 8. loop through the guaranteed elements, replace
  // elements in password array
  // 9. joing characters in the password array into a string
  // 10. return password */

