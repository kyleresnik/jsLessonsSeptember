/*
IF ELSE
*/

weather = 75;

if (weather < 70){
  console.log('Wear a jacket!');
} else {
  console.log('No jacket necessary!');
}


let myName = 'Kyle Resnik';

if (myName == 'Kyle Resnik'){
  console.log('Hello, my name is Kyle Resnik!');
} else {
  console.log('Hello, what is your name?')
}

function name(string){
  // console.log(string.charAt(0).toUpperCase());
  // console.log(string.slice(1).toLowerCase());
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
console.log(name('josh'));

let newName = 'tYlEr';

if (newName[0] == name[0].toUpperCase){
  firstLetter = newName[0] + name.slice(1).toLowerCase();
  console.log(firstLetter);
} else {
  otherLetters = newName.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  console.log(otherLetters);
}

let age = 29;

if (age < 18) {
  console.log('Sorry, too young!');
} else if (age >= 18 && age < 21) {
  console.log('Yay, you can vote!')
} else if (age >= 21 && age < 25){
  console.log('Yay, you can drink!')
} else {
  console.log('Yay, you can rent a car!')
}

let age = 32;

if (age >= 25){
  console.log('Yay, you can rent a car!')
} else if (age >= 21) {
  console.log('Yay, you can drink!')
} else if (age >= 18) {
  console.log('Yay, you can vote!')
} else {
  console.log('Sorry, you\'re a youngin')
}