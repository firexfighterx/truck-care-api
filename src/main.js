var express = require('express');
var connection = require('./database/truckCareDatabase');
var app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.get('/', function (req, res) {
  connection.getItems(function(errors, results){
    res.send(results);
  });
});



app.listen(3000, function () {
  console.log('Truck Care API listening on port 3000');
});
