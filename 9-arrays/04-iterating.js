//Iterating
let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheesecake', 'Hot dog'];

// food.forEach(f => {console.log(f)})
food.forEach((food, number) => {
  console.log(food);
  console.log(number);
})

let movies = ['The Shining', '2001: A Space Odyssey', 'Doctor Strangelove', 'Eraserhead', 'Twin Peaks: Fire Walk With Me'];

movies.forEach((movies) => {
  console.log(movies);
})
movies.push('Paprika');
movies.splice(3, 0, 'Perfect Blue');
console.log(movies);


let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let newArray = new Array(73);
console.log(newArray.length);
newArray.forEach(el => {
  console.log(el);
})
console.log(newArray);