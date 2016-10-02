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
router.put('/group/member/:id/activate', _GroupsController2.default.addActiveTruckCareGroupMember);
router.put('/group/member/:id/deactivate', _GroupsController2.default.removeActiveTruckCareGroupMember);
exports.default = router;