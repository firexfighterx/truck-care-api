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

    _createClass(TruckListCallbackHandlers, [{
        key: "getAllTrucksHandler",
        value: function getAllTrucksHandler(res, errors, results) {
            var statusCode = void 0;
            var items = void 0;
            if (errors !== null) {
                items = [];
                statusCode = 500;
            } else {
                statusCode = 200;
                items = results;
            }
            res.statusCode = statusCode;
            res.send(items);
        }
    }]);

    return TruckListCallbackHandlers;
}();

exports.default = new TruckListCallbackHandlers();