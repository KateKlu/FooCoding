'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  return arr.flat(Infinity);
}

function flattenArray3d(arr) {
  const newArr = [];

  arr.forEach(element => {
    if (Array.isArray(element)) {
      newArr.push(...flattenArray3d(element));
    } else {
      newArr.push(element);
    }
  });

  return newArr;
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
