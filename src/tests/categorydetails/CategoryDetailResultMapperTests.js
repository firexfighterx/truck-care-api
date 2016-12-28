import assert from 'assert';
import CategoryDetailResultMapper from '../../routes/categorydetails/CategoryDetailResultMapper';

describe('CategoryDetailResultMapper', () => {
    describe('mapCategoryDetails', () => {
        it('returns mapped object with category and details', () => {
            let detail = {
                responsibilityId: 4,
                truckNumber: "2412",
                category: "Truck Essentials",
                responsibility: "Truck Inventory",
            };
            let details = [detail];

            let expected = [{
                category: "Truck Essentials",
                responsibilities: [detail]
            }];

            let result = CategoryDetailResultMapper.mapCategoryDetails(details);

            assert.deepEqual(result, expected, 'details mapped properly');
        });
    });
});