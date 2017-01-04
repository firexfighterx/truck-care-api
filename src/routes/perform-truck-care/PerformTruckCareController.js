import TruckCareDatabase from '../../database/truckCareDatabase';
class PerformTruckCareController {
    static performTruckCare(req, res) {
        TruckCareDatabase.createTruckCareOutcome();
    }
}

export default PerformTruckCareController;