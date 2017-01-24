'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HtmlStatusCodes = require('../../common/HtmlStatusCodes');

var StatusCodes = _interopRequireWildcard(_HtmlStatusCodes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PerformTruckCareHandlers = function () {
    function PerformTruckCareHandlers() {
        _classCallCheck(this, PerformTruckCareHandlers);
    }

    _createClass(PerformTruckCareHandlers, null, [{
        key: 'handleCreateTruckCareOutcomeSuccess',
        value: function handleCreateTruckCareOutcomeSuccess(res) {
            res.sendStatus(StatusCodes.CREATED);
        }
    }, {
        key: 'handleCreateTruckCareOutcomeFailure',
        value: function handleCreateTruckCareOutcomeFailure(res) {
            res.sendStatus(StatusCodes.UNPROCESSABLE_ENTITY);
        }
    }, {
        key: 'handleIsRequestValidSuccess',
        value: function handleIsRequestValidSuccess(users, res, next, results) {
            var activeUsersResults = results[0];

            if (activeUsersResults.length == 0 || activeUsersResults.length < users.length) {
                res.sendStatus(StatusCodes.UNPROCESSABLE_ENTITY);
            } else {
                next();
            }
        }
    }, {
        key: 'handleIsRequestValidFailure',
        value: function handleIsRequestValidFailure(res) {
            res.sendStatus(StatusCodes.UNPROCESSABLE_ENTITY);
        }
    }]);

    return PerformTruckCareHandlers;
}();

exports.default = PerformTruckCareHandlers;