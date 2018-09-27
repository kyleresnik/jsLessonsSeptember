let friend = 'Alex';

switch (friend) { //switch checks if variable matches the case
  case 'Tom':
    console.log('Hey Tom, when are you rock climbing?');
    break;
  case 'Ken':
    console.log('Hey Ken, wanna play Kemet?');
    break;
  case 'Carolyn':
    console.log('Hey Carolyn, why you leavin us?');
    break;
  default:
  console.log(`I'm sorry, ${friend}, but do I know you?`); //backticks do string interpolation, allowing variable friend to be placed
}

let dessert = 'pie';

switch (dessert) {
  case 'pie':
    console.log('Pie, pie, me oh my!');
    break;
  case 'cake':
    console.log('Cake is great!');
    break;
  case 'ice cream':
    console.log('I scream for ice cream!');
    break;
  default:
    console.log('Not on the menu.')
} //without a break; switch will run through everything without a break

let yep = -18;

switch (true){
  case (yep < 0 && yep > -10):
    console.log('Worked!');
    break;
  case (yep > 0):
    console.log('Worked here!');
    break;
  default:
    console.log('Didn\'t work...');
}