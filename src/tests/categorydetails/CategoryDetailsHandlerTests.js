import assert from 'assert';
import CategoryDetailsHandler from '../../routes/categorydetails/CategoryDetailsHandler';

describe('CategoryDetailsHandler', () => {
    describe('getCategoriesAndDetailsSuccess', () => {
        it('returns a 200 status code', () => {
            let req = {
                send: () => {}
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
                responsibility: "Truck Inventory"
            };
            let details = [detail];

            let expected = [
                {
                    category: "Truck Essentials",
                    responsibilities: [detail]
                }
            ];

            CategoryDetailsHandler.getCategoriesAndDetailsSuccess(req, details);

            assert.deepEqual(actual, expected, 'details mapped properly');
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
