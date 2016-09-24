import sinon from 'sinon';
import assert from 'assert';
import GroupsHandlers from '../../routes/groups/GroupsHandlers';

describe('GroupsHandlers', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('getGroupsSuccess', () => {
        it('returns success response', () => {
            let req = {
                send: () => {}
            };

            GroupsHandlers.getGroupsSuccess(req, '', []);

            assert.strictEqual(req.statusCode, 200, 'returned a 200 status code');
        });

        it('returns mapped object with groupName and members', () => {
            let actualMembers;
            let req = {
                send: (members) => {
                    actualMembers = members;
                }
            };
            let group = {
                groupName: 'Group Name'
            };
            let members = [
                {
                    id: 1,
                    firstName: 'Foo',
                    lastName: 'Bar'
                }
            ];
            let expected = {
                groupName: group.groupName,
                members: [
                    {
                        id: 1,
                        name: 'Foo Bar'
                    }
                ]
            };

            GroupsHandlers.getGroupsSuccess(req, group, members);

            assert.deepEqual(actualMembers, expected, 'transposed to item to return');
        });
    });

    describe('getGroupsFailure', () => {
        it('returns a status code of 500 and an empty object', () => {
            let actual;
            let req = {
                send: (members) => {
                    actual = members;
                }
            };

            GroupsHandlers.getGroupsFailure(req);

            assert.strictEqual(req.statusCode, 500, '500 status code was returned');
            assert.deepEqual(actual, {}, 'empty object was sent');
        });
    });
});
