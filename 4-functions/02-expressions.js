/*
EXPRESSIONS
*/

console.log(typeof hi); //expectation: function, output: undefined
var hi = function hi() {
  console.log("Hello!");
}
hi(); //now that the function is initialized, output: "Hello!"