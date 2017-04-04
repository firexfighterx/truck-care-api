import assert from 'assert';
import Mapper from '../../routes/perform-truck-care/PerformTruckCareRequestMapper';

describe('PerformTruckCareRequestMapper', () => {
    describe('mapBodyRequestParameters', () => {
        it('maps only body params needed', () => {
            const body = {
                truckId: 1,
                responsibilityId: 2,
                users: [1, 2],
                outcome: false,
                outcomeReason: 'some outcome reason',
                foo: 'bar'
            };

            const expected = {
                truckId: 1,
                responsibilityId: 2,
                users: [1, 2],
                outcome: false,
                outcomeReason: 'some outcome reason'
            };

            const req = {
                body
            };

            let actual = Mapper.mapBodyRequestParameters(req);

            assert.deepEqual(actual, expected, 'request body fields mapped properly');
        });
    });
});