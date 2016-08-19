var assert = require('assert');
var sinon = require('sinon');
var TruckListCallbackHandlers = require('../../trucks/TruckListCallbackHandlers');

describe('truckListCallbackHandlers', function() {
    var sandbox;
    beforeEach(function() {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function() {
        sandbox.restore();
    });

    describe('getAllTrucksHandler', function() {
        it('sends the database results with a successful database call', function() {
            var actualResult;
            var res = {
                send: function(results) {
                    actualResult = results;
                }
            };
            var results = ['testing'];

            TruckListCallbackHandlers.getAllTrucksHandler(res, null, results);

            assert.strictEqual(actualResult, results, 'called send function sending back results');
            assert.strictEqual(res.statusCode, 200, 'send status was set to 200');

        });

        it('sends empty list with errors', function() {
            var actualResult;
            var res = {
                send: function(results) {
                    actualResult = results;
                }
            };
            var results = ['testing'];
            var errorArray = [];

            TruckListCallbackHandlers.getAllTrucksHandler(res, {}, results);

            assert.strictEqual(actualResult.count, errorArray.count, 'called send function sending back results');
            assert.strictEqual(res.statusCode, 500, 'send status was set to 500');

        });
    });

});
