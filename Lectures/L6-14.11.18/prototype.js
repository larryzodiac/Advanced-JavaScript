// ------------------------------------------------- //
// 11/11/2018
// Evan MacHale - N00150552
// Lecture 6 - prototype example found in index.js exercise 1
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype
// ------------------------------------------------- //

// Inspecting prototype behaviour in the browser -> see index.html.

console.log('');
console.log('// --- Prototypes --- //');
console.log('');

// Prototype based language -> every object in JS has a special hidden proprety
// that points somewhere else, plus gets all that object has (inheritence).
// Stored in browsers __proto__
// Never change it person.__protp___ -> bado

// Constructor.
function Person(name, age) {
  this.name = name;
  this.age = age;
  // Method
  this.hi = function() {
    console.log(`Hi ${this.name}`);
  }
}

// Prototype
Person.prototype.hello = function() {
  console.log(`Hello ${this.name} is nearly 22 but actually ${this.age}`);
}

// Invoke + instanstiate.
let person = new Person('Evan', 21.90)
// Calls
person.hi();
person.hello();

// ------------------------------------------------- //

// Why is person.hello() better?
// Instead of storing in the object, stores reference
// Every object created will have hi(), but it's the same value.
// Name, age is different.
// Therefore inefficient to store hi() in all objects
// Just store a reference if they're all using the same value.
// Store in a prototype.

// Don't put your methods in the constructor -> hang them off in prototypes.
// Type `person_` in the console.
// hi() gets put into all created objects.
// But hello() isn't there, more efficient.
// Type `person.__proto__` in console.

console.log(person);
console.log(person.__proto__);

// Prototype chain
// Everything comes from Object.
// i.e our constructor is built on Object, at top of the chain.
// Prototypes have all the propreties of object as well.
// You can find built in things like 'toString()' inside prototypes.
