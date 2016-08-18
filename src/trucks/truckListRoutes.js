var router = require('express').Router();
var truckCareDatabase = require('../database/truckCareDatabase');

var TruckListController = require('./TruckListController');

module.exports = router;

router.get('/trucks/all', TruckListController.getAllTrucks);
