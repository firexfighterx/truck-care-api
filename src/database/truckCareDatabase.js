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

let activeTruckCareGroup = (success, failure) => {
    let group;
    db.select().from('activeGroup').then(success).catch(failure);
};

class TruckCareDatabase {
    static getAllTrucks(success, failure) {
        db.select().from('trucks').then(success).catch(failure);
    }

    static getActiveTruckCareGroup(success, failure) {
        activeTruckCareGroup(success, failure);
    }

    static saveActiveTruckCareUserActiveStatus(userId, isActive, success, failure) {
        db('user').where({userId}).update({isActive}).then(activeTruckCareGroup.bind(this, success, failure));
    }

    static getTruckDetailItems(truckNumber, success, failure) {
        Promise.all([
            db.select().from('truckdetailitems').where({truckNumber}), 
            db.select().from('outcomes').where({truckNumber})]).then(details => {
                return {
                    details: details[0],
                    outcomes: details[1]
                };
            }).then(success).catch(failure);
    }
}

export default TruckCareDatabase;
