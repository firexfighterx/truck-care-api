var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'trucks',
  password : 'FireDepartment2400'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});
