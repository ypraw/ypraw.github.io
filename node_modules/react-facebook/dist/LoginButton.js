"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LoginButton;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _reactSpinnerChildren = _interopRequireDefault(require("react-spinner-children"));

var _Login = _interopRequireDefault(require("./Login"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function LoginButton(props) {
  const {
    children,
    className,
    spinner,
    spinnerConfig
  } = props,
        rest = (0, _objectWithoutProperties2.default)(props, ["children", "className", "spinner", "spinnerConfig"]);
  return _react.default.createElement(_Login.default, rest, ({
    loading,
    handleClick
  }) => _react.default.createElement("button", {
    type: "button",
    className: className,
    onClick: handleClick,
    disabled: loading
  }, children, spinner && loading && _react.default.createElement(_reactSpinnerChildren.default, {
    config: spinnerConfig
  })));
}

LoginButton.defaultProps = _objectSpread({}, _Login.default.defaultProps, {
  className: undefined,
  spinnerConfig: {},
  spinner: true
});
//# sourceMappingURL=LoginButton.js.map