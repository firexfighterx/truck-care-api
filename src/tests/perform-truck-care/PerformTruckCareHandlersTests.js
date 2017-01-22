import assert from 'assert';
import sinon from 'sinon';
import Handler from '../../routes/perform-truck-care/PerformTruckCareHandlers';

describe('PerformTruckCareHandlers', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('handleCreateTruckCareOutcomeSuccess', () => {
        it('returns a 201 status code', () => {
            let sendStatus = sandbox.spy();
            const res = {
                sendStatus
            };

            Handler.handleCreateTruckCareOutcomeSuccess(res);

            assert(sendStatus.withArgs(201).calledOnce, 'sends back a 201 status');
        });
    });

    describe('handleCreateTruckCareOutcomeFailure', () => {
        it('returns a 422 status code', () => {
            let sendStatus = sandbox.spy();
            const res = {
                sendStatus
            };

            Handler.handleCreateTruckCareOutcomeFailure(res);

            assert(sendStatus.withArgs(422).calledOnce, 'sends back a 422 status');
        });
    });

    describe('handleIsRequestValidSuccess', () => {
        it('calls the next function', () => {
            let next = sandbox.spy();

            Handler.handleIsRequestValidSuccess(next);

            assert(next.calledOnce, 'calls the nexxt function');
        });
    });

    describe('handleIsRequestValidFailure', () => {
        it('returns a 422 status code', () => {
            let sendStatus = sandbox.spy();
            const res = {
                sendStatus
            };

            Handler.handleIsRequestValidFailure(res);

            assert(sendStatus.withArgs(422).calledOnce, 'sends back a 422 status');
        });
    });
});