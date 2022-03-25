const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const userName = "Eric"

console.log(`Welcome to the Password Authenticator ${userName}!`)
reader.question("Please enter your password to see if it is valid:  ", function(input){
	passwordLength = input.length;
    if(passwordLength >= 9){
        console.log("Look at you, hacker! Acceptable password length.")
    }
    else{
        console.log("I will not abide disobedience.  Enter a longer password next time.")
    }

reader.close()
} )  