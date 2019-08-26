import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import autoIncrement from "mongoose-auto-increment";

const apiarySchema = new.mongoose.Schema ({
	name: {
		type: String,
		required: true

	},
	address: {
		type: String,
		required: true
	},
	location: {
		type: {
			type: String,
			enum: ['Point'],
			required: true
		},
		coordinates: {
			type: [Number],
			required: true
		},
		required: true;
		index:
	},
	photos: {
		type: [String] //urls of s3 bucket images
	},
	notes: {
		type: String
	}
});

apiarySchema.plugin(uniqueValidator);
apiarySchema.plugin(autoIncrement.plugin, 'id');

export default apiarySchema;
