'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var db = (0, _knex2.default)({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'trucks',
        password: 'FireDepartment2400',
        database: 'TruckCare'
    }
});

var activeTruckCareGroup = function activeTruckCareGroup(success, failure) {
    db.select().from('activeGroup').then(success).catch(failure);
};

var TruckCareDatabase = function () {
    function TruckCareDatabase() {
        _classCallCheck(this, TruckCareDatabase);
    }

    _createClass(TruckCareDatabase, null, [{
        key: 'getAllTrucks',
        value: function getAllTrucks(success, failure) {
            db.select().from('trucks').then(success).catch(failure);
        }
    }, {
        key: 'getActiveTruckCareGroup',
        value: function getActiveTruckCareGroup(success, failure) {
            activeTruckCareGroup(success, failure);
        }
    }, {
        key: 'saveActiveTruckCareUserActiveStatus',
        value: function saveActiveTruckCareUserActiveStatus(userId, isActive, success, failure) {
            db('user').where({
                userId: userId
            }).update({
                isActive: isActive
            }).then(activeTruckCareGroup.bind(this, success, failure));
        }
    }, {
        key: 'getTruckDetailItems',
        value: function getTruckDetailItems(truckNumber, success, failure) {
            db.select().from('truckdetailitems').where({
                truckNumber: truckNumber
            }).then(success).catch(failure);
        }
    }]);

    return TruckCareDatabase;
}();

exports.default = TruckCareDatabase;