"use strict";

const mongoose = require('mongoose');

const beehiveSchema = mongoose.Schema({
    hive_id: String,
    latitude: String,
    longitude: String,
    first_recorded_date: Date,
    temperature_sensor_locations: [String],
    humidity_sensor_locations: [String],
    description: String,
    hive_type: String
});

const Beehive = mongoose.model('Beehive', beehiveSchema);


const beehiveReportSchema = mongoose.Schema({
	hive_id: String,
	humidity_sensor_readings: Array,
	temperature_sensor_readings: Array
});

const BeehiveRecord = mongoose.model('Beehive_Records', beehiveReportSchema);
module.exports = { Beehive, beehiveReportSchema };
