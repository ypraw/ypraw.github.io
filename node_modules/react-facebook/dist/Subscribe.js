"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Initialize = _interopRequireDefault(require("./Initialize"));

class LoginStatus extends _react.Component {
  constructor(..._args) {
    var _this;

    super(..._args);
    _this = this;
    (0, _defineProperty2.default)(this, "state", {});
    (0, _defineProperty2.default)(this, "handleReady",
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(function* (api) {
        const {
          event
        } = _this.props;

        _this.setState({
          api
        });

        yield api.subscribe(event, _this.handleChange);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    (0, _defineProperty2.default)(this, "handleChange", (...args) => {
      const {
        onChange
      } = this.props;

      if (onChange) {
        onChange(...args);
      }
    });
  }

  componentWillUnmount() {
    const {
      state: {
        api
      },
      props: {
        event
      }
    } = this;

    if (api) {
      api.unsubscribe(event, this.handleChange);
    }
  }

  render() {
    const {
      children
    } = this.props;
    return _react.default.createElement(_Initialize.default, {
      onReady: this.handleReady
    }, children);
  }

}

exports.default = LoginStatus;
(0, _defineProperty2.default)(LoginStatus, "defaultProps", {
  onChange: undefined
});
//# sourceMappingURL=Subscribe.js.map