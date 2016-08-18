var handlers = {};

handlers.getAllTrucksHandler = function(res, errors, results) {
    var responseCode;
    var items;

    if (errors !== null) {
        items = [];
        statusCode = 500;
    } else {
        statusCode = 200;
        items = results;
    }
    res.statusCode = statusCode;
    res.send(items);
};

module.exports = handlers;
