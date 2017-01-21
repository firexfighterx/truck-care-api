class PerformTruckCareRequestMapper {
    static mapBodyRequestParameters(req) {
        return {
            truckId: req.body.truckId,
            users: req.body.users,
            responsibilityId: req.body.responsibilityId,
            outcome: req.body.outcome
        };
    }
}

export default PerformTruckCareRequestMapper;