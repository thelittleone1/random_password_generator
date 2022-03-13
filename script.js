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


// after generating the password this wipes it clean for it's next use
function rebuildPassword() {
  password = "";
  goodLength = 0;
  tempPassword = "";
}

// randomizer function 
function random(x) {
   password += x.charAt(Math.floor(Math.random() * x.length));
}

// generating password
function generatePassword() {

  // prompting user to enter length of password
  let user = prompt("How long ya want your password to be, enter a number?");
  let inputNum = parseInt(user);
    if (inputNum >= 8 && inputNum <= 128) {
      goodLength = inputNum;
    } else {
      alert("Invalid Length, enter a number between 8-128");
  }

// confirming what characters the user wants in their password
// and passing them through the randomizer function
var speicalCharCheck = confirm("Do ya want speical characters?");
    if (speicalCharCheck) {
      tempPassword += random(specialChar);
  }
var numbersCheck = confirm("Do ya want numbers?");
    if (numbersCheck) {
      tempPassword += random(numbers);
  }
var lowerCaseCheck = confirm("Do ya want lower case letters?");
    if (lowerCaseCheck) {
      tempPassword += random(lowerCase);
  }
var upperCaseCheck = confirm("Do ya want UPPER CASE LETTERS?");
    if (upperCaseCheck) {
      tempPassword += random(upperCase);
    }

    // loop function to take the goodLength the user entered and take the tempPassword
    // and randomize those characters the appropriate length
    // and then store it in password
    for ( var i  = 0; i < goodLength; i++) {
      password += tempPassword.charAt(Math.floor(Math.random() * tempPassword.length));
    }
    return password;

}

// Printing password to the console
console.log(password);

function writePassword() { 
  var password = generatePassword(); 
  generatePassword();
  var passwordText = document.querySelector("#password");  
  passwordText.value = password; 
  rebuildPassword();
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);