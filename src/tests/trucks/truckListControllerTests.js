var assert = require('assert');
var sinon = require('sinon');
var TruckCareDatabase = require('../../database/TruckCareDatabase');
var TruckListCallbackHandlers = require('../../trucks/TruckListCallbackHandlers');
var controller = require('../../trucks/TruckListController');

describe('truckListController', function() {
    var sandbox;
    beforeEach(function() {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function() {
        sandbox.restore();
    });

    describe('getAllTrucks', function() {
        it('calls truck care database to get all trucks', function() {

            var req = {};
            var res = {};

            var getAllTrucksHandler = sandbox.stub(TruckListCallbackHandlers, 'getAllTrucksHandler');
            var getItems = sandbox.stub(TruckCareDatabase, 'getAllTrucks');

            controller.getAllTrucks(req, res);

            assert(getItems.calledOnce, 'called truck care database get items');
        });
    });

});
