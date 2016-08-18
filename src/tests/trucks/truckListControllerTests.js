var assert = require('assert');
var sinon = require('sinon');
var truckCareDatabase = require('../../database/truckCareDatabase');
var truckListCallbackHandlers = require('../../trucks/TruckListCallbackHandlers');
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

            var getAllTrucksHandler = sandbox.stub(truckListCallbackHandlers, 'getAllTrucksHandler');
            var getItems = sandbox.stub(truckCareDatabase, 'getItems');

            controller.getAllTrucks(req, res);

            assert(getItems.withArgs(getAllTrucksHandler).calledOnce, 'called truck care database get items');
        });
    });

});
