"use strict";

var express = require('express');
var apiController = require('../controllers/apiControllers');

var router = express.Router();

router.route('/hive/:id').post(apiController.postHive(res.id, res.data));
router.route('/hive/:id').get(apiController.getHive(res.id));
router.route('/hive/:id/temperature').get(apiController.getHiveTemperature(res.id));
router.route('/hive/:id/humidity').get(apiController.getHiveHumdity(res.id));
router.route('/hive/:id/weight').get(apiController.getHiveWeight(res.id))
router.route('/hives/').get(apiController.getHives);
