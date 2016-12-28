import _ from 'lodash';
class CategoryDetailResultMapper {

    static mapCategoryDetails(details) {
        var result = _.chain(details).groupBy('category').toPairs().map(pair => {
            return _.zipObject([
                'category', 'responsibilities'
            ], pair);
        }).value();
        return result;
    }
}

export default CategoryDetailResultMapper;