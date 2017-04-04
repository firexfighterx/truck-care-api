"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PerformTruckCareRequestMapper = function () {
    function PerformTruckCareRequestMapper() {
        _classCallCheck(this, PerformTruckCareRequestMapper);
    }

    _createClass(PerformTruckCareRequestMapper, null, [{
        key: "mapBodyRequestParameters",
        value: function mapBodyRequestParameters(req) {
            return {
                truckId: req.body.truckId,
                users: req.body.users,
                responsibilityId: req.body.responsibilityId,
                outcome: req.body.outcome,
                outcomeReason: req.body.outcomeReason
            };
        }
    }]);

    return PerformTruckCareRequestMapper;
}();

exports.default = PerformTruckCareRequestMapper;