/*
Assignment Operators
*/

//assignment operator (=)
let x = 5;
console.log(x); //5

// x = x + 1;
// console.log(x);

//addition operator (+=)
x += 1;  //same as x = x + 1, shorthand
console.log(x); //6

//subtraction operator (-=)
x -= 1; //x = x - 1, shorthand
console.log(x); //5

//multiplication operator (*=)
x *= 1; //x = x * 1;
console.log(x); //5

//division operator (/=)
x /= 1; //x = x / 1;
console.log(x); //5

//modulus operator
console.log(7%5); //output -> 2, remember that 7/5 = 1 & 2/5, shows remainder
console.log(x = x % 5);
x = x % 5; //assign x to 0
x %= 5; //the same as above line

//exponential assignment
let x = 5;
x = x ** 2; //exponential ** takes x to the power of 2
x **= 1;
console.log(x);