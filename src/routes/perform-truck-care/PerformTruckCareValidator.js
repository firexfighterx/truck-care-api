import * as StatusCodes from '../../common/HtmlStatusCodes';
import Database from '../../database/truckCareDatabase';
import Handler from '../../routes/perform-truck-care/PerformTruckCareHandlers';
import Mapper from '../../routes/perform-truck-care/PerformTruckCareRequestMapper';

const areFieldsValid = req => {
    let body = req.body;

    return body &&
        isValidArray(body.users) &&
        isValidNumeric(body.truckId) &&
        isValidNumeric(body.responsibilityId) &&
        isValidBoolean(body.outcome) &&
        isValidOutcomeReason(body.outcome, body.outcomeReason);
};

const isValidArray = list => {
    return Array.isArray(list) &&
        list &&
        list.length !== 0;
};

const isValidNumeric = numericId => {
    return typeof numericId === 'number' &&
        numericId > 0;
};

const isValidBoolean = boolean => {
    return typeof boolean === 'boolean' &&
        boolean !== undefined;
};

const doesNotContainHtmlCharacters = reason => {
    return !reason.match('<("[^"]*"|\'[^\']*\'|[^\'">])*>');
};

const isValidOutcomeReason = (outcome, outcomeReason) => {
    return outcome ? 
    outcome 
    : outcomeReason 
    && outcomeReason.length <= 500 
    && doesNotContainHtmlCharacters(outcomeReason);
};

class PerformTruckCareValidator {
    static isRequestValid(req, res, next) {
        let args = Mapper.mapBodyRequestParameters(req);
        Database.isRequestValid(args, Handler.handleIsRequestValidSuccess.bind(this, args.users, res, next), Handler.handleIsRequestValidFailure.bind(res));
    }

    static validateBodyParams(req, res, next) {
        if (areFieldsValid(req)) {
            next();
        } else {
            res.sendStatus(StatusCodes.BAD_REQUEST);
        }
    }
}

export default PerformTruckCareValidator;