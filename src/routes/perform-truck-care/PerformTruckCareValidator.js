import * as StatusCodes from '../../common/HtmlStatusCodes';
import Database from '../../database/truckCareDatabase';
import Handler from '../../routes/perform-truck-care/PerformTruckCareHandlers';

const areFieldsValid = req => {
    return isValidArray(req.body.users)
    && isValidNumeric(req.body.truckId)
    && isValidNumeric(req.body.responsibilityId)
    && isValidBoolean(req.body.outcome);
};

const isValidArray = list => {

    return Array.isArray(list) 
    && list 
    && list.length !== 0;
};

const isValidNumeric = numericId => {
    return typeof numericId === 'number'
    && numericId > 0;
};

const isValidBoolean = boolean => {
    return typeof boolean === 'boolean'
    && boolean !== undefined;
};

class PerformTruckCareValidator {
    static isRequestValid(req, res, next) {
        const args = {
            truckId: req.body.truckId,
            users: req.body.users,
            responsibilityId: req.body.responsibilityId,
            outcome: req.body.outcome
        };
        Database.isRequestValid(args, Handler.handleIsRequestValidSuccess.bind(this, req, next), Handler.handleIsRequestValidFailure.bind(res));
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