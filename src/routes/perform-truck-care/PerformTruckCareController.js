import Database from '../../database/truckCareDatabase';
import Handlers from './PerformTruckCareHandlers';
import Mapper from './PerformTruckCareRequestMapper';
class PerformTruckCareController {
    static performTruckCare(req, res) {
        let args = Mapper.mapBodyRequestParameters(req);

        Database.createTruckCareOutcome(args,
            Handlers.handleCreateTruckCareOutcomeSuccess.bind(this, res),
            Handlers.handleCreateTruckCareOutcomeFailure.bind(this, res));
    }
}

export default PerformTruckCareController;