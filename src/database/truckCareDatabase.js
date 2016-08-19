var wrapper = require('node-mysql-wrapper');
var db = wrapper.wrap("mysql://trucks:FireDepartment2400@127.0.0.1/TruckCare?debug=false&charset=utf8");

var truckCareDatabase = {};

truckCareDatabase.getAllTrucks = function(getAllTrucksCallback) {
    db.query('select * from trucks', getAllTrucksCallback);
};
module.exports = truckCareDatabase;
