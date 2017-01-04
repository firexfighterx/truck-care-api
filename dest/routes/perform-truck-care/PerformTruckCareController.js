'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _truckCareDatabase = require('../../database/truckCareDatabase');

var _truckCareDatabase2 = _interopRequireDefault(_truckCareDatabase);

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
            _truckCareDatabase2.default.createTruckCareOutcome(args);
        }
    }]);

    return PerformTruckCareController;
}();

exports.default = PerformTruckCareController;