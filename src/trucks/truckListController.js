var truckCareDatabase = require('../database/truckCareDatabase');
var truckListCallbackHandlers = require('../trucks/TruckListCallbackHandlers');
var controller = {};

controller.getAllTrucks = function(req, res) {
    truckCareDatabase.getItems(function(errors, results) {
        truckListCallbackHandlers.getAllTrucksHandler(res, errors, results);
    });
};

module.exports = controller;
