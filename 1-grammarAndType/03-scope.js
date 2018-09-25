/*
SCOPE

JavaScript has both LOCAL and GLOBAL scope
*/

var x = 12;

function scope() {
    var x = 33;
    console.log(x);
}
scope();  //output -> 33
console.log(x);  //output -> 12

//
var x = 12;

function scope() {
    x = 33
    console.log(x);
}
scope();  //output -> 33
console.log(x);  //output -> 33

//The two examples above are different because the first example
//had two variables named 'x'. The second example had just 1 variable
//named 'x' in the global scope.

var x = 12;

function scope() {
    var x = 33;
    if (true) {
        var x = 45;
        console.log(x);  //guess -> 45, actual -> 45
    }
    console.log(x); //guess -> 33, actual -> 45
}
scope();
console.log(x); //guess -> 12, actual -> 12

//
let x = 12;

function scope() {
    let x = 33;
    if (true) {
        let x = 45;
        console.log(x);
    }
    console.log(x);
}
scope();
console.log(x);

//
function constTest() {
    const scope = 1;
    if (true) {
        const scope = 2;
        console.log(scope);
    }
    console.log(scope);
}
constTest();

/*
    variable declar.   obeys functional scope    obeys block scope   can be mutated (changed after initialization)
    var                 x                         o                   x
    let                 x                         x                   x
    const               x                         x                   o
*/