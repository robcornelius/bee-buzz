import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import autoIncrement from "mongoose-auto-increment";

const usersSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
        },
        last_name: {
            type: String,
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            index: true,
            unique: true,
            required: true
        },
	home_address: {
	    type: String,
	    unique: true,
	    required: true
	},
	experience: {
		type: Number
	},
	beebase_details: [{
		username: String,
		password: String
	}],
	//avatar: {}
	//either a data stream or a s3 url
	user_description: {
		type: String
	}
    }
);

usersSchema.plugin(uniqueValidator);
usersSchema.plugin(autoIncrement.plugin, 'id');

export default usersSchema;
