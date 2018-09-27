/*
COMPARISON OPERATORS
*/

//equality
console.log('3' == 3); // == doesn't care about datatype, this is type coercion
console.log('three' == 3); //false
console.log(0 == false);

//strict equality
console.log(3 === 3); //checks if values AND types are the same, thus prints true

//not equal
console.log('3' != 4);  //doesn't care about type, type coercion, output is true
console.log('4' != 4); //output is false

//strict not equal
console.log('3' !== 3); //checks type AND value

//greater than
console.log(3 > 2); //true

//less than
console.log(2 < 3); //true

//greater than or equal to
console.log(3 >= 3); //true

//less than or equal to
console.log(4 <= 4); //true

//And: returns true if the left and right are both true
console.log(true && true);  //output: true
let x = 5;
console.log(x < 10 && x > -5); //true
console.log(x < 10 && x > 15); //false

//tangent
let str = 'a';
console.log(str < 'p'); //compares position in alphabet, thus output is true

//Or: return true if the left OR the right are true
console.log(true || false); //true
let x = 5;
console.log(x < 10 || x > 15); //true