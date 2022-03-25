const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const userName = "Eric"

console.log(`
 ____   ____  _____ _____ __    __   ___   ____   ___   
|    \\ /    |/ ___// ___/|  |__|  | /   \\ |    \\ |   \\  
|  o  )  o  (   \\_(   \\_ |  |  |  ||     ||  D  )|    \\ 
|   _/|     |\\__  |\\__  ||  |  |  ||  O  ||    / |  D  |
|  |  |  _  |/  \\ |/  \\ ||     '  ||     ||    \\ |     |
|  |  |  |  |\\    |\\    | \\      / |     ||  .  \\|     |
|__|  |__|__| \\___| \\___|  \\_/\\_/   \\___/ |__|\\_||_____|
                                                        
Welcome to the Password Authenticator, ${userName}!
Valid passwords must contain at least 10 characters, 
including any Capital letter and the ltter "q"`)
reader.question("Please enter your password to see if it is valid:  ", function(input){
	let passwordLength = input.length;
    let hasUpperCase = false;
    let hasQ = false;
    
//This for loop verifies that the string contains an uppercase letter, and also prevents a false positive due to the use of numbers or special characters.

    for (let i = 0; i < input.length; i++) {
        if (input.charAt(i) === input.charAt(i).toUpperCase() && input.charAt(i) !== input.charAt(i).toLowerCase()) {
            hasUpperCase = true;
            // console.log('uppercase:',input.charAt(i));
            // console.log("Uppercase: ", hasUpperCase);
        }
    }
    for (let i = 0; i < input.length; i++) {
        if (input.charAt(i).toUpperCase() === "Q"){
            hasQ = true;
        }
    }
    if(passwordLength >= 10 && hasUpperCase === true && hasQ === true){
        console.log(`
         _____ __ __    __    __    ___  _____ _____
        / ___/|  |  |  /  ]  /  ]  /  _]/ ___// ___/
       (   \\_ |  |  | /  /  /  /  /  [_(   \\_(   \\_ 
        \\__  ||  |  |/  /  /  /  |    _]\\__  |\\__  |
        /  \\ ||  :  /   \\_/   \\_ |   [_ /  \\ |/  \\ |
        \\    ||     \\     \\     ||     |\\    |\\    |
         \\___| \\__,_|\\____|\\____||_____| \\___| \\___|
                                                    
         Look at you, hacker! Acceptable password.`)
    }
    else if(passwordLength < 10){
        console.log("I will not abide disobedience.  Enter a longer password next time.")
    }
    else if(hasUpperCase === false){
        console.log("Pay attention.  Your password requires an Uppercase letter!")
    }
    else if(hasQ === false){
        console.log("Unacceptable!!  Password must contain the letter q.")
    }
    else{
        console.log("Something looks weird.")
    }
    
reader.close()
} )  