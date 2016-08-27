import TruckCareDatabase from '../database/TruckCareDatabase';
import TruckListCallbackHandlers from '../trucks/TruckListCallbackHandlers';

class TruckListController {
    getAllTrucks(req, res) {
        TruckCareDatabase.getAllTrucks((errors, results) => {
            TruckListCallbackHandlers.getAllTrucksHandler(res, errors, results);
        });
    }
}


export default new TruckListController();
