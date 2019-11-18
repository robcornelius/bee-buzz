var GeoJSON = require('mongoose-geojson-schema');
const mongoose = require('mongoose');
const validator = require('validator');

const hiveModel = mongoose.model('Hive', {
    user_id: {
        type: ObjectId,
        required: true
    },
    apiaryId {
        type: ObjectId,
        required: true
    }
    queenAge: {
        required: true,
        type: Number,
        validate: {
            validator(queenAge) {
                return validator.isNumber(queenAge)
            }
        }
    },
    queenMark: {
        type: String,
        validate: {
            return validator.isAlphanumeric(queenMark)
        }
    },
    queenStatus: {
        type: Boolean,
        validate: {
            return validator.isBoolean(queenStatus)
        }
    },
    name: {
        type: String,
        required: true,
        validate: {
            return validator.isAlphanumeric(name)
        }
    }
});

module.exports = hiveModel;
