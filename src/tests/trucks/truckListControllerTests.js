import assert from 'assert';
import sinon from 'sinon';
import TruckCareDatabase from '../../database/TruckCareDatabase';
import TruckListCallbackHandlers from '../../routes/trucks/TruckListCallbackHandlers';
import TruckListController from '../../routes/trucks/TruckListController';

describe('TruckListController', () => {
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
            let bound_success = () => {};
            let bound_failure = () => {};

            let boundGetTrucksSuccess = sandbox.stub(TruckListCallbackHandlers.getTrucksSuccess, 'bind').returns(bound_success);
            let boundGetTrucksFailure = sandbox.stub(TruckListCallbackHandlers.gettrucksFailure, 'bind').returns(bound_failure);
            let getAllTrucks = sandbox.stub(TruckCareDatabase, 'getAllTrucks');

            TruckListController.getAllTrucks(req, res);

            assert(getAllTrucks.withArgs(bound_success, bound_failure).calledOnce, 'called truck care database get items');

        });
    });

});
