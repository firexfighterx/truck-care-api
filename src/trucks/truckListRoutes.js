var router = require('express').Router();
var truckCareDatabase = require('../database/truckCareDatabase');

//var receivingCheckInController = require('./receivingCheckInController');

module.exports = router;

router.get('/trucks/all', function (req, res) {
  truckCareDatabase.getItems(function(errors, results){
    res.statusCode = 200;
    res.send(results);
  });
});
