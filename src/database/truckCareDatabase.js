import knex from 'knex';
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
}

export default TruckCareDatabase;
