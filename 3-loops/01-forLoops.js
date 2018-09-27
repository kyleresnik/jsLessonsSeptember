/*
CLASSIC FOR LOOPS
*/

//Loop Variations
//For statement
//Do while statement (old, hardly used)
//while statement
//labeled statement
//break statement
//continue statement
//for in statement
//for of statement

//counts from 0 - 9 by 1's
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//counts from 0 - 20 by 2's
for (let i = 0; i <= 20; i = i + 2){
  console.log(i);
}

//counts backwards from 10 = 0 by 1
for (let i = 10; i >= 0; i--){
  console.log(i);
}

//counts backwards from 0 - -24 by 2's
for (let x = 0; x >= -24; x-=2){
  console.log(x);
}

//Go through a name and display each letter individually
//My solution:
var myName = "Kyle";

for (counter = 0; counter < myName.length; counter = counter + 1){
  console.log(myName.substring (counter, counter + 1));
}

//instructor solution:
let name = "Kyle";
// k: 0, y: 1, l: 2, e: 3

for (let i = 0; i < name.length; i++){
  console.log(name[i]);
}

let sum = 0;

for (let i = 1; i <= 50; i++){
  sum = sum + i;
}
console.log(sum);



for (let i = 0; i <= 100; i++){
  if (i%3 == 0 && i%5 == 0){
    console.log('Fizz Buzz');
  } else if (i%3 == 0){
    console.log('Fizz');
  } else if (i%5 == 0){
    console.log('Buzz');
  } else {
    console.log(i);
  }
}