import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import Spinner from 'react-spinner-children';
import Login from './Login';
export default function LoginButton(props) {
  const {
    children,
    className,
    spinner,
    spinnerConfig
  } = props,
        rest = _objectWithoutProperties(props, ["children", "className", "spinner", "spinnerConfig"]);

  return React.createElement(Login, rest, ({
    loading,
    handleClick
  }) => React.createElement("button", {
    type: "button",
    className: className,
    onClick: handleClick,
    disabled: loading
  }, children, spinner && loading && React.createElement(Spinner, {
    config: spinnerConfig
  })));
}
LoginButton.defaultProps = _objectSpread({}, Login.defaultProps, {
  className: undefined,
  spinnerConfig: {},
  spinner: true
});
//# sourceMappingURL=LoginButton.js.map