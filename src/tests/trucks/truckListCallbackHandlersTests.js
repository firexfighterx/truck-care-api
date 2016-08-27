import assert from 'assert';
import sinon from 'sinon';
import TruckListCallbackHandlers from '../../trucks/TruckListCallbackHandlers';

describe('truckListCallbackHandlers', () => {
    let sandbox;
    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('getAllTrucksHandler', () => {
        it('sends the database results with a successful database call', () => {
            let actualResult;
            let res = {
                send: (results) => {
                    actualResult = results;
                }
            };
            let results = ['testing'];

            TruckListCallbackHandlers.getAllTrucksHandler(res, null, results);

            assert.strictEqual(actualResult, results, 'called send function sending back results');
            assert.strictEqual(res.statusCode, 200, 'send status was set to 200');

        });

        it('sends empty list with errors', () => {
            let actualResult;
            let res = {
                send: (results) => {
                    actualResult = results;
                }
            };
            let results = ['testing'];
            let errorArray = [];

            TruckListCallbackHandlers.getAllTrucksHandler(res, {}, results);

            assert.strictEqual(actualResult.count, errorArray.count, 'called send function sending back results');
            assert.strictEqual(res.statusCode, 500, 'send status was set to 500');

        });
    });

});
