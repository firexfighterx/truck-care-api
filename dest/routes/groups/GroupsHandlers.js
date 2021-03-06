'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var nameMapper = function nameMapper(member) {
    return { id: member.userId, name: member.firstName + ' ' + member.lastName };
};

var GroupsHandlers = function () {
    function GroupsHandlers() {
        _classCallCheck(this, GroupsHandlers);
    }

    _createClass(GroupsHandlers, null, [{
        key: 'getGroupsSuccess',
        value: function getGroupsSuccess(res, members) {
            var activeGroup = {};
            var mappedMembers = _lodash2.default.chain(members).filter(function (member) {
                return !member.isActive;
            }).map(nameMapper).value();
            var activeMembers = _lodash2.default.chain(members).filter(function (member) {
                return !!member.isActive;
            }).map(nameMapper).value();

            if (members.length > 0) {
                activeGroup = {
                    groupName: members[0].groupName,
                    members: mappedMembers,
                    activeMembers: activeMembers
                };
            }

            res.statusCode = 200;
            res.send(activeGroup);
        }
    }, {
        key: 'getGroupsFailure',
        value: function getGroupsFailure(res, error) {
            res.statusCode = 500;
            res.send({});
        }
    }]);

    return GroupsHandlers;
}();

exports.default = GroupsHandlers;