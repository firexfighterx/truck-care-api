'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TruckCareDatabase = require('../../database/TruckCareDatabase');

var _TruckCareDatabase2 = _interopRequireDefault(_TruckCareDatabase);

var _CategoryDetailsHandler = require('./CategoryDetailsHandler');

var _CategoryDetailsHandler2 = _interopRequireDefault(_CategoryDetailsHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CategoryDetailsController = function () {
    function CategoryDetailsController() {
        _classCallCheck(this, CategoryDetailsController);
    }

    _createClass(CategoryDetailsController, null, [{
        key: 'getCategoryDetails',
        value: function getCategoryDetails(req, res) {
            _TruckCareDatabase2.default.getTruckDetailItems(req.params.truckNumber, _CategoryDetailsHandler2.default.getCategoriesAndDetailsSuccess.bind(this, res), _CategoryDetailsHandler2.default.getCategoriesAndDetailsFailure.bind(this, res));
        }
    }]);

    return CategoryDetailsController;
}();

exports.default = CategoryDetailsController;