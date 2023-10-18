// Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. 
//Again, the Math.max method is not allowed. 

const maxOfThreethat = function(x, y, z) {
    if(x > y && x > z || x > y && x === z || x === y && x > z){
        return x;
    }else if(y > x && y > z ||y > x && y === z ||y === x && y > z){
        return y;
    }else if(z > y && z >x){
        return z;
    }else {
        return (`All numbers are equal to ${x}`)
    }
}

console.log(maxOfThreethat(9,8,10))


// Define a function, as a function declaration, 
// isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(char) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let i =0; i <= vowels.length; i++){
        if(char.toLowerCase() === vowels[i]){
            return true;
        }
    }
        return false;
}
console.log(isCharAVowel('M'));


// Define a function, as a function expression, 
// sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

const sumArray = function (arr=[]){
    let sum = 0;
    arr.forEach(num => {
        sum = sum + num;
    })
    return sum;
}

console.log(sumArray([2,2,2,5]))



// Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. 
//For example, multiplyArray([2, 4, 5]);would return 40.

function multiplyArray(arrNumbers =[]) {
    let multiSum =1;
    arrNumbers.forEach(number => {
        multiSum = multiSum * number;
    })
    return multiSum;
}

console.log(multiplyArray([2,4,5]));


// Define a function, as a function expression,
// numArgs that returns the number of arguments passed to the function when called.

const numArgs = function (...arg){
    let numberOfArg =0;
    for(let i=0; i <= arg.length; i++){
        numberOfArg = i
    }
    return numberOfArg
}

console.log(numArgs(10, 13, 95,'abdul', 'Chicago'));