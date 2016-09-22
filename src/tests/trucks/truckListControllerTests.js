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
            let bound_trucks_handler = () => {};

            let boundGetAllTrucksHandler = sandbox.stub(TruckListCallbackHandlers.getAllTrucksHandler, 'bind').returns(bound_trucks_handler);
            let getAllTrucks = sandbox.stub(TruckCareDatabase, 'getAllTrucks');

            TruckListController.getAllTrucks(req, res);

            assert(getAllTrucks.withArgs(bound_trucks_handler).calledOnce, 'called truck care database get items');
        });
    });

});
