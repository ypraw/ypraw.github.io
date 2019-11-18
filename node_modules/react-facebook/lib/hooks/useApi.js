"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = require("react");

var _canUseDom = _interopRequireDefault(require("can-use-dom"));

var _FacebookContext = _interopRequireDefault(require("../FacebookContext"));

var _default = function _default(onReady) {
  var _useContext = (0, _react.useContext)(_FacebookContext.default),
      handleInit = _useContext.handleInit,
      api = _useContext.api;

  (0, _react.useState)(function _callee() {
    var api2;
    return _regenerator.default.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!_canUseDom.default) {
              _context.next = 5;
              break;
            }

            _context.next = 3;
            return _regenerator.default.awrap(handleInit());

          case 3:
            api2 = _context.sent;

            if (onReady) {
              onReady(api2);
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  return [api, handleInit];
};

exports.default = _default;
//# sourceMappingURL=useApi.js.map