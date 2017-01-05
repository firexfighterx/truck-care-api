'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _truckCareDatabase = require('../../database/truckCareDatabase');

var _truckCareDatabase2 = _interopRequireDefault(_truckCareDatabase);

var _PerformTruckCareValidator = require('./PerformTruckCareValidator');

var _PerformTruckCareValidator2 = _interopRequireDefault(_PerformTruckCareValidator);

var _PerformTruckCareHandlers = require('./PerformTruckCareHandlers');

var _PerformTruckCareHandlers2 = _interopRequireDefault(_PerformTruckCareHandlers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PerformTruckCareController = function () {
    function PerformTruckCareController() {
        _classCallCheck(this, PerformTruckCareController);
    }

    _createClass(PerformTruckCareController, null, [{
        key: 'performTruckCare',
        value: function performTruckCare(req, res) {
            var args = {
                outcome: req.body.outcome,
                truckId: req.body.truckId,
                responsibilityId: req.body.responsibilityId,
                users: req.body.users
            };
            var isRequestValid = _PerformTruckCareValidator2.default.isRequestValid(args);
            if (isRequestValid) {
                _truckCareDatabase2.default.createTruckCareOutcome(args, _PerformTruckCareHandlers2.default.handleCreateTruckCareOutcomeSuccess.bind(this, _truckCareDatabase2.default, res), _PerformTruckCareHandlers2.default.handleCreateTruckCareOutcomeFailure.bind(this, res));
            }
        }
    }]);

    return PerformTruckCareController;
}();

exports.default = PerformTruckCareController;