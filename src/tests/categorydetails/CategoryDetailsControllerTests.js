import assert from 'assert';
import sinon from 'sinon';
import CategoryDetailsController from '../../routes/categorydetails/CategoryDetailsController';
import CategoryDetailsHandler from '../../routes/categorydetails/CategoryDetailsHandler';
import TruckCareDatabase from '../../database/TruckCareDatabase';

describe('CategoryDetailsController', () => {
    let sandbox;
    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('getCategoryDetails', () => {
        it('calls database to get category details', () => {
            let truckNumber = '2412';
            let bound_success = () => {};
            let bound_failure = () => {};
            let req = {
                params: {
                    truckNumber
                }
            };
            let res = {};

            let boundGetCategoriesAndDetailsSuccess = sandbox.stub(CategoryDetailsHandler.getCategoriesAndDetailsSuccess, 'bind').returns(bound_success);
            let boundGetCategoriesAndDetailsFailure = sandbox.stub(CategoryDetailsHandler.getCategoriesAndDetailsFailure, 'bind').returns(bound_failure);
            let getTruckDetailItems = sandbox.stub(TruckCareDatabase, 'getTruckDetailItems');

            CategoryDetailsController.getCategoryDetails(req, res);

            assert(getTruckDetailItems.withArgs(truckNumber, bound_success, bound_failure).calledOnce, 'called TruckCareDatabase to get Categories and Details');
        });
    });
});
