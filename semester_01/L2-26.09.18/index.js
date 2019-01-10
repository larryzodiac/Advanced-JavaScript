// ------------------------------------------------- //
// 26/09/2018
// Evan MacHale - N00150552
// Lecture 2 - Variables & Control Flow
// ------------------------------------------------- //
console.log('Hello lecture 2');

// ------------------------------------------------- //
// Exercise 1
// Variables
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
// ------------------------------------------------- //

console.log('');
console.log('// --- Exercise 1 --- //');

// x is interperated here as global.
let z = 1
if (z === 1) {
  var x = 2;
  console.log(x);
  // Outputs 2
}
console.log(x);
// Also outputs 2

console.log('');
// Change var to let and we observe block scoping within the function.

let a = 1
if (a === 1) {
  let b = 2;
  console.log(b);
  // Outputs 2
}
console.log(x);
// ReferenceError: x is not defined

console.log('');
// Two x variables works due to scope overrides

let y = 1
if (y === 1) {
  let y = 2;
  console.log(y);
  // Outputs 2
}
console.log(y);
// Outputs 1

console.log('');
// const cannot change through re-assignment or re-declaration:
// const x = 10;
// x = 20;
// Expected output: TypeError: Assignment to constant variable.

// const with arrays is an exception that dodges the rule:
const c = [10,20,30];
c[0] = 1;
console.log(c);
// Outputs [1,20,30]
// This works as x is technically not being re-assigned.
// x = [1,2,3];
// Expected output: TypeError: Assignment to constant variable.
// This does not as x is being re-assigned.

// ------------------------------------------------- //
// Exercise 2
// Interpolation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// ------------------------------------------------- //

console.log('');
console.log('// --- Exercise 2 --- //');

// Interpolation in ES6 using ``
let myName = 'Evan';
let myProvince = 'Leinster';
console.log(`My name is ${myName}. I live in ${myProvince}.`);

console.log('');

// ------------------------------------------------- //
// Exercise 3
// Control Flow
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy
// ------------------------------------------------- //

console.log('');
console.log('// --- Exercise 3 --- //');

// Common `if else` flow example:
let isNightTime = true;
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

console.log('');
// ES6 introduces the `?` ternary operator and `:` colon, allowing us to refractor our code:
let isNightTimeRefractored = false;
isNightTimeRefractored ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

// ------------------------------------------------- //
// Exercise 4
// Hoisting
// https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
// ------------------------------------------------- //

console.log('');
console.log('// --- Exercise 4 --- //');

// ES6 variables may be used before they are declared.
// Below example runs without error but logs undefined
console.log(d);
var d = 10;

console.log('');
// Why?
// Basically simulates this:
var e;
console.log(e);
var e = 10;
// No value placed in x before logged.

console.log('');
console.log('Un-comment this bit to get ref error');
// We must use let + const to enfore better programming.
// let + const must be defined before use.
// Below code results in a ReferenceError: x is not defined:
// console.log(f);
// let f = 10;

console.log('');
// Therefore, as we must declare variables before use, our coding practice improves:
let g =  10;
console.log(g);

// ------------------------------------------------- //
// Exercise 5
// Undefined, Null + Not Defined
// ------------------------------------------------- //

console.log('');
console.log('// --- Exercise 4 --- //');

// not defined: variables don't exist.
// undefined: variables exist, but don't have anything assigned to them.
// null: variables exist and have null assigned to them.
let h;
console.log();
// undefined

let i;
console.log(i);
// null

// console.log(j);
// ReferenceError: c is not defined
