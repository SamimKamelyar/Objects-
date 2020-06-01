// Exercise: character counts
/*
function charCounts(str) {
  const counts = {};

  for (let char of str.toLowerCase()) {
    if (counts[char]) {
      counts[char] += 1; // counts[char] = counts[char] + 1
    } else {
      counts[char] = 1;
    }
  }

  return counts;
}

console.log(charCounts("An archor"));
*/

// Turn the above regular function into an arrow function

const charCounts = (str) => {
  const counts = {};

  for (let char of str.toLowerCase()) {
    if (counts[char]) {
      counts[char] += 1; // counts[char] = counts[char] + 1
    } else {
      counts[char] = 1;
    }
  }

  return counts;
};

console.log(charCounts("An archor"));

// Solution using only for loop
const phrase = process.argv[2];
let chars = phrase.split("");
const counterObject = {};

for (let i = 0; i < chars.length; i++) {
  let character = chars[i].toLowerCase();
  counterObject.hasOwnProperty(character) ?
    (counterObject[character] = counterObject[character] + 1) :
    (counterObject[character] = 1);
}
console.log(counterObject);

// Arrow functions
// function square(x) {
//   return x * x;
// }

// in Arrow function if you have one line, you can ommit return keyword and curly braces
// but, if you have curly braces, make sure to return otherwise, you will get undefined
// const square = (x) => x * x;
// console.log(square(4));