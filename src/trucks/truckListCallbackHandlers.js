class TruckListCallbackHandlers {
    getAllTrucksHandler(res, errors, results) {
        let statusCode;
        let items;
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
}

export default new TruckListCallbackHandlers();
