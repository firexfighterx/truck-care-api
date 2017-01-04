import GroupsHandlers from './GroupsHandlers';
import TruckCareDatabase from '../../database/TruckCareDatabase';

class GroupsController {
    static getActiveTruckCareGroup(req, res) {
        TruckCareDatabase.getActiveTruckCareGroup(GroupsHandlers.getGroupsSuccess.bind(this, res), GroupsHandlers.getGroupsFailure.bind(this, res));
    }

    static addUserActiveStatus(req, res) {
        TruckCareDatabase.addUserActiveStatus(req.params.id, GroupsHandlers.getGroupsSuccess.bind(this, res), GroupsHandlers.getGroupsFailure.bind(this, res));
    }

    static removeUserActiveStatus(req, res) {
        TruckCareDatabase.removeUserActiveStatus(req.params.id, GroupsHandlers.getGroupsSuccess.bind(this, res), GroupsHandlers.getGroupsFailure.bind(this, res));
    }
}

export default GroupsController;