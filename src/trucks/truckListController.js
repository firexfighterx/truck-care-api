import TruckCareDatabase from '../database/TruckCareDatabase';
import TruckListCallbackHandlers from '../trucks/TruckListCallbackHandlers';

class TruckListController {
    static getAllTrucks(req, res) {
        TruckCareDatabase.getAllTrucks(TruckListCallbackHandlers.getTrucksSuccess.bind(this, res), TruckListCallbackHandlers.gettrucksFailure.bind(this, res));
    }
}

export default TruckListController;
