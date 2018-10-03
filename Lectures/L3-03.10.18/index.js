// ------------------------------------------------- //
// 03/10/2018
// Evan MacHale - N00150552
// Lecture 3 - Functions
// Refractoring Exercises
// ------------------------------------------------- //
console.log('Hello lecture 3');

// ------------------------------------------------- //
// Refractoring Exercise 1
// Arrow functions + ternary operators (replacing if statements)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// ------------------------------------------------- //

console.log('');
console.log('// --- Exercise 1 --- //');

// Before
const isGreaterThan = function() {
  if (numberOne > numberTwo) {
    return true;
  } else {
    return false;
  }
};

// Arrow function
// (params) => { statements }
// Ternary operator
// condition ? expr1 : expr2

// Note this version
// In the below example
// We don't even need brackets or the ternary operator
// This kind of syntax is for simple one line statements
const isGreaterThanRefractored = (numberOne, numberTwo) => numberOne > numberTwo;
//The less refractored version of the above is as follows:
const isGreaterThanLessRefractored = (numberOne, numberTwo) => {
  return (numberOne > numberTwo) ? true : false;
}
console.log(isGreaterThanRefractored(10,2));
// If there is more complexity we go back to brackets:
const stickTogether = (first, second) => {
  let f = first.toUpperCase();
  let l = second.toUpperCase();
  return f + ' ' + l;
};
console.log(stickTogether('evan','machale'));

// ------------------------------------------------- //
// Refractoring Exercise 2
// Functions as values
// Idea of functions as variables, being passed around.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
// ------------------------------------------------- //

console.log('');
console.log('// --- Exercise 2 --- //');

// Anonymous functions
// setTimeOut
// Anonymous function, no name to polute the namespace.
// If named, it appears everywhere in my programme.

// functions as values
// Another data type in JavaScript is.. function!
// Something can be a function!
// Passing functions into functions.

// Nested functions
// Before refractoring
function hypotenuse(a,b) {
  function square(x) {
    return x * x;
  }
  return Math.sqrt(square(a) + square(b));
}
console.log(hypotenuse(4,5));

// After refractoring
const hypotenuseRefractored = (a,b) => {
  // Note when only one parameter, no soft brackets required
  const square = x => x * x;
  return Math.sqrt(square(a) + square(b));
}
console.log(hypotenuseRefractored(4,5));
