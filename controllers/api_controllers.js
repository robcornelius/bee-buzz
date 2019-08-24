"use strict";

var express = require('express');
var mongoose = require('mongoose');
var models = require('../models/api_model');

mongoose.connect('mongodb://localhost:27017/bees');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var query = models.Beehive.findOne({'hive_type': 'Top Bar'});
query.select('hive_id');
query.exec((err, hive) => {
	if (err) return handleError(err);
	debugger;
	console.log(hive['hive_id']);
});

/*
const postHive = (id, data) =>  {

};

const getHive = (id) => {

};

const getHiveTemperature = (id) => {

};

const getHiveHumdity = (id) => {

};

const getHiveWeight = (id) => {

};

const getHives = () => {
    
};

module.exports = {
    postHive,
    getHive,
    getHiveTemperature,
    getHiveHumdity,
    getHiveWeight,
    getHives
}
*/
