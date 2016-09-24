import assert from 'assert';
import sinon from 'sinon';
import TruckListCallbackHandlers from '../../routes/trucks/TruckListCallbackHandlers';

describe('TruckListCallbackHandlers', () => {
    let sandbox;
    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('getTrucksSuccess', () => {
        it('sends the database results with a successful database call', () => {
            let actualResult;
            let res = {
                send: (trucks) => {
                    actualResult = trucks;
                }
            };
            let trucks = ['testing'];

            TruckListCallbackHandlers.getTrucksSuccess(res, trucks);

            assert.strictEqual(actualResult, trucks, 'called send function sending back results');
            assert.strictEqual(res.statusCode, 200, 'send status was set to 200');

        });
    });

    describe('gettrucksFailure', () => {
        it('sends empty list with errors', () => {
            let actualResult;
            let res = {
                send: (results) => {
                    actualResult = results;
                }
            };
            let results = ['testing'];
            let errorArray = [];

            TruckListCallbackHandlers.gettrucksFailure(res);

            assert.deepEqual(actualResult, errorArray, 'called send function sending back results');
            assert.strictEqual(res.statusCode, 500, 'send status was set to 500');

        });
    });

});
