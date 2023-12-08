// function maxOfTwo(nrOne, NrTwo) {
//     return (nrOne > NrTwo) ? nrOne : NrTwo;

//     // if (nrOne > NrTwo) {
//     //     return nrOne
//     // }else{
//     //     return nrTwo 
//     // }

// // if (nrOne > NrTwo) return nrOne
//     //  return nrTwo 


//     // console.log(Math.max(nrOne, NrTwo))


// }

const maxOfTwo = (nrOne, NrTwo) => nrOne > NrTwo ? nrOne : NrTwo

console.log(maxOfTwo(2, 4));
console.log(maxOfTwo(8, 5));




function reverseString(word){
    let newStr = '';
       
    for (let i = word.length - 1; i >= 0; i--) {
        newStr += word[i]
    }

    return newStr
}

console.log(reverseString('hello'));



function fizzBuzz(num) {
    if (typeof(num) !== 'number') return 'not a number'
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
    if (num % 3 === 0) return 'Fizz'
    if (num % 5 === 0) return 'Buzz'
    return num
}

console.log(fizzBuzz('11')) 