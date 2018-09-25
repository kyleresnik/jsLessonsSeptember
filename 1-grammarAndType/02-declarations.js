/*
VARIABLES

Notes on variables:
1) A variable MUST begin with a letter, underscore, or dollar sign
2) You can use numbers, but they must follow one of the above rules
3) JavaScript is case-sensitive -- 'hello' and 'Hello' are different
*/

var a = 1;
var b = 2;
console.log(a + b); //3

/*
DECLARATIONS

Declarations are the LEFT SIDE of a variable
    It is simply the var x
    It is on the left side of the assignment operator (=)

INITIALIZATIONS

Initializations are the RIGHT SIDE of a variable
    Set the value of a variable
    Includes the variable name (x), the assignment operator (=), and the value (ie 10) => x = 10
*/

var x;
console.log('Declaration', x);

x = 10;
console.log('Initialization 1:', x);

x = 33;
console.log('Initialization 2:', x);

/*
Var, Let, and Const:
var = 'old' js keyword for variables
let = 'new' js keyword for variables (introduced in ES6)
const = also 'new'; declares unchangeable variables
*/

let today = 'Great!';
const elevenFifty = 'Wonderful!';
console.log(today, elevenFifty);

today = 'Lovely!';
console.log(today, elevenFifty);

// elevenFifty = 'Super!'; <--commented out to prevent error, can't change const variable
console.log(today, elevenFifty);