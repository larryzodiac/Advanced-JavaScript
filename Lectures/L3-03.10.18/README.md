# Lecture 3 - Functions
Year 4 Advanced JavaScript Module

## Arrow Functions + Ternary Operators Exercises

See Moz://a resource [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) and [Ternary Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator).

With ES6 we can implement `refractoring` techniques to older syntax.

```
Refractoring: the process of changing code without changing its external behaviour.
It is typically done to make code more: readable, maintainable, extensible.
```

We refractor using ES6 syntax:

```
Arrow functions:
(params) => { statements }
```

```
Ternary operators:
condition ? expr1 : expr2
```

Quintessential JavaScript `functions` and `if statements` as we know them appear as:

```
const isGreaterThan = function() {
  if (numberOne > numberTwo) {
    return true;
  } else {
    return false;
  }
};

console.log(isGreaterThan(10,2));
```

The above snippet then turns into:

```
const isGreaterThanRefractored = (numberOne, numberTwo) => {
  return (numberOne > numberTwo) ? true : false;
}
```

We may refractor further, removing brackets, resulting in:

```
const isGreaterRefractoredSingle = (numberOne, numberTwo) => numberOne > numberTwo;
```

Note that this only really applies to single statement lines of code.

If there is more complexity, we return to using brackets:

```
const stickTogether = (first, second) => {
  let f = first.toUpperCase();
  let l = second.toUpperCase();
  return f + ' ' + l;
};
```

## Anonymous functions

<!-- setTimeOut
Anonymous function, no name to polute the namespace.
If named, it appears everywhere in my programme. -->

## Functions as Values

The idea of functions as variables, being passed around.

We know in JavaScript that `objects` are datatypes.

Functions are regular objects with the additional capability of being callable.

Functions therefore are datatypes and can be assigned as values.

They may also be nested.

Remember JavaScript is _loosely typed_ and datatypes are orientated around the `key:value` principle.

See Moz://a [JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures).

The JavaScript un-refractored:

```
function hypotenuse(a,b) {
  function square(x) {
    return x * x;
  }
  return Math.sqrt(square(a) + square(b));
}

console.log(hypotenuse(4,5));
```

We can refractor by assigning our functions(anonymous) to variables:

```
const hypotenuseRefractored = (a,b) => {
  const square = x => x * x;
  return Math.sqrt(square(a) + square(b));
}
```

Note that we can remove the brackets from the nested function that holds `x` as an argument.

This is only applicable to functions with a single pass by value.

See Moz://a [Math.sqrt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)

## Default & Optional Parametres

...

## Rest/Spread Parametres

...

## Arrays

...
