const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Connecting to the database */

mongoose.connect('mongodb://localhost/booklibrary', { useMongoClient: true });

mongoose.connection.once('open', function() {
  console.log('connected to database successfully');
});


