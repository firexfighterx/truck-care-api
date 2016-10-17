import _ from 'lodash';
class CategoryDetailsHandler {
    static getCategoriesAndDetailsSuccess(res, details) {
        res.statusCode = 200;
        var result = _.chain(details).groupBy('category').toPairs().map(pair => {
            return _.zipObject([
                'category', 'responsibilities'
            ], pair);
        }).value();
        res.send(result);
    }

    static getCategoriesAndDetailsFailure(res) {
        res.statusCode = 500;
        res.send([]);
    }
}

export default CategoryDetailsHandler;;
