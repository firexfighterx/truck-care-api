import _ from 'lodash';
class CategoryDetailsHandler {
    static getCategoriesAndDetailsSuccess(res, details) {
        res.statusCode = 200;
        
        var thingy = _.chain(details.outcomes).groupBy('description').toPairs().map(pair => {return _.zipObject(['category', 'outcomes'], pair)}).value();
        var result = _.chain(details.details).groupBy('category').toPairs().map(pair => {
            return _.zipObject([
                'category', 'responsibilities'
            ], pair);
        }).value();

        if(thingy.length > 0)
        {
            result[0].outcomes = thingy[0].outcomes;
        }
        


        res.send(result);
    }

    static getCategoriesAndDetailsFailure(res) {
        res.statusCode = 500;
        res.send([]);
    }
}

export default CategoryDetailsHandler;;
