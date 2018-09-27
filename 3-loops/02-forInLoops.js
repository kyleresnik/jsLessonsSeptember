/*
FOR IN LOOPS

Great for iterating over values in an object
*/

let student = {name: "Christian", awesome: true, degree: 'JavaScript', week: 1};

for (let item in student) {
  console.log(item);
  console.log(student[item]);
}

let catArray = ['tabby', 'british shorthair', 'burmser', 'maine coon'];
//                0               1               2            3
for (cat in catArray){
  console.log(catArray[cat]);
}

let studentName = 'william';
let capName = '';

for (let cha in studentName){
  if (cha == 0) {
    capName = studentName[cha].toUpperCase();
  } else {
    capName = capName + studentName[cha].toLowerCase();
  }
  console.log(capName);
}
console.log(capName);