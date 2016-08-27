import assert from 'assert';
import sinon from 'sinon';
import TruckCareDatabase from '../../database/TruckCareDatabase';
import TruckListCallbackHandlers from '../../trucks/TruckListCallbackHandlers';
import TruckListController from '../../trucks/TruckListController';

describe('truckListController', () => {
    let sandbox;
    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('getAllTrucks', () => {
        it('calls truck care database to get all trucks', () => {

            let req = {};
            let res = {};

            let getAllTrucksHandler = sandbox.stub(TruckListCallbackHandlers, 'getAllTrucksHandler');
            let getItems = sandbox.stub(TruckCareDatabase, 'getAllTrucks');

            TruckListController.getAllTrucks(req, res);

            assert(getItems.calledOnce, 'called truck care database get items');
        });
    });

});
