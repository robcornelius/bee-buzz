"use strict";

const mongoose = require('mongoose');

const beehiveSchema = mongoose.Schema({
    hive_id: String,
    latitude: String,
    longitude: String,
    first_recorded_date: Date,
    temperature_sensor_locations: [String],
    humidity_sensor_locations: [String],
    description: String
});

const Beehive = mongoose.model('Beehive', beehiveSchema);
module.exports = Beehive;
