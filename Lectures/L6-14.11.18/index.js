// ------------------------------------------------- //
// 11/11/2018
// Evan MacHale - N00150552
// Lecture 6
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// ------------------------------------------------- //
console.log('Hello lecture 6');

// How do we do OOP in JavaScript?
// Don't want to have to repeat loads of persons.
// Watch out -> D.R.Y -> Don't repeat yourself.

// let person = {name: Evan, age:22}; // all the way to person1000.

// Concepts akin to Java.
// But JavaScript is not object orientated, but uses objects.
// Funny, wasn't in at the start -> added in fake classes.
// Introduce classes -> create objects from classes
// OLOO or OOP, split camp.
// We need to use OOP.

// ------------------------------------------------- //
// Exercise 1
// ------------------------------------------------- //

console.log('');
console.log('// --- Exercise 1 --- //');

// Why? -> Re-using objects (D.R.Y)
// Functions that belong to objects -> known as methods
// Can write functions as propreties of an object
// Andrew mentioned this example, we'll come back to $this later.
let person = {
  name: 'Evan',
  age: 22,
  bio: function() {
    console.log(`${this.name} is ${this.age} years old`);
  }
}
person.bio();
// We're basically going to use this stuff to go back to what we did in Java 2nd year.

// BUT
// In JavaScript, there are no classes fundamentaly -> need to fake it
// ES6 -> devs introduce classes for the faking
// In existing JS -> objects + prototypes used for OOP.
// We'll be implementing super/sub classes.

// We have objects ^
// People did fake classes -> factory
function createNewPerson(name, age) {
  let obj = {};
  obj.name = name;
  obj.age = age;
  return obj;
}
let otherPerson = createNewPerson('Evan', 22);
console.log(otherPerson.name);

// Then NEW keyword was introduced to our factory pattern.
// Had to create + add stuff to object
// Constructor function with cap P
// Most common way.
function Person(name, age) {
  this.name = name;
  this.age = age;
}
// New keyword, like java, invokes constructor
let otherPerson2 = new Person('Evan', 22)
console.log(otherPerson2.name);

// Prototype based language -> every object in JS has a special hidden proprety
// that points somewhere else, plus gets all that object has (inheritence).
// Stored in browsers __proto__
// Never change it person.__protp___ -> bado

// Go to prototype.js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.hi = function() {
    console.log(`Hi ${this.name}`);
  }
}
Person.prototype.hello = function() {
  console.log(`Hello ${this.name}`);
}
let otherPerson3 = new Person('Evan', 22)
otherPerson3.hi();
otherPerson3.hello();

// ------------------------------------------------- //
// Exercise 2
// ------------------------------------------------- //

console.log('');
console.log('// --- Exercise 2 --- //');

// Prototype chain system (built-in inheritence).
// All JavaScript is based of Object.
// __proto__ points to parent object.
// ------------------------------------------------- //
//
//      Object
//         \
//          \  proto
//           \
//          Person
//           /  \
//   proto  /    \  proto
//         /      \
//     Person1   Person2
//
// ------------------------------------------------- //
// Constructor.
function PersonAgain(name, age) {
  this.name = name;
  this.age = age;
}
// Prototype method
PersonAgain.prototype.hello = function() {
  console.log(`Hello ${this.name} is nearly 22 but actually ${this.age}`);
}
// Invoke + instanstiate.
let person4 = new PersonAgain('Evan', 21.90)
person4.hello();

// ------------------------------------------------- //
// Exercise 3
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
// ------------------------------------------------- //

console.log('');
console.log('// --- Exercise 3 --- //');

// Inheritence w/ prototype chain
// Class-ical inheritence.
// Similar to OOP using classes.
// What if we want different 'persons '
// Each object has a prototype that points to it's parent.

// ... Animal exercise
function Animal(name) {
  this.name = name;
}

Animal.prototype.print = function() {
  console.log(`${this.name} is an animal`);
}

const dog = new Animal('lassie');

// ------------------------------------------------- //
// Exercise 4
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// ------------------------------------------------- //

console.log('');
console.log('// --- Exercise 4 --- //');

// Instances inherit from a blueprint class
// Three types:

// 1. Prototypal inheritence (JavaScript purists -> OLOO)
// -> no new keyword, no constructor -> we create prototype(real thing with vals in it) OBJECT (NOT __proto__)
// + copies of it with Object.create, to point __proto__ to parent.
// const Parent = {name: ..., ...}
// const child = Object.create(parent);

// 1. and 2. do the same thing just with different coding style
// Under the hood(diagram) would be the same.

// 2. Classical inheritence that looks like java (OOP) BUT doesn't use classes
// -> we create a function constructor(blueprint) + copy using new keyword.

// 3. ES6 class syntax
// But doesn't really use classes behind the scenes -> the same under the hood
// This is syntax sugar -> easier to look at
class AnimalAgain {
  constructor(name) {
    this.name = name;
  }
  print() {
    console.log(`${this.name} is an animal`);
  }
}

const cat = new AnimalAgain('Garfield');

class Reptile extends AnimalAgain {
  constructor(name, scales) {
    super(name);
    this.scales = scales;
  }
}

const croc = new Reptile('snappy', 'very scaley');
croc.print();

// ------------------------------------------------- //

class User {
  constructor(name, password, permissions) {
    this.name = name;
    this.password = password;
    this.permissions = permissions;
  }
}

const user1 = new User(`Evan`, `monkey123`, `all`);
const user2 = new User(`Jane`, `505050`, `read`);

class Admin extends User {
  constructor(name, password, permissions, salary) {
    super(name, password, permissions);
    this.salary = salary;
  }
}

const admin1 = new Admin(`Joe`, `3445`, `all`, 40000);

// ------------------------------------------------- //
//
//      Object
//         \
//          \  proto^
//           \
//          user -> name, password, permissions
//             \
//              \  proto^
//               \
//              Admin -> salary
//
// ------------------------------------------------- //
