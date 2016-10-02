import sinon from 'sinon';
import assert from 'assert';
import GroupsController from '../../routes/groups/GroupsController';
import GroupsHandlers from '../../routes/groups/GroupsHandlers';
import TruckCareDatabase from '../../database/TruckCareDatabase';

describe('GroupsController', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('getActiveTruckCareGroup', () => {
        it('calls TruckCareDatabase with bound handler functions', () => {
            let bound_success = () => {};
            let bound_failure = () => {};
            let req = {};
            let res = {};

            let boundGetGroupsSuccess = sandbox.stub(GroupsHandlers.getGroupsSuccess, 'bind').returns(bound_success);
            let boundGetGroupsFailure = sandbox.stub(GroupsHandlers.getGroupsFailure, 'bind').returns(bound_failure);
            let getActiveTruckCareGroup = sandbox.stub(TruckCareDatabase, 'getActiveTruckCareGroup');

            GroupsController.getActiveTruckCareGroup(req, res);

            assert(getActiveTruckCareGroup.withArgs(bound_success, bound_failure).calledOnce, 'called TruckCareDatabase to get active Truck Care Group');
        });
    });

    describe('addActiveTruckCareGroupMember', () => {
        it('calls TruckCareDatabase to update active user status to true', () => {
            let bound_success = () => {};
            let bound_failure = () => {};
            let req = {
                params: {
                    id: 1
                }
            };
            let res = {};

            let boundGetGroupsSuccess = sandbox.stub(GroupsHandlers.getGroupsSuccess, 'bind').returns(bound_success);
            let boundGetGroupsFailure = sandbox.stub(GroupsHandlers.getGroupsFailure, 'bind').returns(bound_failure);
            let saveActiveTruckCareUserActiveStatus = sandbox.stub(TruckCareDatabase, 'saveActiveTruckCareUserActiveStatus');

            GroupsController.addActiveTruckCareGroupMember(req, res);

            assert(saveActiveTruckCareUserActiveStatus.withArgs(1, true, bound_success, bound_failure).calledOnce, 'called TruckCareDatabase to update active truck care group member');
        });
    });

    describe('addActiveTruckCareGroupMember', () => {
        it('calls TruckCareDatabase to update active user status to true', () => {
            let bound_success = () => {};
            let bound_failure = () => {};
            let req = {
                params: {
                    id: 1
                }
            };
            let res = {};

            let boundGetGroupsSuccess = sandbox.stub(GroupsHandlers.getGroupsSuccess, 'bind').returns(bound_success);
            let boundGetGroupsFailure = sandbox.stub(GroupsHandlers.getGroupsFailure, 'bind').returns(bound_failure);
            let saveActiveTruckCareUserActiveStatus = sandbox.stub(TruckCareDatabase, 'saveActiveTruckCareUserActiveStatus');

            GroupsController.removeActiveTruckCareGroupMember(req, res);

            assert(saveActiveTruckCareUserActiveStatus.withArgs(1, false, bound_success, bound_failure).calledOnce, 'called TruckCareDatabase to update active truck care group member');
        });
    });
});
