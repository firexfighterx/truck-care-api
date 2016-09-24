import GroupsHandlers from './GroupsHandlers';
import TruckCareDatabase from '../../database/TruckCareDatabase';

class GroupsController {
    static getActiveTruckCareGroup(req, res) {
        TruckCareDatabase.getActiveTruckCareGroup(GroupsHandlers.getGroupsSuccess.bind(this, res), GroupsHandlers.getGroupsFailure.bind(this, res));
    }
}

export default GroupsController;
