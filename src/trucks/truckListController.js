var truckCareDatabase = require('../database/truckCareDatabase');
var truckListCallbackHandlers = require('../trucks/truckListCallbackHandlers');
var controller = {};

controller.getAllTrucks = function(req, res){
  truckCareDatabase.getItems(truckListCallbackHandlers.getAllTrucksHandler);
};

module.exports = controller;
