"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInternetExplorerBefore;
/*
 * This detection method identifies Internet Explorers up until version 11.
 *
 * Reference: https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx
 */
function isInternetExplorerBefore(version) {
  var iematch = /MSIE ([0-9]+)/g.exec(window.navigator.userAgent);

  return iematch ? +iematch[1] < version : false;
}