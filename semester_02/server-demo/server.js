// https://expressjs.com/en/starter/hello-world.html
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!')); // localhost:3000

app.get('/api/users', (req, res) => res.send({id:1, name:'John', age:40})); // localhost:3000/api/users

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

/*
  Express MongoDB integration
  https://expressjs.com/en/guide/database-integration.html#mongodb
*/

MongoClient.connect('mongodb://localhost:27017/REACT_CA2', function (err, client) {
  if (err) throw err

  var db = client.db('REACT_CA2')

  db.collection('Users').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})

// How to get React to render??

app.get('/api/users', (req, res) => {
  MongoClient.connect('mongodb://localhost:27017/REACT_CA2', function (err, client) {
    if (err) throw err

    var db = client.db('REACT_CA2') // collection

    // Document
    db.collection('Users').find().toArray(function (err, result) {
      if (err) throw err

      res.send(result);
    })
  })
});

/*
  Then in React

  componentDidMount() {
    axios.get('https://localhost:3000/api/users')
    .then( response => {
      ...
    })
  }
*/

/* ///////////////////////////////////////////// NOTES */

/*
  step 1:
  new project folder + npm init
  npm i express

  step 2:
  create new server file

  step 3:
  open node.js command line
  nodemon server.js

  step 4:
  open browser at localhost:3000
  or localhost:3000/api/users
*/

/*
  Moving forward:
  Need to differentiate between react-router and express requests
  React pages will be /users/
  Express requests will be /api/users/
  Need to draw line between the two -> /api/
*/

/*
  We want to get to a stage where express serves our React code
  For now, two seperate folders -> server + client
*/

/*
  The following are 95% of the MongoDB commands we'll ever need
  db.collection.insertOne({name:'joe'});
  db.collection.find();
  // find the record that matches 'joe' + set the record age to 7
  db.collection.updateOne({name:'joe'}, {$set: {age:7}});
  db.collection.deleteOne({name:'joe'});
*/

/*
  Button with onClick
  handleClick with axios request -> delete
  axios DELETE handles URL -> knows users/id -> component holds data from state -> CRUD verbs
  Express handles URL ->
*/

// https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#create-database-directory

/*
  Setting up MongoDB -> install community version
  Create new folder to store database -> data/db (in this case in repo)
  Start MongoDB -> C:\>"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="N:\path\to\repo\data\db"
  listening...
*/

/*
  Go to Robo 3T
  Create stuff.. I missed that part of class
*/

// https://expressjs.com/en/guide/database-integration.html#mongodb

/*
  npm i mongodb
  Check version in package.json
  Then use version from express database intergration link above
*/
