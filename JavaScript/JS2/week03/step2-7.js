'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

// Function get value from variable x to it's inside variable val.
// Then function change val and nothing heppens with x. As a result x still 9

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Function get a link to the object from variable y to it's inside variable val.
// It meeans that changing val will change y
// Then function change object y throught val. As a result y become {x: 10}

// Add your explanation as a comment here
