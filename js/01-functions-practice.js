/*eslint-env browser*/

//STEP 1
/*Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".*/
/*function halfNumber(number) {
    "use strict";
    var result;
    result = number / 2;
    return result;

}
var number = 7;
var result = halfNumber(number);

window.console.log("Half of " + number + " is " + result + ".");
*/


//STEP 2
/*Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."*/
/*var number = 7;
function squareNumber(num) {
    "use strict";
    num = number * number;
    return num;
}

window.console.log("The result of squaring the number " + number + " is " + squareNumber(number) + ".");
*/

//STEP 3
/*Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the second number, and return the result. It should log a string like "2 is 50% of 4."*/
/*var number1 = 2;
var number2 = 4;
function percentOf(number1, number2) {
    "use strict";
    return number1 / number2 * 100;
}

window.console.log(number1 + " is " + percentOf(number1, number2) + "% of " + number2 + ".");
*/

//STEP 4
/*Write a function called findModulus() that accepts two numbers. Within the function write a statement that returns the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."*/

/*function findModulus(number1, number2) {
    "use strict";
    var result;
    result = number1 % number2;
    return result;
}
var number2 = parseInt(window.prompt("enter number"), 10);
var number1 = parseInt(window.prompt("enter number"), 10);
var result =  findModulus(number1, number2);
window.console.log(result + " is the modulus of " + number1 + " and " + number2);
*/

//STEP 5
/*Create a JavaScript function that accepts a certain amount of numbers as parameters. Those numbers should be collected using a prompt and the numbers should be delimited by commas. Once the values are collected, find the sum of all of the numbers combined. You will need to use a function, loop, arguments object, and several type conversion global functions to accomplish this task.*/

/*function sum(number1, number2) {
    "use strict";
    var s;
    s = number1,number2;
    for (var i = 1; i < arguments.length; i +=1) {
        s += arguments[i];
    }
    return s;
}
var number1 = parseInt(window.prompt("enter number"), 10);
var number2 = parseInt(window.prompt("enter number"), 10);
var s = sum(number1,number2);
window.console.log("the sum of " + number1 + " and " + number2 + " is " + s);
*/






