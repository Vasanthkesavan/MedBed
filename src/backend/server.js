const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db').mongoose;
const app = express();
const fs = require('fs');
const request = require('request');
app.listen(process.env.PORT || 3000);
// app.use(express.static(path.join(__dirname, 'dist')));

/* parse incoming request */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* List of Routes */

app.get('/api/getAllPatients', getAllPatients);

function getAllPatients(req, res) {
  const url = "http://34.236.185.198:8080/cqf-ruler/baseDstu3/Patient?_format=json&_pretty=true$everything";
  let data;
  request.get(url, (error, response, body) => {
    data = JSON.parse(body);
    res.send(JSON.stringify(data.entry))
  })
}
