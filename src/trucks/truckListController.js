var truckCareDatabase = require('../database/truckCareDatabase');
var truckListCallbackHandlers = require('../trucks/TruckListCallbackHandlers');
var controller = {};

controller.getAllTrucks = function(req, res) {
    truckCareDatabase.getItems(truckListCallbackHandlers.getAllTrucksHandler);
};

module.exports = controller;
