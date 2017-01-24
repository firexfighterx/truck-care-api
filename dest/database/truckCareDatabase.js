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
        key: 'removeUserActiveStatus',
        value: function removeUserActiveStatus(userId, success, failure) {
            db('active_user').where({
                userId: userId
            }).del().then(activeTruckCareGroup.bind(this, success, failure));
        }
    }, {
        key: 'addUserActiveStatus',
        value: function addUserActiveStatus(userId, success, failure) {
            db('active_user').insert({
                userId: userId
            }).then(activeTruckCareGroup.bind(this, success, failure));
        }
    }, {
        key: 'getTruckDetailItems',
        value: function getTruckDetailItems(truckNumber, success, failure) {
            db.select().from('truckdetailitems').where({
                truckNumber: truckNumber
            }).then(success).catch(failure);
        }
    }, {
        key: 'createTruckCareOutcome',
        value: function createTruckCareOutcome(args, success, failure) {
            db('outcome').returning('outcomeId').insert({
                wasOutcomeGood: args.outcome,
                datePerformed: new Date(),
                responsibilityId: args.responsibilityId,
                truckId: args.truckId
            }).then(success).catch(failure);
        }
    }, {
        key: 'isRequestValid',
        value: function isRequestValid(args, success, failure) {
            var dbCalls = [db.select('userId').from('active_user').whereIn('userId', args.users), db('responsibility').count('* as count').where({ truckId: args.truckId, responsibilityId: args.responsibilityId })];

            Promise.all(dbCalls).then(success).catch(failure);
        }
    }]);

    return TruckCareDatabase;
}();

exports.default = TruckCareDatabase;