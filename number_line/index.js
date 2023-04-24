const sum = number1 + number2;
// define a variable
if (sum >= 100) {
    console.log (sum + " is greater than 100");
    // if the number is greater than 100 print the number is greater than 100
    } else if (sum >= 1) {
        console.log (sum + " is greater that 0");
    // if the number is larger than 0 print the number is larger than 0    
    } else if (sum == 0) {
        console.log (sum + " is equal to 0");
    // if the number is equal to 0 print 0 is equal to 0
    } else if (sum >= -1000) {
        console.log (sum + " is a negative number");
    // if the number is a negative number print -number is a negative number    
    } else if (sum <= 1001) {
        console.log (sum + " is less than -1000");
    //if the number is  less than -1000 print -1000 is a negative number
    }
