"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getCurrentHref;

var _canUseDom = _interopRequireDefault(require("can-use-dom"));

function getCurrentHref() {
  if (!_canUseDom.default) {
    return 'https://www.facebook.com';
  }

  return window.location.href;
}
//# sourceMappingURL=getCurrentHref.js.map