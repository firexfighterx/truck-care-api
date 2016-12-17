import CategoryDetailResultMapper from './CategoryDetailResultMapper';
class CategoryDetailsHandler {
    static getCategoriesAndDetailsSuccess(res, details) {
        res.statusCode = 200;
        var categoryDetails = CategoryDetailResultMapper.mapCategoryDetails(details);
        res.send(categoryDetails);
    }

    static getCategoriesAndDetailsFailure(res) {
        res.statusCode = 500;
        res.send([]);
    }
}

export default CategoryDetailsHandler;
