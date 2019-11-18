"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireWildcard(require("react"));

var _Initialize = _interopRequireDefault(require("./Initialize"));

var _Subscribe = _interopRequireDefault(require("./Subscribe"));

function getLoginStatus(_x) {
  return _getLoginStatus.apply(this, arguments);
}

function _getLoginStatus() {
  _getLoginStatus = (0, _asyncToGenerator2.default)(function* (api) {
    const response = yield api.getLoginStatus();
    return response.status;
  });
  return _getLoginStatus.apply(this, arguments);
}

class Status extends _react.Component {
  constructor(...args) {
    var _this;

    super(...args);
    _this = this;
    (0, _defineProperty2.default)(this, "state", {
      loading: true
    });
    (0, _defineProperty2.default)(this, "handleReady",
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(function* (api) {
        _this.setState({
          status: yield getLoginStatus(api),
          loading: false
        });
      });

      return function (_x2) {
        return _ref.apply(this, arguments);
      };
    }());
    (0, _defineProperty2.default)(this, "handleStatusChange", response => {
      this.setState({
        status: response.status,
        loading: false
      });
    });
  }

  render() {
    const {
      children
    } = this.props;
    const {
      status,
      loading
    } = this.state;
    return _react.default.createElement(_Initialize.default, {
      onReady: this.handleReady
    }, _react.default.createElement(_Subscribe.default, {
      event: "auth.statusChange",
      onChange: this.handleStatusChange
    }, children({
      status,
      loading
    })));
  }

}

exports.default = Status;
//# sourceMappingURL=Status.js.map