'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _TruckListController = require('./TruckListController');

var _TruckListController2 = _interopRequireDefault(_TruckListController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/trucks/all', _TruckListController2.default.getAllTrucks);
exports.default = router;