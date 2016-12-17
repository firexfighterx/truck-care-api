import assert from 'assert';
import CategoryDetailsHandler from '../../routes/categorydetails/CategoryDetailsHandler';

describe('CategoryDetailsHandler', () => {
    describe('getCategoriesAndDetailsSuccess', () => {
        it('returns a 200 status code', () => {
            let req = {
                send: () => { }
            };

            CategoryDetailsHandler.getCategoriesAndDetailsSuccess(req, []);

            assert.strictEqual(req.statusCode, 200, 'returned a 200 status code');
        });

        it('returns mapped object with category and details', () => {
            let actual;
            let req = {
                send: (details) => {
                    actual = details;
                }
            };
            let detail = {
                responsibilityId: 4,
                truckNumber: "2412",
                category: "Truck Essentials",
                responsibility: "Truck Inventory", 
            };
            let details = [detail];

            let expected = [
                {
                    category: "Truck Essentials",
                    responsibilities: [detail]
                }
            ];

            CategoryDetailsHandler.getCategoriesAndDetailsSuccess(req, { details, outcomes: [] });

            assert.deepEqual(actual, expected, 'details mapped properly');
        });

        it('maps recent outcomes to responsiblity', () => {
            let actual;
            let req = { send: (details) => {
                actual = details;
             } };

            let outcome = {
                outcomeId: 1,
                responsibilityId: 4,
                truckNumber: "2412",
                description: "Truck Inventory"
            };
            let outcomes = [outcome];

            let detail = {
                responsibilityId: 4,
                truckNumber: "2412",
                category: "Truck Essentials",
                responsibility: "Truck Inventory"
            };

            CategoryDetailsHandler.getCategoriesAndDetailsSuccess(req, { details: [detail], outcomes });
            assert.deepEqual(actual[0].outcomes, outcomes, 'outcomes added to details');
        });

        it('maps recent outcomes to responsibilities ', () => {
            let actual;
            
        });

    });

    describe('getCategoriesAndDetailsFailure', () => {
        it('returns a 500 and an empty object', () => {
            let actual;
            let req = {
                send: (details) => {
                    actual = details;
                }
            };

            CategoryDetailsHandler.getCategoriesAndDetailsFailure(req);

            assert.strictEqual(req.statusCode, 500, '500 status code was returned');
            assert.deepEqual(actual, [], 'empty array was sent');
        });
    });
});
