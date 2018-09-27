/*
RECAP
*/

let stringExample = 'sting';
let numberExample = 69;
let boolExample = true;

let conditionExample = 0;

//if else example, checks if statement is true
if (typeof conditionExample === 'string'){
  console.log('Yep, it\'s a string!');
} else if (typeof conditionExample === 'number'){
  console.log("Yep, it's a number!");
} else if (typeof conditionExample === 'boolean'){
  console.log("Yep, it's a boolean!");
}

console.log(typeof conditionExample);
//switch example, does a comparison
switch (typeof conditionExample) {
  case 'string':
    console.log("This is a string!");
    break;
  case 'number':
    console.log("This is a number!");
    break;
  case 'boolean':
    console.log("This is a boolean!");
    break;
  default:
    console.log("This variable is not a string, boolean, or number.");
    break;
}

//ternary example
(typeof conditionExample === 'string') ? console.log("Our variable is a string!") 
: (typeof conditionExample === 'number') ? console.log("Our variable is a number!") 
: (typeof conditionExample === 'undefined') ? console.log("Our variable is undefined.") 
: console.log("This is our default case.");

let FB = 15;

// if (FB % 3 === 0 && FB % 5 === 0){
//   console.log("Fizz Buzz");
// } else if (FB % 3 === 0){
//   console.log("Fizz");
// } else if (FB % 5 === 0){
//   console.log("Buzz");
// }

// switch (true){
//   case (FB % 15 === 0):
//     console.log("Fizz Buzz");
//     break;
//   case (FB % 5 === 0):
//     console.log("Fizz");
//     break;
//   case (FB % 3 === 0):
//     console.log("Buzz");
//     break;
// }

(FB % 15 === 0) ? console.log("Fizz Buzz") 
: (FB % 5 === 0) ? console.log("Buzz") 
: (FB % 3 === 0) ? console.log("Fizz") 
: console.log("Number not divisible by 3 or 5.");