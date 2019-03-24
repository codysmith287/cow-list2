const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 4200

app.use(parser.json())

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} ${JSON.stringify(req.body)}`);
  next();
})

// ==============Database Setup============= //
const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password',
  database: 'cows'
});

connection.connect(err => {
  if (err) {
    console.error(`error connection to mysql! ${err.stack}`);
    return;
  } else {
    console.log(`Connected to mySQL! ${connection.threadId}`);
  }
})

//================ CORS HEADERS ==================//
let defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept, x-parse-application-id',
  'access-control-max-age': 10 // Seconds.
};

// ================ Routes ================= //

app.get('/api/cows', function(req, res) {

  console.log(`${req.method} received`);

  let queryStr = 'SELECT * FROM cow_list'

  connection.query(queryStr, (err, results) => {
    if (err) {
      console.error('select all query attempt failed');
    }
      console.log('results:', results)
      res.status(200);
      res.send(results);
  })
})

app.post('/api/cows', (req, res) => {

  console.log(`${req.method} received`);

  const newCow = req.body;

  console.log(typeof newCow.name);
  console.log(typeof newCow.description);

  let params = [newCow.name, newCow.description];

  let queryStr = `insert into cow_list (id, name, description) values (null, ?, ?)`;

  connection.query(queryStr, params, (err, results) => {
    if (err) {
      console.log(`database insertion failed :( `);
    } else {
      console.log(`database insertion successful!`);
      res.sendStatus(201);
    }
  })

})

app.listen(port, () => console.log(`listening on port ${port}!`))