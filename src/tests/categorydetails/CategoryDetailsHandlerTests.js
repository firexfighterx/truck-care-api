import assert from 'assert';
import sinon from 'sinon';
import CategoryDetailsHandler from '../../routes/categorydetails/CategoryDetailsHandler';
import CategoryDetailResultMapper from '../../routes/categorydetails/CategoryDetailResultMapper';

describe('CategoryDetailsHandler', () => {
    let sandbox;
    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('getCategoriesAndDetailsSuccess', () => {
        it('returns a 200 status code', () => {
            let req = {
                send: () => { }
            };

            CategoryDetailsHandler.getCategoriesAndDetailsSuccess(req, {});

            assert.strictEqual(req.statusCode, 200, 'returned a 200 status code');
        });

        it('calls to CategoryDetailResultMapper', () => {
            let req = {
                send: () => {}
            };
            let details = {};
            let mapCategoryDetails = sandbox.stub(CategoryDetailResultMapper, 'mapCategoryDetails');
            CategoryDetailsHandler.getCategoriesAndDetailsSuccess(req, details);

            assert(mapCategoryDetails.withArgs(details).calledOnce, 'called mapCategoryDetails');
        });

        it('returns results from CategoryDetailResultMapper', () => {
            let actual;
            let req = {
                send: (details) => {actual = details;}
            };

            let results = [{}];
            sandbox.stub(CategoryDetailResultMapper, 'mapCategoryDetails').returns(results);
            CategoryDetailsHandler.getCategoriesAndDetailsSuccess(req, {});

            assert.deepEqual(actual, results, 'mapped category details sent in response');
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
