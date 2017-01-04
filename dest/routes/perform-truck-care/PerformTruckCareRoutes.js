'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _PerformTruckCareController = require('./PerformTruckCareController');

var _PerformTruckCareController2 = _interopRequireDefault(_PerformTruckCareController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/perform/truckcare', _PerformTruckCareController2.default.performTruckCare);
exports.default = router;