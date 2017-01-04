import assert from 'assert';
import sinon from 'sinon';
import PerformTruckCareController from '../../routes/perform-truck-care/PerformTruckCareController';
import TruckCareDatabase from '../../database/truckCareDatabase';

describe('PerformTruckCareController', () => {
    const truckId = 5;
    const responsibilityId = 2;
    const users = [1, 2, 3];
    let sandbox;
    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('performTruckCare', () => {
        it('calls database to insert new outcome', () => {
            const outcome = true;
            const req = {
                body: {
                    outcome,
                    users,
                    responsibilityId,
                    truckId
                }
            };
            const res = {};
            const expectedArgs = {
                outcome,
                truckId,
                responsibilityId,
                users
            };

            let createTruckCareOutcome = sandbox.stub(TruckCareDatabase, 'createTruckCareOutcome');

            PerformTruckCareController.performTruckCare(req, res);

            assert(createTruckCareOutcome.withArgs(expectedArgs).calledOnce, 'called createTruckCareOutcome');
        });
    });
});