const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('WORKING POD - NODE-APP')
  res.send(`
    <h1>NodeJS app !!!!</h1>
    <h1>version 0.2</h1>
    <p>Try sending a request to /error and see what happens</p>
  `);
});

app.get('/error', (req, res) => {
  console.log('ERROR POD - NODE-APP')
  process.exit(1);
});

app.listen(8080);
