const  statment = "I am a string";
//first i need to define a function and create a if else statement
if (statment) {
    console.log(true);
    // the if else statment needs to print true if the value is truthy
    } else if (statment === false) { 
        console.log ("The boolean value false is falsy");   
     //if the value is falsy then it should print The boolean value fale is falsy
    } else if (statment === null) {
         console.log ("the null value is falsy");
    // if the statment is null pring the null value is falsy    
    } else if (statment === undefined) {
        console.log ("undefined is falsy");
    // if the statment is undefined print undefined is falsy
    } else if (statment === 0) {
        console.log ("The number 0 is falsy (the only falsy number)");
    // if the statment is 0 pring the number 0 is falsy
    } else if (statment === "") {
        console.log ("The empty string is falsy ( the only falsy string)");
    // if the statment is "" print the empty string is falsy
}
