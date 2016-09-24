class TruckListCallbackHandlers {
    static getTrucksSuccess(res, trucks) {
        res.statusCode = 200;
        res.send(trucks);
    }

    static gettrucksFailure(res) {
        res.statusCode = 500;
        res.send([]);
    }
}

export default TruckListCallbackHandlers;
