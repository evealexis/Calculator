const prompt = require('readline-sync');
const readlineSync = require('readline-sync');

let options = ["add", "subtract", "multiply", "divide"];
let index = readlineSync.keyInSelect(options, "What would you like to do?");
///add in a function to take two numbers and replace the parameters
let inputNum1 = Number(prompt.question("Pick a first number "));
let inputNum2 = Number(prompt.question("Pick a second number "));


//set it so it stops after the user recieves an answer


function calculator(){

    function add(num1, num2){
        return console.log(num1 + num2);
    }
    
    function subtract(num1, num2){
        return console.log(num1 - num2);
    }
    
    function multiply(num1, num2){
        return console.log(num1 * num2);
    }
    
    function divide(num1, num2){
        return console.log(num1 / num2);
    }
    
        //when user makes a choice call corresponding function
        if(options[0] === options[index]){
            add(inputNum1, inputNum2);
        } else if(options[1] === options[index]){
            subtract(inputNum1, inputNum2);
        } else if(options[2] === options[index]){
            multiply(inputNum1, inputNum2);
        } else if(options[3] === options[index]){
            divide(inputNum1, inputNum2);
        } else ("Error: please enter a number")

}


while(true){
    calculator();
}
