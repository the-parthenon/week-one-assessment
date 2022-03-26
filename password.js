const readline = require('readline');



function ask(reader, question) {
    return new Promise((resolve, reject) => {
        reader.question(question, (input) => resolve(input));
    });
}

async function main() {
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
including at least one Uppercase letter, at least one number
and the letter "q." Spaces are not permitted.`)

    const input = await ask(reader, "Please enter your password to see if it is valid: ");
    reader.close();
    let passwordLength = input.length;
    let hasUpperCase = false;
    let hasQ = false;
    let hasNumber = false;
    let noSpaces = false;

    //Checks to see if there is a number in the password string.
    for (let i = 0; i < input.length; i++) {
        if (!isNaN(input.charAt(i)) === true) {
            hasNumber = true;
        }
        // console.log(hasNumber)
    }

    //Checks to see if there are spaces in password by replacing any whitespace from input and comparing the new length with previously stored passwordLength.    
    const withoutSpaces = input.replace(/\s/, '');
    if (withoutSpaces.length === passwordLength) {
        noSpaces = true;
    }
    // console.log(input)

    //This for loop verifies that the string contains an uppercase letter, and also prevents a false positive due to the use of numbers or special characters.

    for (let i = 0; i < input.length; i++) {
        if (input.charAt(i) === input.charAt(i).toUpperCase() && input.charAt(i) !== input.charAt(i).toLowerCase()) {
            hasUpperCase = true;
            // console.log('uppercase:',input.charAt(i));
            // console.log("Uppercase: ", hasUpperCase);
        }
    }

    //This loop verifies that the password contains a specific character (in this case, Q). The required letter can be either uppercase or lowercase.

    for (let i = 0; i < input.length; i++) {
        if (input.charAt(i).toUpperCase() === "Q") {
            hasQ = true;
        }
    }

    if (passwordLength < 10) {
        console.log("I will not abide disobedience.  Enter a longer password next time.");
        return;
    }
    if (hasUpperCase === false) {
        console.log("Pay attention.  Your password requires an Uppercase letter!");
        return;
    }
    if (hasNumber === false) {
        console.log("Letters alone will not suffice.");
        return;
    }

    if (hasQ === false) {
        console.log("Unacceptable!!  Password must contain the letter q.");
        return;
    }

    if (passwordLength !== input.length) {
        console.log("Oops!  Whitespace.");
        return;
    }

    console.log(`
          _____ __ __    __    __    ___  _____ _____
         / ___/|  |  |  /  ]  /  ]  /  _]/ ___// ___/
        (   \\_ |  |  | /  /  /  /  /  [_(   \\_(   \\_ 
         \\__  ||  |  |/  /  /  /  |    _]\\__  |\\__  |
         /  \\ ||  :  /   \\_/   \\_ |   [_ /  \\ |/  \\ |
         \\    ||     \\     \\     ||     |\\    |\\    |
          \\___| \\__,_|\\____|\\____||_____| \\___| \\___|
            
            Look at you, hacker! Acceptable password.`)



    return;
}

main();