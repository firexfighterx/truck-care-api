'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CategoryDetailsHandler = function () {
    function CategoryDetailsHandler() {
        _classCallCheck(this, CategoryDetailsHandler);
    }

    _createClass(CategoryDetailsHandler, null, [{
        key: 'getCategoriesAndDetailsSuccess',
        value: function getCategoriesAndDetailsSuccess(res, details) {
            res.statusCode = 200;
            var result = _lodash2.default.chain(details).groupBy('category').toPairs().map(function (pair) {
                return _lodash2.default.zipObject(['category', 'responsibilities'], pair);
            }).value();
            res.send(result);
        }
    }, {
        key: 'getCategoriesAndDetailsFailure',
        value: function getCategoriesAndDetailsFailure(res) {
            res.statusCode = 500;
            res.send([]);
        }
    }]);

    return CategoryDetailsHandler;
}();

exports.default = CategoryDetailsHandler;
;