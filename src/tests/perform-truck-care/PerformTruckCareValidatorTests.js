import assert from 'assert';
import sinon from 'sinon';
import Validator from '../../routes/perform-truck-care/PerformTruckCareValidator';

describe('PerformTruckCareValidator', () => {
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

    describe('validateBodyParams', () => {
        it('calls next function when body params are valid', () => {
            let body = {
                users: [1],
                truckId: 1,
                outcome: true,
                responsibilityId: 3
            };
            const req = {
                body
            };

            Validator.validateBodyParams(req, {}, next);

            assert(next.calledOnce, 'called the next function');
        });

        it('returns a 400 status code when users list is empty', () => {
            let body = {
                users: [],
                truckId: 1,
                outcome: true,
                responsibilityId: 3
            };
            const req = {
                body
            };
            const res = {
                sendStatus
            };

            Validator.validateBodyParams(req, res, next);

            assert(next.notCalled, 'did not call next');
            assert(sendStatus.withArgs(400).calledOnce, 'called sendStatus with 400');
        });

        it('returns a 400 status code when users list is missing from body', () => {
            let body = {
                users: undefined,
                truckId: 1,
                outcome: true,
                responsibilityId: 3
            };
            const req = {
                body
            };
            const res = {
                sendStatus
            };

            Validator.validateBodyParams(req, res, next);

            assert(next.notCalled, 'did not call next');
            assert(sendStatus.withArgs(400).calledOnce, 'called sendStatus with 400');
        });

        it('returns a 400 status code when truckId is invalid', () => {
            let body = {
                users: [1],
                truckId: -1,
                outcome: true,
                responsibilityId: 3
            };
            const req = {
                body
            };

            const res = {
                sendStatus
            };

            Validator.validateBodyParams(req, res, next);

            assert(next.notCalled, 'did not call next');
            assert(sendStatus.withArgs(400).calledOnce, 'called sendStatus with 400');
        });

        it('returns a 400 status code when truckId is missing from body', () => {
            let body = {
                users: [1],
                truckId: undefined,
                outcome: true,
                responsibilityId: 3
            };
            const req = {
                body
            };

            const res = {
                sendStatus
            };

            Validator.validateBodyParams(req, res, next);

            assert(next.notCalled, 'did not call next');
            assert(sendStatus.withArgs(400).calledOnce, 'called sendStatus with 400');
        });

        it('returns a 400 status code when responsibilityId is invalid', () => {
            let body = {
                users: [1],
                truckId: 1,
                outcome: true,
                responsibilityId: -3
            };
            const req = {
                body
            };

            const res = {
                sendStatus
            };

            Validator.validateBodyParams(req, res, next);

            assert(next.notCalled, 'did not call next');
            assert(sendStatus.withArgs(400).calledOnce, 'called sendStatus with 400');
        });

        it('returns a 400 status code when responsibilityId is missing from body', () => {
            let body = {
                users: [1],
                truckId: 1,
                outcome: true,
                responsibilityId: undefined
            };
            const req = {
                body
            };

            const res = {
                sendStatus
            };

            Validator.validateBodyParams(req, res, next);

            assert(next.notCalled, 'did not call next');
            assert(sendStatus.withArgs(400).calledOnce, 'called sendStatus with 400');
        });

        it('returns a 400 status code when outcome is missing from body', () => {
            let body = {
                users: [1],
                truckId: 1,
                outcome: undefined,
                responsibilityId: 1
            };
            const req = {
                body
            };

            const res = {
                sendStatus
            };

            Validator.validateBodyParams(req, res, next);

            assert(next.notCalled, 'did not call next');
            assert(sendStatus.withArgs(400).calledOnce, 'called sendStatus with 400');
        });

        it('returns a 400 status code when numeric is wrong type', () => {
            let body = {
                users: [1],
                truckId: 'x',
                outcome: false,
                responsibilityId: []
            };

            const req = {
                body
            };
            const res = {
                sendStatus
            };

            Validator.validateBodyParams(req, res, next);
            assert(next.notCalled, 'did not call next');
            assert(sendStatus.withArgs(400).calledOnce, 'called sendStatus with 400');
        });

        it('returns a 400 status code when array is wrong type', () => {
            let body = {
                users: 'foo',
                truckId: 2,
                outcome: false,
                responsibilityId: 1
            };

            const req = {
                body
            };
            const res = {
                sendStatus
            };

            Validator.validateBodyParams(req, res, next);
            assert(next.notCalled, 'did not call next');
            assert(sendStatus.withArgs(400).calledOnce, 'called sendStatus with 400');
        });


        it('returns a 400 status code when array is wrong type', () => {
            let body = {
                users: [1],
                truckId: 2,
                outcome: 'foo',
                responsibilityId: 1
            };

            const req = {
                body
            };
            const res = {
                sendStatus
            };

            Validator.validateBodyParams(req, res, next);
            assert(next.notCalled, 'did not call next');
            assert(sendStatus.withArgs(400).calledOnce, 'called sendStatus with 400');
        });
    });
});