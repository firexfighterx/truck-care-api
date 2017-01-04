'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GroupsHandlers = require('./GroupsHandlers');

var _GroupsHandlers2 = _interopRequireDefault(_GroupsHandlers);

var _TruckCareDatabase = require('../../database/TruckCareDatabase');

var _TruckCareDatabase2 = _interopRequireDefault(_TruckCareDatabase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupsController = function () {
    function GroupsController() {
        _classCallCheck(this, GroupsController);
    }

    _createClass(GroupsController, null, [{
        key: 'getActiveTruckCareGroup',
        value: function getActiveTruckCareGroup(req, res) {
            _TruckCareDatabase2.default.getActiveTruckCareGroup(_GroupsHandlers2.default.getGroupsSuccess.bind(this, res), _GroupsHandlers2.default.getGroupsFailure.bind(this, res));
        }
    }, {
        key: 'addUserActiveStatus',
        value: function addUserActiveStatus(req, res) {
            _TruckCareDatabase2.default.addUserActiveStatus(req.params.id, _GroupsHandlers2.default.getGroupsSuccess.bind(this, res), _GroupsHandlers2.default.getGroupsFailure.bind(this, res));
        }
    }, {
        key: 'removeUserActiveStatus',
        value: function removeUserActiveStatus(req, res) {
            _TruckCareDatabase2.default.removeUserActiveStatus(req.params.id, _GroupsHandlers2.default.getGroupsSuccess.bind(this, res), _GroupsHandlers2.default.getGroupsFailure.bind(this, res));
        }
    }, {
        key: 'addActiveTruckCareGroupMember',
        value: function addActiveTruckCareGroupMember(req, res) {
            _TruckCareDatabase2.default.saveActiveTruckCareUserActiveStatus(req.params.id, true, _GroupsHandlers2.default.getGroupsSuccess.bind(this, res), _GroupsHandlers2.default.getGroupsFailure.bind(this, res));
        }
    }, {
        key: 'removeActiveTruckCareGroupMember',
        value: function removeActiveTruckCareGroupMember(req, res) {
            _TruckCareDatabase2.default.saveActiveTruckCareUserActiveStatus(req.params.id, false, _GroupsHandlers2.default.getGroupsSuccess.bind(this, res), _GroupsHandlers2.default.getGroupsFailure.bind(this, res));
        }
    }]);

    return GroupsController;
}();

exports.default = GroupsController;