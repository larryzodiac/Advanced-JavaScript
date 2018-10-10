// ------------------------------------------------- //
// 10/10/2018
// Evan MacHale - N00150552
// Lecture 4 - Iterators
//
// ------------------------------------------------- //
console.log('Hello lecture 3');

// ------------------------------------------------- //
// Iterator Exercise 1
// forEach function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function
// ------------------------------------------------- //

console.log('');
console.log('// --- Exercise 1 --- //');


const students = ['Cillian', 'Edel', 'Evan'];
function arrayProcessor(element, i, arr) {
  console.log(element);
}
// Note no `()` at end of `arrayProcessor`
// Function passed to function
// JavaScript has 'first class citizens'
// https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function
students.forEach(arrayProcessor);

// Can look at the above as a callback function:
console.log('');
students.forEach(function arrayProcessor(element, i, arr) {
  console.log(element.toUpperCase());
});

// ------------------------------------------------- //
// Refractoring Iterators Exercise 2
// forEach Function Activity
// ------------------------------------------------- //

console.log('');
console.log('// --- Exercise 2 --- //');

const books = ['Thinking in JS', 'JS Patters', 'ES6 and Beyond'];
books.forEach(function(book){console.log(`I need to read ${book}`);});
//Refractoring
console.log('');
books.forEach(book => console.log(`I need to read ${book}`))

// ------------------------------------------------- //
// Refractoring Iterators Exercise 3
// every Function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// ------------------------------------------------- //

console.log('');
console.log('// --- Exercise 3 --- //');

// Classic for loop
const results = [40, 50, 50, 60];
let pass = true;
for (let i = 0; i < results.length; i++) {
  if (results[i] < 40) {
    pass = false;
    break;
  }
}
console.log(pass ? 'Everyone passed' : 'Someone failed');

// Refractoring w/ Iterators
// The every() method tests whether all elements in the array pass the test implemented by the provided function.
function passed(results) {
  return results >= 40 ? true : false;
}
const passRefractored = results.every(passed);
console.log(passRefractored ? 'Everyone passed' : 'Someone failed');

// Cleaned up further
const passRefractoredPlus = results.every(results => results >= 40)
console.log(passRefractoredPlus ? 'Everyone passed' : 'Someone failed');

// ------------------------------------------------- //
// Iterators Exercise 4
// every Function Activity
// ------------------------------------------------- //

console.log('');
console.log('// --- Exercise 4 --- //');

const nums = [5, 10 ,15, 30];
const nums2 = [6, 10, 15, 30];

// Pointing one function to another
// 'every' points to anonymous function with number parametre
// Callback functions
const div5 = nums.every(number => number / 5);
console.log(div5 ? 'Array contents are divisible by 5' : 'Array contents are not divisible by 5');

// Working w/ muiltiple arrays
// Stricter check
const div5m = num => num % 5 === 0;
console.log(nums.every(div5m));
console.log(nums2.every(div5m));

// ------------------------------------------------- //
// Iterators Exercise 5
// some Function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// ------------------------------------------------- //

console.log('');
console.log('// --- Exercise 5 --- //');

// Tests whether at least one element in the array passes the test implemented by the provided function.
// Alternative to the strictness of every
const marks = [20, 30, 35, 60];
const passTest = num => num >= 40;
marks.some(passTest);
console.log(marks.some(passTest));

// ------------------------------------------------- //
// Iterators Exercise 6
// some Function Activity
// ------------------------------------------------- //

console.log('');
console.log('// --- Exercise 6 --- //');

const names = ['Evan', 'Jamie', 'Ross'];
const names2 = ['Jo', 'Jill', 'Alex'];

const char5 = name => name.length >= 5;
console.log(names.some(char5));
console.log(names2.some(char5));

// ------------------------------------------------- //
// Iterators Exercise 7
// map Function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// ------------------------------------------------- //

console.log('');
console.log('// --- Exercise 7 --- //');

const prices = [200, 50, 100, 60];
// Most common iterator
// Take the array + makes a completely new array
const vatOfPrices = prices.map(vat);
function vat(price) {
  const vat = .23;
  price = vat * price;
  return price;
}
console.log(vatOfPrices);

// ------------------------------------------------- //
// Iterators Exercise 8
// map Function Activity
// ------------------------------------------------- //

console.log('');
console.log('// --- Exercise 8 --- //');

// Take an array convert to a new different type of array
const deserts = ['chocolate', 'red velvet', 'custard'];

const capitalise = deserts.map(desert => desert.charAt(0).toUpperCase() + desert.slice(1));
console.log(capitalise);

// ------------------------------------------------- //
// Iterators Exercise 9
// filter Function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// ------------------------------------------------- //

console.log('');
console.log('// --- Exercise 9 --- //');

// Creates new array with all elements that pass the test implemented by the provided function.
const posNeg = [1, -1, -2, 3, 5 ,-7];
const isPos = posNeg.filter(num => num >= 0);
console.log(isPos);

// ------------------------------------------------- //
// Iterators Exercise 10
// reduce Function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// ------------------------------------------------- //

console.log('');
console.log('// --- Exercise 10 --- //');

// Executes a reducer function (that you provide) on each member of the array resulting in a single output value.
// All previous functions have take one parametre (being a value in the array) but this acts differently
// Taking multiple values + doing something to them + then reducing to a single value.
const costs = [100, 200, 300];
const reducer = function(sum, val) {
  //
}
const reducePrice = costs.reduce(reducer);
