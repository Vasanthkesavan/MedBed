const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Connecting to the database */

mongoose.connect('mongodb://localhost/booklibrary', { useMongoClient: true });

mongoose.connection.once('open', function() {
  console.log('connected to database successfully');
});

// /* Library Schema */
//
// const LibrarySchema = new Schema({
//   title: { type: String, unique: true },
//   author: String,
//   path: { type: String, unique: true }
// });
//
// /* Model for Schema */
//
// const Library = mongoose.model('Library', LibrarySchema);
//
// module.exports.Library = Library;
