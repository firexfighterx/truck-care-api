var TruckCareDatabase = require('../database/TruckCareDatabase');
var truckListCallbackHandlers = require('../trucks/TruckListCallbackHandlers');
var controller = {};

controller.getAllTrucks = function(req, res) {
    TruckCareDatabase.getAllTrucks(function(errors, results) {
        truckListCallbackHandlers.getAllTrucksHandler(res, errors, results);
    });
};

module.exports = controller;
