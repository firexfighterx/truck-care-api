import assert from 'assert';
import sinon from 'sinon';
import Controller from '../../routes/perform-truck-care/PerformTruckCareController';
import Database from '../../database/truckCareDatabase';
import Handlers from '../../routes/perform-truck-care/PerformTruckCareHandlers';
import Mapper from '../../routes/perform-truck-care/PerformTruckCareRequestMapper';

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
            const bound_success = () => {};
            const bound_failure = () => {
                return true;
            };

            const args = {
                someField: 'doesnt matter',
                foo: 'bar'
            };

            sandbox.stub(Mapper, 'mapBodyRequestParameters').returns(args);
            sandbox.stub(Handlers.handleCreateTruckCareOutcomeSuccess, 'bind').returns(bound_success);
            sandbox.stub(Handlers.handleCreateTruckCareOutcomeFailure, 'bind').returns(bound_failure);
            let createTruckCareOutcome = sandbox.stub(Database, 'createTruckCareOutcome');

            Controller.performTruckCare({}, {});

            assert(createTruckCareOutcome.withArgs(args, bound_success, bound_failure).calledOnce, 'called createTruckCareOutcome');

        });

        it('calls request body mapper to map arguments', () => {
            const body = {
                someField: 'doesnt matter',
                foo: 'bar'
            };
            const req = {
                body
            };

            let mapBodyRequestParameters = sandbox.stub(Mapper, 'mapBodyRequestParameters');
            sandbox.stub(Database, 'createTruckCareOutcome');

            Controller.performTruckCare(req, {});

            assert(mapBodyRequestParameters.withArgs(req).calledOnce, 'called mapper to map body request params');
        });
    });
});