import * as StatusCodes from '../../common/HtmlStatusCodes';
class PerformTruckCareHandlers {
    static handleCreateTruckCareOutcomeSuccess(res) {
        res.sendStatus(StatusCodes.CREATED);
    }
    static handleCreateTruckCareOutcomeFailure(res) {
        res.sendStatus(StatusCodes.UNPROCESSABLE_ENTITY);
    }

    static handleIsRequestValidSuccess(next) {
        next();
    }
    static handleIsRequestValidFailure(res) {
        res.sendStatus(StatusCodes.UNPROCESSABLE_ENTITY);
    }
}

export default PerformTruckCareHandlers;