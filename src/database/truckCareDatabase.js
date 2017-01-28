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
    db.select().from('activeGroup').then(success).catch(failure);
};

class TruckCareDatabase {
    static getAllTrucks(success, failure) {
        db.select().from('trucks').then(success).catch(failure);
    }

    static getActiveTruckCareGroup(success, failure) {
        activeTruckCareGroup(success, failure);
    }

    static removeUserActiveStatus(userId, success, failure) {
        db('active_user').where({
            userId
        }).del().then(activeTruckCareGroup.bind(this, success, failure));
    }

    static addUserActiveStatus(userId, success, failure) {
        db('active_user').insert({
            userId
        }).then(activeTruckCareGroup.bind(this, success, failure));
    }

    static getTruckDetailItems(truckNumber, success, failure) {
        db.select().from('truckdetailitems').where({
            truckNumber
        }).then(success).catch(failure);
    }

    static createTruckCareOutcome(args, success, failure) {
        db('outcome').returning('outcomeId').insert({
            wasOutcomeGood: args.outcome,
            datePerformed: new Date(),
            responsibilityId: args.responsibilityId,
            truckId: args.truckId
        }).then(id => {
            let users = args.users.map(user => {
                return {userId: user, outcomeId: id[0]}
            });
            return db('outcomeUsers').insert(users);
        }).then(success).catch(failure);
    }

    static isRequestValid(args, success, failure) {
        let dbCalls = [
            db.select('userId').from('active_user').whereIn('userId', args.users),
            db('responsibility').count('* as count').where({truckId: args.truckId, responsibilityId: args.responsibilityId})
        ];

        Promise.all(dbCalls).then(success).catch(failure);
    }
}

export default TruckCareDatabase;