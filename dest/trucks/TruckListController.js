'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TruckCareDatabase = require('../database/TruckCareDatabase');

var _TruckCareDatabase2 = _interopRequireDefault(_TruckCareDatabase);

var _TruckListCallbackHandlers = require('../trucks/TruckListCallbackHandlers');

var _TruckListCallbackHandlers2 = _interopRequireDefault(_TruckListCallbackHandlers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TruckListController = function () {
    function TruckListController() {
        _classCallCheck(this, TruckListController);
    }

    _createClass(TruckListController, null, [{
        key: 'getAllTrucks',
        value: function getAllTrucks(req, res) {
            _TruckCareDatabase2.default.getAllTrucks(_TruckListCallbackHandlers2.default.getTrucksSuccess.bind(this, res), _TruckListCallbackHandlers2.default.gettrucksFailure.bind(this, res));
        }
    }]);

    return TruckListController;
}();

exports.default = TruckListController;