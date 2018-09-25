/*
TYPES
*/

//Booleans
let on = true;
console.log(on);  //ouput -> true

let off = false;
console.log(off); //output -> false

//boolean can represent: true/false, on/off, yes/no

//Null
/*
Null = empty value (not 0; not undefined)
    It is like an empty container; nothing is in it, but it still exists as a space to be filled
*/

let empty = null;
console.log(empty);

//Undefined
/*
undefined = no value assigned (not even an empty container)
undefined is not an error
*/

let undef = undefined;
console.log(undef);

let grass;
console.log(grass);

/*
Think of undefined and null as packages at UPS
null -> package deliberately sent out from UPS as empty
undefined -> package that was forgotten, or a package that has not yet been used
*/

//Numbers
let degrees = 65;
console.log(degrees);

let precise = 999999999999999; //can store up to 15 numbers
console.log(precise);

let rounded = 9999999999999999; //can't properly store 16 numbers; rounds up
console.log(rounded);

let notQuite = 0.2 + 0.1; //also can't properly store these decimals being added together
console.log(notQuite.toFixed(2)); //workaround the decimal problem

let num = 0.3;
console.log(num);
/////////////////////(  2      +        1)/10
let numbersAreHard = (0.2 * 10 + 0.1 * 10) /10; //can use this because 0.2*10 is technically 2, 0.1*10 is 1, dodging decimals!
console.log(numbersAreHard);

//STRINGS
//strings = any value within quotes; JS will spit out the value within the quotes
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

//numbers vs strings
let first = 1050 + 100;
let second = '1050' + '100'; //concatinated strings

console.log(first); //number
console.log(second); //string

console.log(typeof first); //number
console.log(typeof second); //string

//What's going on here?
// + -> performs addition when given two numbers, does concatination when given two strings

let third = 1050 + '100';

console.log(third);

let firstName = 'Kyle';
let lastName = 'Resnik';
let houseNumber = 5252;
let aptNumber = 'Apt 204';
let street = 'E 86th Street';
let city = 'Indianapolis';
let state = 'IN';
let zipCode = 46250;

console.log(firstName, lastName + ',', houseNumber, aptNumber, street + ',', city + ',', state, zipCode);

//OBJECTS
/*
What is an object?

A container that can hold multiple datatypes
    denoted by {}
    has keys and values (color (key): 'blue' (value)), separated with a colon
    each key separated with a comma
*/

let burritosNow = {
    size: 'large',
    quantity: 4,
    now: true
}

console.log(burritosNow); //keys and values of object
console.log(typeof burritosNow); //object

//Arrays
/*
Arrays are great for lists
    denoted by []
    have values separated by commas -> ['blue', 'green', 'yellow']
*/

let burritos = ['large', 4, true]; //can mix and match datatypes in array

console.log(burritos);
console.log(typeof burritos);