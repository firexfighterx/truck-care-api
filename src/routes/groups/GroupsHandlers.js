import _ from 'lodash';

class GroupsHandlers {
    static getGroupsSuccess(res, group, members) {
        let mappedMembers = _.map(members, (member) => {
            return {id: member.id, name: `${member.firstName} ${member.lastName}`};
        });
        let activeGroup = {
            groupName: group.groupName,
            members: mappedMembers
        };
        res.statusCode = 200;
        res.send(activeGroup);
    }
    static getGroupsFailure(res, error) {
        res.statusCode = 500;
        res.send({});
    }
}

export default GroupsHandlers;
