"use strict";

var express = require('express');
var apiController = require('../controllers/apiController');

var router = express.Router();

router.route('/hive').post(apiController.postHive);
router.route('/hive/:id').get(apiController.getHive);
router.route('/hive/:id/temperature').get(apiController.getHiveTemperature(res.id));
router.route('/hive/:id/humidity').get(apiController.getHiveHumdity);
router.route('/hive/:id/weight').get(apiController.getHiveWeight)
router.route('/hives/').get(apiController.getHives);
