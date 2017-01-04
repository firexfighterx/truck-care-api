'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _TruckListRoutes = require('./routes/trucks/TruckListRoutes');

var _TruckListRoutes2 = _interopRequireDefault(_TruckListRoutes);

var _GroupRoutes = require('./routes/groups/GroupRoutes');

var _GroupRoutes2 = _interopRequireDefault(_GroupRoutes);

var _CategoryDetailRoutes = require('./routes/categorydetails/CategoryDetailRoutes');

var _CategoryDetailRoutes2 = _interopRequireDefault(_CategoryDetailRoutes);

var _PerformTruckCareRoutes = require('./routes/perform-truck-care/PerformTruckCareRoutes');

var _PerformTruckCareRoutes2 = _interopRequireDefault(_PerformTruckCareRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use('/api', _TruckListRoutes2.default.bind(_TruckListRoutes2.default));
app.use('/api', _GroupRoutes2.default.bind(_GroupRoutes2.default));
app.use('/api', _CategoryDetailRoutes2.default.bind(_CategoryDetailRoutes2.default));
app.use('/api', _PerformTruckCareRoutes2.default.bind(_PerformTruckCareRoutes2.default));

app.listen(3000, function () {
    console.log('Truck Care API listening on port 3000');
});