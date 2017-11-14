const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db').mongoose;
const app = express();
// const Polly = require('./polly.auth').polly;
const path =require('path');
const request = require('request');
const fs = require('fs');

app.listen(process.env.PORT || 3000);
app.use('/', express.static(path.join(__dirname, 'dist')));

/* parse incoming request */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* List of Routes */

app.get('/api/getAllPatients', getAllPatients);
app.post('/api/toggleUrls', toggleUrls);
app.post('/api/getAllEncounters', getAllEncounters);
app.post('/api/getAllCarePlan', getAllCarePlan);
app.post('/api/getAllCommunicationPlan', getAllCommunicationPlan);
app.post('/api/getAllTheConditions', getAllTheConditions);
app.post('/api/getAllTheDiagnosticConditions', getAllTheDiagnosticConditions);
app.post('/api/getAllTheImmunization', getAllTheImmunization);
app.post('/api/getAllTheObservations', getAllTheObservations);
app.post('/api/getAllTheMAdmin', getAllTheMAdmin);
app.post('/api/getAllTheMDispense', getAllTheMDispense);
app.post('/api/getAllTheMRequest', getAllTheMRequest);
app.post('/api/getAllTheProcedures', getAllTheProcedures);
app.post('/api/getTheAudioFile', getTheAudioFile);
app.get('/api/playTheAudio', playTheAudio);

function getAllPatients(req, res) {
  const url = "http://34.236.185.198:8080/cqf-ruler/baseDstu3/Patient?_format=json&_pretty=true";
  let data = [];
  request.get(url, (error, response, body) => {
    data = JSON.parse(body);
    res.send(JSON.stringify(data))
  });

}

function toggleUrls(req, res) {
  let count = JSON.stringify(req.body[0]);
  // const url =`http://34.236.185.198:8080/cqf-ruler/baseDstu3?_getpages=4799e19c-eb46-4228-89ff-74922f8a4ec5&_getpagesoffset=${count}&_count=10&_format=json&_pretty=true&_bundletype=searchset`
  const url = req.body[1];
  let data;
  request.get(url, (error, response, body) => {
    data = JSON.parse(body);
    res.send(JSON.stringify(data))
  });
}

function getAllEncounters(req, res) {
  let patientId = req.body[0];
  let data;

  console.log(patientId);
  const url = `http://34.236.185.198:8080/cqf-ruler/baseDstu3/Encounter?patient:reference=Patient/${patientId}/_history/1&_raw=true`;
  console.log('THIS IS THE URL FOR ENCOUNTERS', url);

  request.get(url, (error, response, body) => {
    data = JSON.parse(body);
    res.send(JSON.stringify(data))
  });
}

function getAllCarePlan(req, res) {
  let patientId = req.body[0];
  let data;

  const url = `http://34.236.185.198:8080/cqf-ruler/baseDstu3/CarePlan?patient:reference=Patient/${patientId}/_history/1&_raw=true`;

  request.get(url, (error, response, body) => {
    data = JSON.parse(body);
    res.send(JSON.stringify(data))
  });
}

function getAllCommunicationPlan(req, res) {
  let patientId = req.body[0];
  let data;

  const url = `http://34.236.185.198:8080/cqf-ruler/baseDstu3/Communication?patient:reference=Patient/${patientId}/_history/1&_raw=true`;

  request.get(url, (error, response, body) => {
    data = JSON.parse(body);
    res.send(JSON.stringify(data))
  });
}

function getAllTheConditions(req, res) {
  let patientId = req.body[0];
  let data;

  const url = `http://34.236.185.198:8080/cqf-ruler/baseDstu3/Condition?patient:reference=Patient/${patientId}/_history/1&_raw=true`;

  request.get(url, (error, response, body) => {
    data = JSON.parse(body);
    res.send(JSON.stringify(data))
  });
}

function getAllTheDiagnosticConditions(req, res) {
  let patientId = req.body[0];
  let data;

  const url = `http://34.236.185.198:8080/cqf-ruler/baseDstu3/DiagnosticReport?patient:reference=Patient/${patientId}/_history/1&_raw=true`;

  request.get(url, (error, response, body) => {
    data = JSON.parse(body);
    res.send(JSON.stringify(data))
  });
}

function getAllTheImmunization(req, res) {
  let patientId = req.body[0];
  let data;

  const url = `http://34.236.185.198:8080/cqf-ruler/baseDstu3/Immunization?patient:reference=Patient/${patientId}/_history/1&_raw=true`;

  request.get(url, (error, response, body) => {
    data = JSON.parse(body);
    res.send(JSON.stringify(data))
  });
}

function getAllTheObservations(req, res) {
  let patientId = req.body[0];
  let data;

  const url = `http://34.236.185.198:8080/cqf-ruler/baseDstu3/Observation?patient:reference=Patient/${patientId}/_history/1&_raw=true`;

  request.get(url, (error, response, body) => {
    data = JSON.parse(body);
    res.send(JSON.stringify(data))
  });
}

function getAllTheMAdmin(req, res) {
  let patientId = req.body[0];
  let data;

  const url = `http://34.236.185.198:8080/cqf-ruler/baseDstu3/MedicationAdministration?patient:reference=Patient/${patientId}/_history/1&_raw=true`;

  request.get(url, (error, response, body) => {
    data = JSON.parse(body);
    res.send(JSON.stringify(data))
  });
}

function getAllTheMDispense(req, res) {
  let patientId = req.body[0];
  let data;

  const url = `http://34.236.185.198:8080/cqf-ruler/baseDstu3/MedicationDispense?patient:reference=Patient/${patientId}/_history/1&_raw=true`;

  request.get(url, (error, response, body) => {
    data = JSON.parse(body);
    res.send(JSON.stringify(data))
  });
}

function getAllTheMRequest(req, res) {
  let patientId = req.body[0];
  let data;

  const url = `http://34.236.185.198:8080/cqf-ruler/baseDstu3/MedicationRequest?patient:reference=Patient/${patientId}/_history/1&_raw=true`;

  request.get(url, (error, response, body) => {
    data = JSON.parse(body);
    res.send(JSON.stringify(data))
  });
}

function getAllTheProcedures(req, res) {
  let patientId = req.body[0];
  let data;

  const url = `http://34.236.185.198:8080/cqf-ruler/baseDstu3/Procedure?patient:reference=Patient/${patientId}/_history/1&_raw=true`;

  request.get(url, (error, response, body) => {
    data = JSON.parse(body);
    res.send(JSON.stringify(data))
  });
}

function getTheAudioFile(req, res) {
  // let doctor = req.body[0];
  // let organization = req.body[1];
  //
  // let voiceDetails = {
  //   "OutputFormat": "mp3",
  //   "Text": `The patient has visited the doctor ${doctor} times and the doctor belongs to the ${organization} in the healthcare network`,
  //   "TextType": "text",
  //   "VoiceId": "Brian"
  // };
  //
  // Polly.synthesizeSpeech(voiceDetails, (err, data) => {
  //   if(err) console.log(err);
  //   console.log(data.AudioStream)
  //   fs.writeFile(__dirname + `a.mp3`, data.AudioStream, (err) => {
  //     if(err) console.log('Error saving file', err);
  //
  //   });
  //   res.send(JSON.stringify(data.AudioStream))
  // })
}

function playTheAudio(req, res) {
  res.send('Will Play')
}
