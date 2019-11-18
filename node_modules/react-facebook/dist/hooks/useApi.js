"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = require("react");

var _canUseDom = _interopRequireDefault(require("can-use-dom"));

var _FacebookContext = _interopRequireDefault(require("../FacebookContext"));

var _default = onReady => {
  const {
    handleInit,
    api
  } = (0, _react.useContext)(_FacebookContext.default);
  (0, _react.useState)(
  /*#__PURE__*/
  (0, _asyncToGenerator2.default)(function* () {
    if (_canUseDom.default) {
      const api2 = yield handleInit();

      if (onReady) {
        onReady(api2);
      }
    }
  }));
  return [api, handleInit];
};

exports.default = _default;
//# sourceMappingURL=useApi.js.map