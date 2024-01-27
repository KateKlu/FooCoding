'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for (let i = 0; i <= stopIndex - startIndex; i++) {
    numbers[i] = startIndex + i;
  }

  numbers.forEach(element => {
    if (element % 3 === 0) threeCallback(element);
    if (element % 5 === 0) fiveCallback(element);
  });
}

function sayThree(number) {
  // Replace this comment and the next line with your code
  console.log(`${number} is divisible by 3`);
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  console.log(`${number} is divisible by 5`);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
