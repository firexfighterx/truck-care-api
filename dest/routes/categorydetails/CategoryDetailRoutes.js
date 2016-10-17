'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _CategoryDetailsController = require('./CategoryDetailsController');

var _CategoryDetailsController2 = _interopRequireDefault(_CategoryDetailsController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/truck/:truckNumber/category/details', _CategoryDetailsController2.default.getCategoryDetails);
exports.default = router;