import Database from '../../database/truckCareDatabase';
class PerformTruckCareController {
    static performTruckCare(req, res) {
        var args = {
            outcome: req.body.outcome,
            truckId: req.body.truckId,
            responsibilityId: req.body.responsibilityId,
            users: req.body.users
        };        
        Database.createTruckCareOutcome(args);
    }
}

export default PerformTruckCareController;