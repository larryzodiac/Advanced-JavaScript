// ------------------------------------------------- //
// 17/10/2018
// Evan MacHale - N00150552
// Lecture 5 - Objects
// ------------------------------------------------- //
console.log('Hello lecture 5');

// ------------------------------------------------- //
// Exercise 1
// ------------------------------------------------- //

console.log('');
console.log('// --- Exercise 1 --- //');

// ------------------------------------------------- //
// Exercise ...
// ------------------------------------------------- //

console.log('');
console.log('// --- API Exercise --- //');

const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://xkcd.com/603/info.0.json')
  .then(function (response) {
    // handle success
    console.log(response.data);
    console.log('');
    console.log(`This piece was published: ${response.data.day}/${response.data.month}/${response.data.year}`);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
