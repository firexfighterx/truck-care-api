'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _TruckListRoutes = require('./trucks/TruckListRoutes');

var _TruckListRoutes2 = _interopRequireDefault(_TruckListRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use('/api', _TruckListRoutes2.default.bind(_TruckListRoutes2.default));

app.listen(3000, function () {
    console.log('Truck Care API listening on port 3000');
});