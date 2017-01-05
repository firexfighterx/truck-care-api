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
        let isRequestValid = Validator.isRequestValid(args);
        if (isRequestValid) {
            Database.createTruckCareOutcome(args);
        }

    }
}

export default PerformTruckCareController;