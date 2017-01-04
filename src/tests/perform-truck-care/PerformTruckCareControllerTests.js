import assert from 'assert';
import sinon from 'sinon';
import PerformTruckCareController from '../../routes/perform-truck-care/PerformTruckCareController';
import TruckCareDatabase from '../../database/truckCareDatabase';

describe('PerformTruckCareController', () => {
    let sandbox;
    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('performTruckCare', () => {
        it('calls database to insert new outcome', () => {
            const req = {};
            const res = {};

            let createTruckCareOutcome  = sandbox.stub(TruckCareDatabase, 'createTruckCareOutcome');

            PerformTruckCareController.performTruckCare(req, res);

            assert(createTruckCareOutcome.calledOnce, 'called createTruckCareOutcome');
        });
    });
});