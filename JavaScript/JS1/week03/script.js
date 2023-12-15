'use strict';

// 1. Strings!
console.log('Task 1. Strings');

let myString = "hello,this,is,a,difficult,to,read,sentence";

console.log(`My string is: ${myString}`);
console.log(`Length of my string is: ${myString.length}`);

myString = myString.split(',').join(' ');

console.log(`My new string is: ${myString}`);

// 2. Arrays!
console.log('Task 2. Arrays');

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push('turtle');
console.log(`Let's see the new array: ${favoriteAnimals}`);
favoriteAnimals.splice(1, 0, 'meerkat');
console.log('The new array has to be like this: [blowfish, meerkat, capricorn, giraffe, turtle]')
console.log(`Let's see the new array: ${favoriteAnimals}`);
console.log(`The array has a length of: ${favoriteAnimals.length}`)
favoriteAnimals.splice(3, 1);
console.log(`Let's see the new array: ${favoriteAnimals}`);
let elementIndex = favoriteAnimals.indexOf('meerkat');
console.log(`The item you are looking for is at index: ${elementIndex}`);
favoriteAnimals.splice(elementIndex, 1);

//This is an alternative solution 1
// let elementIndex = favoriteAnimals.findIndex((element) => element === 'meerkat');
// console.log(`The item you are looking for is at index: ${elementIndex}`)
// favoriteAnimals.splice(elementIndex, 1);

//This is an alternative solution 2
// favoriteAnimals.forEach((element,i) => 
// {if(element === 'meerkat') {
//     console.log(`The item you are looking for is at index: ${i}`)
//     favoriteAnimals.splice(i, 1);
// }})

console.log(`Let's see the new array: ${favoriteAnimals}`);

// More JavaScript 🎉
console.log('More JavaScript 🎉');
// Create a function that takes 3 arguments and returns the sum of the these arguments.
console.log('Task 1. Function that returns the sum of 3 arguments')

function sums3numbers(a,b,c){
    if (typeof(a) === 'number' && typeof(b) === 'number' && typeof(c) === 'number'){
        return `The sum of your numbers is ${a + b + c}`;
    }else{
        return 'All arguments have to be numbers. Please enter 3 numbers.'
    }
}

console.log(sums3numbers(2,3,4));
console.log(sums3numbers(2,'fvjbh',4));

// Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
console.log('Task 2. Function colorCar')
const colorCar = (color) => {return `a ${color} car`};
console.log(colorCar('red'));

// Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

console.log('Task 3. Function for printing array')
function printObject(item) {
for (let key in item) 
if (typeof(item[key]) !== 'object') {
    console.log(`${key} - ${item[key]}`)
}else{
    console.log(`${key}:`);
    printObject(item[key])
}
}

console.log('For one level array');
const student = {
    name: 'Lena',
    surname: 'Olsson',
    age: 20
}

printObject(student);

console.log('For multi level array');
const marks = {
    'student name': 'Lena',
    'student surname': 'Olsson',
    subjects: {
        math: 'A',
        history: 'B',
        literature: 'A',
        languages: {
            English: 'B',
            Swedish: 'A'
        }
    }
}

printObject(marks); 

// Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
console.log('Task 4. Function vehicleType');
function vehicleType(color,code){
    switch(code){
        case 1:
            console.log(`a ${color} car`);
            break;
        case 2:
            console.log(`a ${color} motorbike`);
            break;
        default: 
            console.log('Choose only one of this numbers "1" or "2" for vehicle type');
    }
}

vehicleType('blue',1);
vehicleType('red',2);
vehicleType('red',45);

// Can you write the following without the if statement, but with just as a single line with console.log(...);?
console.log('Task 5. To write in one line');

(3 === 3) ? console.log("yes") : console.log("no");

// Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
console.log('Task 6. Function vehicle');
function vehicle(color,code,age){
    if (age < 0 || typeof(age) !== 'number'){
        console.log('Age has to be a number >= 0');
    }else{
        let message = `a ${color} `;
        if (age === 0) {
            message += 'new';
        }else{
            message += 'used'
        }
                    
        switch(code){
            case 1:
               console.log(`${message} car`);
               break;
            case 2:
                console.log(`${message} motorbike`);
                break;
            default: 
                console.log('Choose "1" or "2" for vehicle type');
        }
    }
}

vehicle('blue',1,5);
vehicle('red',2,0);
//with incorrect age value
vehicle('red',2,-5);
vehicle('red',2,'5');
//with incorrect code value
vehicle('red',7,5);
vehicle('red',"2",1);

// Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
// How do you get the third element from that list?
console.log('Task 7-8. List of vehicles and 3rd element')
const vehicles = ["motorbike", "caravan", "bike", "car"];
console.log('Vehicle list:');
vehicles.forEach((element,i) => console.log(`${i + 1}. ${element}`));
console.log(`The third element from the list is '${vehicles[2]}'`);

// Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
console.log('Task 9. Improved function vehicle');
function vehicleNew(color,code,age){
    if (age < 0 || typeof(age) !== 'number'){
        console.log('Age has to be a number >= 0');
    }else{        
        let message = `a ${color} `;
        if (age === 0) {
            message += 'new';
        }else{
            message += 'used'
        };

        message = (vehicles[code - 1] === undefined)
         ? `Choose number from 1 to ${vehicles.length} for vehicle type` 
         : message + ` ${vehicles[code - 1]}`;
        console.log(message)  
    }
}
    
vehicleNew('blue',1,5);
vehicleNew('red',3,0);
vehicleNew('red',5,0); //if incorrect type code

// Use the list of vehicles to write an advertisement. So that it prints something
// like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
console.log('Task 10. Advertisement')

function showAdvertisement(vehicleType){
    let message = "Amazing Joe's Garage, we service ";
    vehicleType.forEach((element,i) => {
        message += (i === vehicleType.length - 1) ? `and ${element}s.` : `${element}s, `
    });
    console.log(message);
}

showAdvertisement(vehicles);

// What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?

console.log('Task 11. Advertisement with more vehicle types')
const vehicles2 = ["motorbike", "caravan", "bike", "car", "scooter", "truck"];
showAdvertisement(vehicles2);

// Create an empty object.

console.log('Task 12. Empty object')
let myObject = {};
console.log(`object value is ${myObject}`);

// Create an object that contains the teachers that you have had so far for the different modules.
console.log('Task 13. Object teachers')

let teachers = {
    modul1: ['Tommy','Seif'],
    modul2: 'Sahin'
};

printObject(teachers);

// Add a property to the object you just created that contains the languages that they have taught you.
console.log('Task 14. Add propperty to the object')

teachers.languages = ['js', 'html', 'css'];
printObject(teachers);

// Write some code to test two arrays for equality using == and ===. Test the following:
console.log('Task 15. Comparing arrays');
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

function compareArrays(ar1,ar2){     //for equality using ===
    let result = ar1.length === ar2.length;
    if (result) {
        for (let i=0; i < ar1.length; i++){
            if (ar1[i] !== ar2[i]){
                result = false;
                break;
            }
        }
    }
    return result;
}

console.log(compareArrays(x,y));
console.log(compareArrays(x,z));

// What do you think will happen with x == y, x === y and z == y and z == x? Prove it!
console.log("If we change === to == when we compare array length it will not impact the result")
console.log("But if we change === to == when we compare value of array elements we will give different result if elements have same value but different type")

function compareArrays2(ar1,ar2){       //for equality using ==
    let result = ar1.length == ar2.length;
    if (result) {
        for (let i=0; i < ar1.length; i++){
            if (ar1[i] != ar2[i]){
                result = false;
                break;
            }
        }
    }
    return result;
}

let q = [1, '2', 3]; // 2nd element still has the same value but it's string instead of number
console.log(compareArrays(x,q));
console.log(compareArrays2(x,q)); //we got true here cos we compared only values of elements but not their types


// Take a look at the following code:
console.log('Task 16. Objects');

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;  
// Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
console.log("o3 isn't a copy of o2. It otly contain a link to values of o2.");
console.log("It means that changing values in o2 wil change values in o3");
console.log("Changing o1 will not change o3. These arrays have no any connections");
console.log("Let's check this");
console.log('o1:');
console.log(o1);
console.log('o2:');
console.log(o2);
console.log('o3:');
console.log(o3);
o2.foo = 'cat';
console.log('o2:');
console.log(o2);
console.log('o3:');
console.log(o3);
o1.foo = 'cafe';
console.log('o1:');
console.log(o1);
console.log('o2:');
console.log(o2);
console.log('o3:');
console.log(o3);

// Does the order that you assign (o3 = o2 or o2 = o3) matter?
console.log("Order is very important in this case.")
console.log("o3 = o2. In this order we already have declarated variable which contain array.");
console.log("After o3 = o2 in o3 we store like a link to values of o2. So now o3 looks like array and changing values in o3 we will also change o2");
console.log("o2 = o3. In this order we already have declarated variable which contain array o2 and another variable o3 which is undefined");
console.log("So if we do o2 = o3 we will get 2variables which are undefined. Let's check:");
let o02 = { foo: "bar" }; //I change a litle names of wariables not to doblicate them
let o03; 
o02 = o03;
console.log(`o2: ${o02}`); 

// What does the following code return? (And why?)
console.log('Task 17. Typeof');
console.log("I think it will return us 'string'. typeof bar return us 'number'. Then typeof 'number' will give us 'string'")
let bar = '42';
console.log("let's check a result");
console.log(typeof typeof bar);
// ‘Coerce' means to try to change - so coercing var x = '6' to number means
//  trying to change the type to number temporarily.

console.log("Even if we change type of variable final resalt will be the same");
console.log("let's check a result");
let bar2 = '6';
let bar3 = true;
console.log(typeof typeof bar2);
console.log(typeof typeof bar3);
