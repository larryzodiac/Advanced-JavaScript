# Lecture 2 - Variables & Control Flow
Year 4 Advanced JavaScript Module

## Variables

See Moz://a [JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures).

A re-cap of JavaScript:

Four essential datatypes: `strings`, `numbers`, `booleans` + `null`.

`var`: scope of a variable declared with var is its current execution context, which is either the enclosing function or, for variables declared outside any function, global.

`let`: declares a block scope local variable.

`const` are block-scoped, much like variables defined using the let statement. The value of a constant cannot change through re-assignment, and it can't be redeclared.

See Moz://a [var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var), [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) + [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const).

`var` is seen here as global:

```
let z = 1

if (z === 1) {
  var x = 2;
  console.log(x);
  // Outputs 2
}

console.log(x);
// Also outputs 2
```

Change `var` to `let`:

`x` now has a block scope and is only accessible in the `if statement`.

```
let z = 1

if (z === 1) {
  let x = 2;
  console.log(x);
  // Outputs 2
}

console.log(x);
// ReferenceError: x is not defined
```

Two variables named `x` is okay, as the local block scope overrides the outer scope.

```
let x = 1

if (x === 1) {
  let x = 2;
  console.log(x);
  // Outputs 2
}

console.log(x);
// Outputs 1
```

`const` as mentioned cannot change through re-assignment or re-declaration:

```
const x = 10;

x = 20;
// Expected output: TypeError: Assignment to constant variable.
```

`const` with `arrays` is an exception that dodges the rule:

```
const x = [10,20,30];

x[0] = 1;
// Outputs [1,20,30]
// This works as x is technically not being re-assigned.

x = [1,2,3];
// Expected output: TypeError: Assignment to constant variable.
// This does not as x is being re-assigned.
```

## String Interpolation

With ES6 we may make substitutions to the syntax we use to embed variables within strings:

However, embeded variables must reside within a ` `` ` quotation mark.

```
let myName = 'Evan';
let myProvince = 'Leinster';
console.log(`My name is ${myName}. I live in ${myProvince}.`);
```

See Moz://a [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

## Control Flow

We know that `if else` statements make binary decisions and execute different code based on conditions.

All conditions are evaluated to be __truthy__ or __falsy__; falsy values being:

- false
- 0 and -0
- "" and '' (empty strings)
- null
- undefined
- NaN (Not a Number)
- document.all (something you will rarely encounter)

See Moz://a [](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).

We may also use `switch` statements.

A common `if else` flow example:

```
let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}
```

ES6 introduces the `?` ternary operator and `:` colon, allowing us to refractor our code:

```
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
```

## Variable Hoisting

See Moz://a [](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting).

ES6 introduces hoisting; variables may be used before they are declared.

Variable declaration is said to be hoisted to the top of the current scope, i.e the top of a function or if outside, to the top of the script.

The below example runs without error _but_ logs `undefined`:

```
console.log(x);
var x = 10;
```

Why?

After a variable declaration has been hoisted. the code simulates this:

```
var x;
console.log(x);
var x = 10;
```

No value has been placed in `x` before it is logged.

With ES6 it is now standard to use both `let` and `const` to enforce better coding practices.

Both these variables __must be declared before use__.

The below code results in a `ReferenceError: x is not defined`:

```
console.log(x);
let x = 10;
```

Therefore, as we __must__ declare variables before use, our coding practice improves:

```
let x =  10;
console.log(x);
```

## Undefined, Null + Not Defined

`not defined`: variables don't exist.

`undefined`: variables exist, but don't have anything assigned to them.

`null`: variables exist and have null assigned to them.

```
let a;
console.log();
// undefined

let b;
console.log(b);
// null

console.log(c);
// ReferenceError: c is not defined
```
