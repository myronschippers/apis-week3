console.log('Hello Apis');

// always declare our variables with const
const awesomeThings = null;
let doggo = null;

doggo = 'woof!';
console.log(doggo);

// = - sets or defines a value for a variable
// == - comparison of only value
// === - comparison of both value and type

if (doggo === 'woof!') {
  console.log('Doggo barked');
}

// LOOPS & ARRAYS

const listOfThings = [2, 1, 3, 20, 50, 2100];
console.log(listOfThings);
// How many items are in our array
console.log(listOfThings.length);
// What item is in our array
// get first item
console.log('first item: ', listOfThings[0]);
console.log('third item: ', listOfThings[2]);
// what is the last item
console.log('last item: ', listOfThings[listOfThings.length - 1]);

// for i LOOPS
for (let i = 0; i < listOfThings.length; i++) {
  console.log('index: ', i);
  console.log('item:', listOfThings[i]);
}

// for in LOOP - is showing index
console.log('\nSTART OF for in loop ::');
for (let index in listOfThings) {
  console.log('index (for in):', index);
  console.log('item (for in):', listOfThings[index]);
}

// for of LOOP - is showing the contents or items in the array
console.log('\nSTART OF for of loop ::');
for (let item of listOfThings) {
  console.log('item (for of):', item);
}

console.log('\nSTART OF while loop ::');
let n = 10;

while (n >= 0) {
  console.log('n is:', n);
  n--;
}
