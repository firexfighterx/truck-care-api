import * as StatusCodes from '../../common/HtmlStatusCodes';
class PerformTruckCareHandlers {
    static handleCreateTruckCareOutcomeSuccess(res) {
        res.sendStatus(StatusCodes.CREATED);
    }
    static handleCreateTruckCareOutcomeFailure(res) {
        res.sendStatus(StatusCodes.UNPROCESSABLE_ENTITY);
    }

    static handleIsRequestValidSuccess(users, res, next, results) {
        let activeUsersResults = results[0];

        if (activeUsersResults.length == 0 ||
            activeUsersResults.length < users.length) {
            res.sendStatus(StatusCodes.UNPROCESSABLE_ENTITY);
        } else {
            next();
        }
    }
    static handleIsRequestValidFailure(res) {
        res.sendStatus(StatusCodes.UNPROCESSABLE_ENTITY);
    }
}

export default PerformTruckCareHandlers;