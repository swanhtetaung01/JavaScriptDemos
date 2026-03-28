//`map()`: Transforms each element and returns a new array

function double(num) {
    console.log(num);
    return num * 2;
}

let numbers = [1, 2, 3, 4, 5];
let doubleNumbers = numbers.map(double);
console.log(`Double numbers`, doubleNumbers);

let doubledoubleNumbers = doubleNumbers.map(function(doubleNumbers) {
    return doubleNumbers * 2;
});
console.log(`Double double numbers`, doubledoubleNumbers);

let arrowdoubleNumbers = numbers.map((numbers) => numbers * 2);
console.log(`Arrow function double numbers`, arrowdoubleNumbers);

//`filter()`: Returns a new array with elements that pass a condition

const evenNumbers = numbers.filter(numbers => numbers % 2 === 0);
console.log(evenNumbers);

//`reduce()`: Reduces the arary to a single value

let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);

//`forEach()`: Executes a function for each array element

numbers.forEach(numbers => console.log("forEach() demo:", numbers));

//`find()`: Returns the element that satisfies a condition

let target = numbers.find(numbers => numbers % 2 === 0);
console.log(`find() demo`, target);

//`some()': Checks if at least one element passes a test

let hasNegative = [-1, 1, 2, 3, 4, 5].some(num => num < 0);
console.log(`some() demo hasNeg: `, hasNegative);

//`every()`: Checks if all elements pass a test

let allPositive = numbers.every(num => num >= 0);
let allNegative = numbers.every(num => num < 0);
console.log("every()");
console.log(`allPos: `, allPositive);
console.log(`allNeg: `, allNegative);

//`concat()`: Merges arrays into a new array

let moreNumbers = [6, 7, 8, 9];
let newArray = numbers.concat(moreNumbers);
console.log("concat()");
console.log(newArray);

//`silce()`: Returns a portion of an array 

let slicedNum = numbers.slice(1, 4);
console.log("slice()");
console.log(slicedNum);

//`splice()`: Modifies the array by removing/replacing elements

let fruits = ["Apple", "Banana", "Orange", "Coconut"];
fruits.splice(2, 1, "Mango");
console.log(fruits);

//`join()`: Joins all elements into a string

let allFruits = fruits.join(", ");
console.log(allFruits);

//`reverse()`: Reverses the order of the elements

let reverseNumbers = numbers.reverse();
console.log(reverseNumbers);

//`sort()`: Sorts the elements of an array

let unsortedNumbers = [4, 2, 6, 21, 67, 16];
let sortedNumbers = unsortedNumbers.sort((a, b) => a-b);
console.log(sortedNumbers);