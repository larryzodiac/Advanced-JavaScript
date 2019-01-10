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
// Anonymous Functions
// Function Declaration vs Function Expression
// Idea of functions as variables, being passed around.
// ------------------------------------------------- //

console.log('');
console.log('// --- Exercise 2 --- //');

// Declaration is a function that is bound to an identifier name.

// function given identifier of calculateTax
function calculateTax(cost) {
  const taxRate = 0.25;
  return cost * taxRate;
}
let costOfTV = 1000;
console.log(calculateTax(costOfTV));

// Expression is similar but identifier may be omitted.
// Creating an anonymous function.
// Expressions are often stored in a variable with ';' ending.
// Expressions don't have function names.

// See variable assigned function with no name.
const calculateTaxExp = function (cost) {
  const taxRate = 0.25;
  return cost * taxRate;
}
let costOfFridge = 2000;
console.log(calculateTaxExp(costOfFridge));


// ------------------------------------------------- //
// Refractoring Exercise 3
// Functions as values
// Idea of functions as variables, being passed around.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
// ------------------------------------------------- //

console.log('');
console.log('// --- Exercise 3 --- //');

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
// Both anonymous
const hypotenuseRefractored = (a,b) => {
  // Note when only one parameter, no soft brackets required
  const square = x => x * x;
  return Math.sqrt(square(a) + square(b));
}
console.log(hypotenuseRefractored(4,5));

// ------------------------------------------------- //
// Refractoring Exercise 4
// Optional & Default Parametres
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
// ------------------------------------------------- //

console.log('');
console.log('// --- Exercise 4 --- //');

// When function invoked with fewer parametres than declared
// Leftover parametres set to undefined
// You may want functions with parametres that are optional +
// may be omitted when function is invoked

// Remember truthy vs falsy values
// OR || returns left side if true, right if false
// Use this shortcut if parametres left out on invoke
// They are assigned undefined -> fasly

// function passes optional parametres:
const connect = (hostname, port, method) => {
  // Old way would have been:
  // if (hostname === undefined) hostname = "localhost";
  hostname = hostname || "localhost";
  port = port || 80;
  method = method || "GET";
}

// Default parametres simply pre-define variables during invoke if undefined.
const multiply = (a, b = 1) => {
    return a * b;
}
console.log(multiply(5,2)); // 10
console.log(multiply(5,1)); // 5
console.log(multiply(5)); // 5

// Default parametre refractoring of connect function
const connectRef = (hostname = "localhost", port = 80, method = "GET") => {}

// ------------------------------------------------- //
// Refractoring Exercise 5
// Variable-Length Argument Lists
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
// ------------------------------------------------- //

console.log('');
console.log('// --- Exercise 5 --- //');

// When more parametres passed to a function than declared, no way to refer to the parametres.
// Use 'arguments' object
// Within body of a function 'arguments' identifier refers to arguments object for that invoke.
// Arguments object is array like object we can use to access parametres passed.
// N.B, this does not apply to arrow functions.

// const sumOfArgumentss = () => {
function sumOfArguments() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(sumOfArguments(2,3,5));

// ------------------------------------------------- //
// Refractoring Exercise 6
// Rest/Spread Parametres
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// ------------------------------------------------- //

console.log('');
console.log('// --- Exercise 6 --- //');

// ES6 argument lists clean up
// Allows to represent an indefinite number of arguments as an array.
// Arguments list is a JavaScript object, not an array.
// Function's last parameter can be prefixed with ... will cause all remaining (user supplied)
// arguments to be placed within "standard" javascript array.
// Only the last parameter can be a "rest parameter".

const pizzaBuilder = (base, ...toppings) => {
  console.log(`Number of toppings: ${toppings.length}`);
  console.log(`You ordered a ${base} based pizza with the following toppings: ${toppings}`);
}
pizzaBuilder('thin', 'ham', 'chorizo', 'chicken');
