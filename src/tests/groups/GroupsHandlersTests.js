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

            GroupsHandlers.getGroupsSuccess(req, []);

            assert.strictEqual(req.statusCode, 200, 'returned a 200 status code');
        });

        it('returns mapped object with groupName and members', () => {
            let actualMembers;
            let req = {
                send: (members) => {
                    actualMembers = members;
                }
            };
            let members = [
                {
                    groupName: 'Group Name',
                    userId: 1,
                    firstName: 'Foo',
                    lastName: 'Bar',
                    isActive: 0
                }, {
                    userId: 2,
                    firstName: 'Rumple',
                    lastName: 'Stilskin',
                    isActive: 1
                }
            ];
            let expected = {
                groupName: 'Group Name',
                members: [
                    {
                        id: 1,
                        name: 'Foo Bar'
                    }
                ],
                activeMembers: [
                    {
                        id: 2,
                        name: 'Rumple Stilskin'
                    }
                ]
            };

            GroupsHandlers.getGroupsSuccess(req, members);

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
