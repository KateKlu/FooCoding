//1. Write a console.log statement saying "Hello World!" for each language that you know.

console.log('Task 1');
console.log('Hello world!'); //english
console.log('Привет мир!'); //russian
console.log('Hej världen!'); //swedish
console.log('Привіт світ!'); //ukrainian

// 2. Consider the following code:

console.log('Task 2');
console.log("I'm awesome");

// 3. Declare a variable x and initialize it with an integer, using these exact steps:

console.log('Task 3');
let x;
console.log("the value of my variable x will be: undefined"); 
console.log(`the value of my variable x is ${x}`);
x = 5;
console.log("the value of my variable x will be: 5"); 
console.log(`the value of my variable x is ${x}`);

// 4. Declare a variable y and assign a string to it.

console.log('Task 4');
let y;
console.log("the value of my string will be: undefined");
console.log(`the value of my string is ${y}`);
y = 'Hello world';
console.log("the value of my string will be: Hello world");
console.log(`the value of my string is ${y}`);

// 5. How do you round the number 7.25, to the nearest integer (i.e., whole number)?

console.log('Task 5');
const z = 7.25;
console.log(`z=${z}`);
const a = Math.round(z);
console.log(`a=${a}`);
let b;
(z > a) ? b = z : b = a;
console.log(`b=${b}`);

// 6. Arrays

console.log('Task 6');
let animals = [];
console.log("the value of my array will be: empty array");
console.log(animals);
let myFavoriteAnimals = ['cat', 'raccoon', 'lemur'];
console.log(`My favorite animals are ${myFavoriteAnimals}`);
myFavoriteAnimals.push('baby pig');
console.log(myFavoriteAnimals);

// 7. More strings

console.log('Task 7');
let myString = "this is a test";
console.log(myString);
console.log(`The length of myString is ${myString.length}`);

// 8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.

console.log('Task 8');
let var1 = 5;
let var2 = 'hello';
let var3 = true;
let var4 = var1 + 7;

console.log(`The value of my variable var1 is: ${var1}`);
console.log(`The value of my variable var2 is: ${var2}`);
console.log(`The value of my variable var3 is: ${var3}`);
console.log(`The value of my variable var4 is: ${var4}`);

console.log("the type of my variable var1 will be: number");
console.log(`the type of my variable var1 is: ${typeof(var1)}`);
console.log("the type of my variable var2 will be: string");
console.log(`the type of my variable var2 is: ${typeof(var2)}`);
console.log("the type of my variable var3 will be: boolean");
console.log(`the type of my variable var3 is: ${typeof(var3)}`);
console.log("the type of my variable var4 will be: number");
console.log(`the type of my variable var4 is: ${typeof(var4)}`);

console.log('If we compare type of var1 and var4 we will get such result:');
(typeof(var1) === typeof(var4)) ? console.log('SAME TYPE') : console.log('DIFFERENT TYPES');
console.log('If we compare type of var2 and var3 we will get such result:');
(typeof(var2) === typeof(var3)) ? console.log('SAME TYPE') : console.log('DIFFERENT TYPES');

// 9. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?

console.log('Task 9');
let x2 = 7;
x2 = x2 % 3;
console.log('the new value of x2 will be: 1');
console.log(`the new value of x2 is: ${x2}`);

let q = 11;
let w = 36;
let e = 43;

q = q % 2;
w = w % 5;
e = e % 7;

console.log('the new values of q, w and e will be also 1');
console.log(`q = ${q}, w = ${w}, e = ${e}`);

// 10. Write a program to answer the following questions:

console.log('Task 10');
console.log("It's possible to store data with types in one array");
let myArray = ['1', 2, true];
myArray.forEach((element, i) => {
    console.log(`type of ${i + 1} element is ${typeof(element)}`)
});

console.log("It's possible to write code to compare infinities and it works");
console.log("If we want to compare 6/0 === 10/0 we will get such result:");
(6/0 === 10/0) ? console.log('they are equel') : console.log('they are not equel');
