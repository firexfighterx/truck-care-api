'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HtmlStatusCodes = require('../../common/HtmlStatusCodes');

var StatusCodes = _interopRequireWildcard(_HtmlStatusCodes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var areFieldsValid = function areFieldsValid(req) {
    return isValidArray(req.body.users) && isValidNumeric(req.body.truckId) && isValidNumeric(req.body.responsibilityId) && isValidBoolean(req.body.outcome);
};

var isValidArray = function isValidArray(list) {

    return Array.isArray(list) && list && list.length !== 0;
};

var isValidNumeric = function isValidNumeric(numericId) {
    return typeof numericId === 'number' && numericId > 0;
};

var isValidBoolean = function isValidBoolean(boolean) {
    return typeof boolean === 'boolean' && boolean !== undefined;
};

var PerformTruckCareValidator = function () {
    function PerformTruckCareValidator() {
        _classCallCheck(this, PerformTruckCareValidator);
    }

    _createClass(PerformTruckCareValidator, null, [{
        key: 'isRequestValid',
        value: function isRequestValid() {}
    }, {
        key: 'validateBodyParams',
        value: function validateBodyParams(req, res, next) {
            if (areFieldsValid(req)) {
                next();
            } else {
                res.sendStatus(StatusCodes.BAD_REQUEST);
            }
        }
    }]);

    return PerformTruckCareValidator;
}();

exports.default = PerformTruckCareValidator;