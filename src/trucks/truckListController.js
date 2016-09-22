import TruckCareDatabase from '../database/TruckCareDatabase';
import TruckListCallbackHandlers from '../trucks/TruckListCallbackHandlers';

class TruckListController {
    getAllTrucks(req, res) {
        TruckCareDatabase.getAllTrucks(TruckListCallbackHandlers.getAllTrucksHandler.bind(this, res));
    }
}

export default new TruckListController();
