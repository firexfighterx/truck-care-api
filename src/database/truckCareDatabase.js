import {
    wrap
} from "node-mysql-wrapper";
let db = wrap('mysql://trucks:FireDepartment2400@127.0.0.1/TruckCare?debug=false&charset=utf8');

class TruckCareDatabase {
    getAllTrucks(getAllTrucksCallback) {
        db.query('select * from trucks', getAllTrucksCallback);
    }
}

export default new TruckCareDatabase();
