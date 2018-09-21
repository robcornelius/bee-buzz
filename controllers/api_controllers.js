"use strict";

var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bees');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!

});

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
