/*
HOISTING
*/
console.log(scissors); //undefined
var scissors = 'blue';

console.log(scissors); //blue

hello(); //hoisted function works even above the function code block
function hello(){
    console.log('hoisting is... interesting')
}