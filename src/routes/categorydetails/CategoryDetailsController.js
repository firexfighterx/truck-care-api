import TruckCareDatabase from '../../database/TruckCareDatabase';
import CategoryDetailsHandler from './CategoryDetailsHandler';

class CategoryDetailsController {
    static getCategoryDetails(req, res) {
        TruckCareDatabase.getTruckDetailItems(req.params.truckNumber, CategoryDetailsHandler.getCategoriesAndDetailsSuccess.bind(this, res), CategoryDetailsHandler.getCategoriesAndDetailsFailure.bind(this, res));
    }
}

export default CategoryDetailsController;
