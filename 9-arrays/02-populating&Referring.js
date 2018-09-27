/*
INTRO TO ARRAYS

Have [] brackets
Can hold multiple datatypes
Great for listing
*/

// Overview/calling
let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];
//index numbers   0         1         2       3     4    5      6        

console.log(typeof students); //object
console.log(students[2]); //Rhys

/*
Challenge:
Go into the nested array and get 'Iesha'
Print out "Hello Iesha, you look nice today."
*/
console.log(`Hello ${students[6][1]}, you look nice today.`); //string interpolation
console.log('Hello ' + students[6][1] + ', you look nice today.'); //string concatination


let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheesecake', 'Hot dog'];

// for (let i = 0; i < food.length; i++){
//   console.log(food[i]);
// }

//above loop does same as below, but for...of loop is easier/faster to write

// for (let f of food){
//   console.log(f);
// }

food.push('Pizza') //appends pizza to end of array
// console.log(food);
food.splice(1, 1, 'Bananas'); //first num: the index to start at, second num: number of things to remove, third num: replacement value
// console.log(food);
food.splice(2, 0, 'Sweet Potato Pie');
// console.log(food);
food.pop(); //removes the last value