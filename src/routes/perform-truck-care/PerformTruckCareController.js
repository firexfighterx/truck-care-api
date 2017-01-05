import Database from '../../database/truckCareDatabase';
import Validator from './PerformTruckCareValidator';
import Handlers from './PerformTruckCareHandlers';

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
            Database.createTruckCareOutcome(args, 
            Handlers.handleCreateTruckCareOutcomeSuccess.bind(this, Database, res), 
            Handlers.handleCreateTruckCareOutcomeFailure.bind(this, res));
        }

    }
}

export default PerformTruckCareController;