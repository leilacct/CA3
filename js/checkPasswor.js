function passwordValidator() {
  //This is to access the value inside the text box with id="staffPassword"
  var staffPassword = document.getElementById("staffPassword").value;
  alert(staffPassword);

  /*Creating a regx object to check if the staff password meets its requirements
   The password must have at least:
   One lowercase letter; 
   One uppercase letter; 
   One digit;
   One special character; 
   Eight characters long.*/

  var passwordRequirements = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=(.*[@#$%!.';:/,~*&+=])).{8,})$/;

  if (staffPassword.match(passwordRequirements)) {
    document.getElementById("Valid").style.display = "block";
    document.getElementById("inValid").style.display = "none";



  } else {
    document.getElementById("inValid").style.display = "block";
    document.getElementById("Valid").style.display = "none";

  }
}

var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var specialChar = document.getElementById("specialChar");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  //To validate special character
  var specialChars = /[@#$%!.';:/,~*&+=]/g;
  if (myInput.value.match(specialChars)) {
    specialChar.classList.remove("invalid");
    specialChar.classList.add("valid");
  } else {
    specialChar.classList.remove("valid");
    specialChar.classList.add("invalid");
  }

  // Validate length
  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
