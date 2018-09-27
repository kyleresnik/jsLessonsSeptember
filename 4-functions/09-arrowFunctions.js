//ARROW FUNCTIONS

function coffee() {
  console.log("Coffee is mana from heaven!")
}

let tea = () => {
  console.log("Tea is secondary to coffee, but still good.")
}

coffee();
tea();

var cats = (kitten, puppy) => {
  console.log(`I have ${kitten} cats and ${puppy} dogs.`);
}

cats(2, 3);

// Arrow Function Body Styles
// Concise
let apples = x => console.log(`There are ${x} apples.`)
apples(5);

// Block
let peaches = (x) => {console.log(`There are ${x} peaches`)}
peaches(6);