
//Import the mongoose module
var mongoose = require('mongoose');

//const connectionString = 'mongodb://127.0.0.1/test_db'

//Set up default mongoose connection
const connectionString = 'mongodb+srv://beebase:Fr33f0lk1@cluster0-yhpxd.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(connectionString, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


db.once('open', function() {
	var kittySchema = new mongoose.Schema({
	  name: String
	});

	kittySchema.methods.speak = function () {
	  var greeting = this.name
	    ? "Meow name is " + this.name
	    : "I don't have a name";
	  console.log(greeting);
	}

	var Kitten = mongoose.model('Kitten', kittySchema);

	var fluffy = new Kitten({ name: 'fluffy' });
	fluffy.speak();

	fluffy.save(function (err, fluffy) {
    		if (err) return console.error(err);
    		fluffy.speak();
  	});

	Kitten.find(function (err, kittens) {
  		if (err) return console.error(err);
		console.log('kittens', kittens);
	})
});
