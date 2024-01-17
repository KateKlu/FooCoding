"use strict";

// Program that doubles the odd numbers in an array and throws away the even numbers

function doubleOddNumbers(numbers) {
  const newNumbers = numbers
    .filter((number) => number % 2 !== 0)
    .map((number) => number * 2);
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log('Program that doubles the odd numbers in an array and throws away the even numbers');
console.log(doubleOddNumbers(myNumbers));
/*
// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};  
*/
