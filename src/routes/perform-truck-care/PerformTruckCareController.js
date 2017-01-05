import Database from '../../database/truckCareDatabase';
import Validator from './PerformTruckCareValidator';
class PerformTruckCareController {
    static performTruckCare(req, res) {
        var args = {
            outcome: req.body.outcome,
            truckId: req.body.truckId,
            responsibilityId: req.body.responsibilityId,
            users: req.body.users
        };        
        Database.createTruckCareOutcome(args);
        Validator.isRequestValid(args);
    }
}

export default PerformTruckCareController;