import Database from '../../database/truckCareDatabase';
import Validator from './PerformTruckCareValidator';
import Handlers from './PerformTruckCareHandlers';
import * as HtmlCodes from '../../common/HtmlStatusCodes';

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
                Handlers.handleCreateTruckCareOutcomeSuccess.bind(this, res),
                Handlers.handleCreateTruckCareOutcomeFailure.bind(this, res));
        } else {
            res.sendStatus(HtmlCodes.UNPROCESSABLE_ENTITY);
        }
    }
}

export default PerformTruckCareController;