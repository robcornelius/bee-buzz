import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import autoIncrement from "mongoose-auto-increment";

const hiveSchema = new.mongoose.Schema ({
	name: {
		type: String
	}
	brood_frames {
		type: Number
		required: true
	}
	super_frames: {
		type: Number
	}
	hive_type: {
		type: String,
		index: true,
		required: true
	},
	apiary: {
		type: String //_id of apiary
		required: true,
		index: true
	}
});

hiveSchema.plugin(uniqueValidator);
hiveSchema.plugin(autoIncrement.plugin, 'id');

export default hiveSchema;
