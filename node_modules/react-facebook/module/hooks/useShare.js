import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import clearUndefinedProperties from '../utils/clearUndefinedProperties';
import useApi from './useApi';
export default (() => {
  const [, prepareApi] = useApi();

  function handleShare(_x) {
    return _handleShare.apply(this, arguments);
  }

  function _handleShare() {
    _handleShare = _asyncToGenerator(function* (options) {
      const {
        href,
        display,
        hashtag,
        redirectUri,
        quote,
        mobileIframe
      } = options,
            rest = _objectWithoutProperties(options, ["href", "display", "hashtag", "redirectUri", "quote", "mobileIframe"]);

      const api = yield prepareApi();
      return api.ui(clearUndefinedProperties(_objectSpread({
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
});
//# sourceMappingURL=useShare.js.map