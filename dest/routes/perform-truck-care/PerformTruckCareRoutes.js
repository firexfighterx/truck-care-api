'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _PerformTruckCareValidator = require('./PerformTruckCareValidator');

var _PerformTruckCareValidator2 = _interopRequireDefault(_PerformTruckCareValidator);

var _PerformTruckCareController = require('./PerformTruckCareController');

var _PerformTruckCareController2 = _interopRequireDefault(_PerformTruckCareController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var performTruckCareMethods = [_PerformTruckCareValidator2.default.validateBodyParams, _PerformTruckCareValidator2.default.isRequestValid, _PerformTruckCareController2.default.performTruckCare];

router.post('/perform/truckcare', performTruckCareMethods);
exports.default = router;