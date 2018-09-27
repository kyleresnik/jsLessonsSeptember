// Ternaries

var x = 6;

(x > 0) ? console.log("x is greater than 0") : console.log("x is not greater than 0")

//Both statements are effectively the same

if (x > 0) {
  console.log("greater")
} else {
  console.log("lesser")
}

let x = 10;

(x == 0) ? console.log("x equals zero") : (x < 0) ? console.log("x is less than zero") : console.log("x is greater than zero")


var age = 26;

(age >= 25) ? console.log("Yay, you can rent a car!") 
: (age >= 21) ? console.log("Yay, you can drink!") 
: (age >= 18) ? console.log("Yay! You can vote!") 
: console.log("Sorry, you're too young to do anything fun.");


let yep = -8;

(yep < 0 && yep > -10) ? console.log("yep is between 0 and -10") 
: (yep > 0) ? console.log("yep is greater than 0") 
: console.log("yep is greater than 0");