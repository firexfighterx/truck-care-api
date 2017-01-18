import * as StatusCodes from '../../common/HtmlStatusCodes';

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
    static isRequestValid() {}
    static validateBodyParams(req, res, next) {
        if (areFieldsValid(req)) {
            next();
        } else {
           res.sendStatus(StatusCodes.BAD_REQUEST); 
        }
    }
}

export default PerformTruckCareValidator;