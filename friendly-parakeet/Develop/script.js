// Assignment code here
var log = "";

var passwordLength = 12;
var newpassword = '';
function dosomelog(label, mylog) {
  log += label + ": " + mylog + "<br>"
}

function generatePassword(){
  newpassword = '';
  for (var i = 0; i < passwordLength; i++) {
    var mypossiblechars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*";
  
    var shorter = Math.random();
    dosomelog("shorter", shorter);
    dosomelog("mynewrandom", shorter);
    dosomelog("chars.length", mypossiblechars.length);
  
    var rnum = Math.floor(shorter * mypossiblechars.length);
    dosomelog("rnum", rnum);
    log += "<hr>";
  
    var mynextchar = mypossiblechars.substring(rnum, rnum + 1);
    dosomelog("mynextchar", mynextchar);
  
    newpassword += mynextchar;
  }
  
  password = newpassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = newpassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
