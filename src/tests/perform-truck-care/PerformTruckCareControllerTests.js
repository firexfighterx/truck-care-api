import assert from 'assert';
import sinon from 'sinon';
import Controller from '../../routes/perform-truck-care/PerformTruckCareController';
import Database from '../../database/truckCareDatabase';
import Validator from '../../routes/perform-truck-care/PerformTruckCareValidator';
import Handlers from '../../routes/perform-truck-care/PerformTruckCareHandlers';

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
            const res = {sendStatus: () => {}};
            const expectedArgs = {
                outcome,
                truckId,
                responsibilityId,
                users
            };
            const success = () => {};
            const failure = () => {};
            sandbox.stub(Handlers.handleCreateTruckCareOutcomeSuccess, 'bind').returns(success);
            sandbox.stub(Handlers.handleCreateTruckCareOutcomeFailure, 'bind').returns(failure);
            sandbox.stub(Validator, 'isRequestValid').returns(true);
            let createTruckCareOutcome = sandbox.stub(Database, 'createTruckCareOutcome');

            Controller.performTruckCare(req, res);

            assert(createTruckCareOutcome.withArgs(expectedArgs, success, failure).calledOnce, 'called createTruckCareOutcome');
        });

        it('calls Validator to validate request', () => {
            const outcome = true;
            const req = {
                body: {
                    outcome,
                    users,
                    responsibilityId,
                    truckId
                }
            };
            const expectedArgs = {
                outcome,
                truckId,
                responsibilityId,
                users
            };

            let isRequestValid = sandbox.stub(Validator, 'isRequestValid').returns(false);

            Controller.performTruckCare(req, {sendStatus: () => {}});

            assert(isRequestValid.withArgs(expectedArgs).calledOnce, 'called to perform validation');
        });

        it('does not call Database when Validator returns false', () => {
            sandbox.stub(Validator, 'isRequestValid').returns(false);
            let createTruckCareOutcome = sandbox.stub(Database, 'createTruckCareOutcome');

            Controller.performTruckCare({
                body: {}
            }, {sendStatus: () => {}});

            assert(createTruckCareOutcome.notCalled, 'createTruckCareOutcome was not called');
        });

        it('returns a status code of 422 when request is not valid', () => {
            let actual;
            const res = { sendStatus: (status) => {actual = status;}};
            sandbox.stub(Validator, 'isRequestValid').returns(false);

            Controller.performTruckCare({body:{}}, res);

            assert.strictEqual(actual, 422, '422 status code was sent');
        });
    });
});