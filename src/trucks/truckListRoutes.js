var router = require('express').Router();
var TruckListController = require('./TruckListController');

module.exports = router;

router.get('/trucks/all', TruckListController.getAllTrucks);
