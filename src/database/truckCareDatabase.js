import knex from 'knex';
import _ from 'lodash';
let db = knex({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'trucks',
        password: 'FireDepartment2400',
        database: 'TruckCare'
    }
});

class TruckCareDatabase {
    static getAllTrucks(success, failure) {
        db.select().from('trucks').then(success).catch(failure);
    }

    static getActiveTruckCareGroup(success, failure) {
        let group;
        db.select().from('groups').where({isActive: true}).then(activeGroup => {
            group = activeGroup[0];
            return db.select().from('teams').where({groupId: group.groupId});
        }).then(members => {
            success(group, members);
        }).catch(failure);
    }
}

export default TruckCareDatabase;
