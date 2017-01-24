import assert from 'assert';
import sinon from 'sinon';
import Handler from '../../routes/perform-truck-care/PerformTruckCareHandlers';

describe('PerformTruckCareHandlers', () => {
    let sandbox;
    let next;
    let sendStatus;
    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        next = sandbox.spy();
        sendStatus = sandbox.spy();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('handleCreateTruckCareOutcomeSuccess', () => {
        it('returns a 201 status code', () => {
            const res = {
                sendStatus
            };

            Handler.handleCreateTruckCareOutcomeSuccess(res);

            assert(sendStatus.withArgs(201).calledOnce, 'sends back a 201 status');
        });
    });

    describe('handleCreateTruckCareOutcomeFailure', () => {
        it('returns a 422 status code', () => {
            const res = {
                sendStatus
            };

            Handler.handleCreateTruckCareOutcomeFailure(res);

            assert(sendStatus.withArgs(422).calledOnce, 'sends back a 422 status');
        });
    });

    describe('handleIsRequestValidSuccess', () => {
        it('calls the next function when results are valid', () => {
            const users = [1, 2];
            const results = [
                [{
                    userId: 1
                }, {
                    userId: 2
                }],
                [{
                    count: 1
                }]
            ];

            Handler.handleIsRequestValidSuccess(users, {}, next, results);

            assert(next.calledOnce, 'calls the nexxt function');
        });

        it('returns a 422 when userId list is empty', () => {
            const users = [3];
            const results = [
                [],
                [{
                    count: 1
                }]
            ];
            const res = {
                sendStatus
            };

            Handler.handleIsRequestValidSuccess(users, res, next, results);

            assert(sendStatus.withArgs(422).calledOnce, 'called sendStatus with 422');
            assert(next.notCalled, 'next not called');
        });

        it('returns a 422 when not all users are active', () => {
            const users = [1, 2, 3];
            const results = [
                [1, 2],
                [{
                    count: 1
                }]
            ];
            const res = {
                sendStatus
            };

            Handler.handleIsRequestValidSuccess(users, res, next, results);

            assert(sendStatus.withArgs(422).calledOnce, 'called sendStatus with 422');
            assert(next.notCalled, 'next not called');
        });

    });

    describe('handleIsRequestValidFailure', () => {
        it('returns a 422 status code', () => {
            const res = {
                sendStatus
            };

            Handler.handleIsRequestValidFailure(res);

            assert(sendStatus.withArgs(422).calledOnce, 'sends back a 422 status');
        });
    });
});