// RETURNS

function fullName(firstName, lastName){
  return firstName + ' ' + lastName;
}


var fullName = fullName("Kyle", "Resnik");
console.log(fullName);


function addNums(firstNum, secondNum) {
  return firstNum + secondNum;
}
console.log(addNums(2, 3));

//Tip Calculator Challenge
var payment = payment(20, 0.2);
function payment(bill, tipPercent) {
  return (bill * tipPercent) + bill;
}
console.log(payment);