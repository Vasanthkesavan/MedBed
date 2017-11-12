let AWS = require('aws-sdk');
const fs = require('file-system');
AWS.config.loadFromPath(__dirname + '/credentials.json');
let polly = new AWS.Polly();


let voiceType = {
"LanguageCode": 'en-GB'
};

polly.describeVoices(voiceType, (error, data) => {
  if(error) console.log(error);
});

module.exports.polly = polly;
