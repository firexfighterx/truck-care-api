'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nodeMysqlWrapper = require('node-mysql-wrapper');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var db = (0, _nodeMysqlWrapper.wrap)('mysql://trucks:FireDepartment2400@127.0.0.1/TruckCare?debug=false&charset=utf8');

var TruckCareDatabase = function () {
    function TruckCareDatabase() {
        _classCallCheck(this, TruckCareDatabase);
    }

    _createClass(TruckCareDatabase, [{
        key: 'getAllTrucks',
        value: function getAllTrucks(getAllTrucksCallback) {
            db.query('select * from trucks', getAllTrucksCallback);
        }
    }]);

    return TruckCareDatabase;
}();

exports.default = new TruckCareDatabase();