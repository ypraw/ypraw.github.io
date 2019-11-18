"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _FacebookContext = _interopRequireDefault(require("./FacebookContext"));

class Initialize extends _react.Component {
  componentDidMount() {
    this.$isMounted = true;
    this.prepare();
  }

  componentWillUnmount() {
    this.$isMounted = false;
  }

  prepare() {
    var _this = this;

    return (0, _asyncToGenerator2.default)(function* () {
      const {
        onReady,
        handleInit
      } = _this.props;
      const api = yield handleInit();

      if (onReady && _this.$isMounted) {
        onReady(api);
      }
    })();
  }

  render() {
    const {
      children,
      isReady,
      api
    } = this.props;
    const childrenProps = {
      isReady,
      api
    };

    if (typeof children === 'function') {
      return children(childrenProps);
    }

    return children;
  }

}

(0, _defineProperty2.default)(Initialize, "defaultProps", {
  onReady: undefined,
  api: undefined
});

var _default = (0, _react.forwardRef)((props, ref) => _react.default.createElement(_FacebookContext.default.Consumer, null, ({
  handleInit,
  isReady,
  api
}) => _react.default.createElement(Initialize, (0, _extends2.default)({}, props, {
  handleInit: handleInit,
  isReady: isReady,
  api: api,
  ref: ref
}))));

exports.default = _default;
//# sourceMappingURL=Initialize.js.map