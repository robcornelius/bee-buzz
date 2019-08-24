//const connectionString = 'mongodb+srv://beebase:Freef0lk!@cluster0-yhpxd.mongodb.net/test?retryWrites=true&w=majority';

//Import the mongoose module
var mongoose = require('mongoose');

const connectionString = 'mongodb://127.0.0.1/test_db'

//Set up default mongoose connection
mongoose.connect(connectionString, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
	a_string: String,
	a_date: Date
});

var SomeModel = mongoose.model('SomeModel', SomeModelSchema);

// Create an instance of model SomeModel
var awesome_instance = new SomeModel({ name: 'awesome' });

// Save the new model instance, passing a callback
awesome_instance.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
