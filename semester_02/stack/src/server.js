// https://expressjs.com/en/starter/hello-world.html
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// node server.js
// RUN nodemon server.js
// Need to differentiate between react-router and express requests
// React will be /users/
// Express requests will be /api/users/
// Need to draw line between the two -> /api/
