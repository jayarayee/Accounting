var database = require('mongoose');

database.connect('mongodb://localhost:27017/Account');
database.Promise = global.Promise;

//var db = mongoose.connection;
//db.on('success', console.error.bind(console,"Connected the Mongodb"));
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = {database};