var router = require('express').Router();
var truckCareDatabase = require('../database/truckCareDatabase');

//var receivingCheckInController = require('./receivingCheckInController');

module.exports = router;

router.get('/', function (req, res) {
  truckCareDatabase.getItems(function(errors, results){
    res.send(results);
  });
});
