var wrapper =  require('node-mysql-wrapper');
var db = wrapper.wrap("mysql://trucks:FireDepartment2400@127.0.0.1/trucks?debug=false&charset=utf8");

function getItems(itemsCallback) {
  db.query('select * from trucks', function (errors, results){
    itemsCallback(errors, results)
  });
}
module.exports = { getItems: getItems };
