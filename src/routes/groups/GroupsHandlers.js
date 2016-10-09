import _ from 'lodash';

let nameMapper = member => {
    return {id: member.userId, name: `${member.firstName} ${member.lastName}`};
};

class GroupsHandlers {
    static getGroupsSuccess(res, members) {
        let activeGroup = {};
        let mappedMembers = _.chain(members).filter(member => !member.isActive).map(nameMapper).value();
        let activeMembers = _.chain(members).filter(member => !!member.isActive).map(nameMapper).value();

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
    static getGroupsFailure(res, error) {
        res.statusCode = 500;
        res.send({});
    }
}

export default GroupsHandlers;
