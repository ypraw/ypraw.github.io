"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

var _reactInstantsearchCore = require("react-instantsearch-core");

var Index = (0, _reactInstantsearchCore.createIndex)({
  Root: _reactNative.View
});
var _default = Index;
exports.default = _default;