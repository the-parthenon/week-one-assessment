const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const userName = "Eric"

console.log(`Welcome to the Password Authenticator ${userName}!`)
reader.question("Please enter your password to see if it is valid:  ", function(input){
	let passwordLength = input.length;
    let hasUpperCase = false;
    
//This for loop verifies that the string contains an uppercase letter, and also prevents a false positive due to the use of numbers or special characters.

    for (let i = 0; i < input.length; i++) {
        if (input.charAt(i) === input.charAt(i).toUpperCase() && input.charAt(i) !== input.charAt(i).toLowerCase()) {
            hasUpperCase = true;
            // console.log('uppercase:',input.charAt(i));
            // console.log("Uppercase: ", hasUpperCase);
        }
    }
    if(passwordLength >= 10 && hasUpperCase === true){
        console.log("Look at you, hacker! Acceptable password.")
    }
    else if(passwordLength < 10){
        console.log("I will not abide disobedience.  Enter a longer password next time.")
    }
    else if(hasUpperCase === false){
        console.log("Pay attention.  Your password requires an Uppercase letter!")
    }
    else{
        console.log("Something looks weird.")
    }
    
reader.close()
} )  