"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TruckListCallbackHandlers = function () {
    function TruckListCallbackHandlers() {
        _classCallCheck(this, TruckListCallbackHandlers);
    }

    _createClass(TruckListCallbackHandlers, null, [{
        key: "getTrucksSuccess",
        value: function getTrucksSuccess(res, trucks) {
            res.statusCode = 200;
            res.send(trucks);
        }
    }, {
        key: "gettrucksFailure",
        value: function gettrucksFailure(res) {
            res.statusCode = 500;
            res.send([]);
        }
    }]);

    return TruckListCallbackHandlers;
}();

exports.default = TruckListCallbackHandlers;