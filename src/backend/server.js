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
app.post('/api/toggleUrls', toggleUrls);

function getAllPatients(req, res) {
  const url = "http://34.236.185.198:8080/cqf-ruler/baseDstu3/Patient?_format=json&_pretty=true";
  let data;
  request.get(url, (error, response, body) => {
    data = JSON.parse(body);
    res.send(JSON.stringify(data))
  });
}

function toggleUrls(req, res) {
  let count = JSON.stringify(req.body[0]);
  let url = `http://34.236.185.198:8080/cqf-ruler/baseDstu3?_getpages=eac7181d-0666-48e0-806a-a7202399af1b&_getpagesoffset=${count}&_count=10&_format=json&_pretty=true&_bundletype=searchset`
  console.log('this is the URL', url)
  let data;
  request.get(url, (error, response, body) => {
    data = JSON.parse(body);
    res.send(JSON.stringify(data))
  });
}
