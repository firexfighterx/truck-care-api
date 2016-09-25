'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _GroupsController = require('./GroupsController');

var _GroupsController2 = _interopRequireDefault(_GroupsController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/group/active', _GroupsController2.default.getActiveTruckCareGroup);
exports.default = router;