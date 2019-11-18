"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _clearUndefinedProperties = _interopRequireDefault(require("../utils/clearUndefinedProperties"));

var _useApi = _interopRequireDefault(require("./useApi"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = () => {
  const [, prepareApi] = (0, _useApi.default)();

  function handleShare(_x) {
    return _handleShare.apply(this, arguments);
  }

  function _handleShare() {
    _handleShare = (0, _asyncToGenerator2.default)(function* (options) {
      const {
        href,
        display,
        hashtag,
        redirectUri,
        quote,
        mobileIframe
      } = options,
            rest = (0, _objectWithoutProperties2.default)(options, ["href", "display", "hashtag", "redirectUri", "quote", "mobileIframe"]);
      const api = yield prepareApi();
      return api.ui((0, _clearUndefinedProperties.default)(_objectSpread({
        method: 'share',
        href,
        display,
        app_id: api.getAppId(),
        hashtag,
        redirect_uri: redirectUri,
        quote,
        mobile_iframe: mobileIframe
      }, rest)));
    });
    return _handleShare.apply(this, arguments);
  }

  return handleShare;
};

exports.default = _default;
//# sourceMappingURL=useShare.js.map