"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _clearUndefinedProperties = _interopRequireDefault(require("../utils/clearUndefinedProperties"));

var _useApi2 = _interopRequireDefault(require("./useApi"));

var _default = function _default() {
  var _useApi = (0, _useApi2.default)(),
      prepareApi = _useApi[1];

  function handleShare(options) {
    var href, display, hashtag, redirectUri, quote, mobileIframe, rest, api;
    return _regenerator.default.async(function handleShare$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            href = options.href, display = options.display, hashtag = options.hashtag, redirectUri = options.redirectUri, quote = options.quote, mobileIframe = options.mobileIframe, rest = (0, _objectWithoutPropertiesLoose2.default)(options, ["href", "display", "hashtag", "redirectUri", "quote", "mobileIframe"]);
            _context.next = 3;
            return _regenerator.default.awrap(prepareApi());

          case 3:
            api = _context.sent;
            return _context.abrupt("return", api.ui((0, _clearUndefinedProperties.default)((0, _extends2.default)({
              method: 'share',
              href: href,
              display: display,
              app_id: api.getAppId(),
              hashtag: hashtag,
              redirect_uri: redirectUri,
              quote: quote,
              mobile_iframe: mobileIframe
            }, rest))));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  return handleShare;
};

exports.default = _default;
//# sourceMappingURL=useShare.js.map