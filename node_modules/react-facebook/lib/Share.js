"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _getCurrentHref = _interopRequireDefault(require("./utils/getCurrentHref"));

var _clearUndefinedProperties = _interopRequireDefault(require("./utils/clearUndefinedProperties"));

var _Process = _interopRequireDefault(require("./Process"));

var Share =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Share, _Component);

  function Share() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClick", function _callee2(evn) {
      var handleProcess;
      return _regenerator.default.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              evn.preventDefault();
              handleProcess = _this.props.handleProcess;
              return _context2.abrupt("return", handleProcess(function _callee(api) {
                var _this$props, _this$props$href, href, display, _this$props$appId, appId, hashtag, redirectURI, quote, mobileIframe;

                return _regenerator.default.async(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _this$props = _this.props, _this$props$href = _this$props.href, href = _this$props$href === void 0 ? (0, _getCurrentHref.default)() : _this$props$href, display = _this$props.display, _this$props$appId = _this$props.appId, appId = _this$props$appId === void 0 ? api.getAppId() : _this$props$appId, hashtag = _this$props.hashtag, redirectURI = _this$props.redirectURI, quote = _this$props.quote, mobileIframe = _this$props.mobileIframe;
                        return _context.abrupt("return", api.ui((0, _clearUndefinedProperties.default)({
                          method: 'share',
                          href: href,
                          display: display,
                          app_id: appId,
                          hashtag: hashtag,
                          redirect_uri: redirectURI,
                          quote: quote,
                          mobile_iframe: mobileIframe
                        })));

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                });
              }));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      });
    });
    return _this;
  }

  var _proto = Share.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        loading = _this$props2.loading,
        error = _this$props2.error,
        data = _this$props2.data;
    return children({
      loading: loading,
      handleClick: this.handleClick,
      error: error,
      data: data
    });
  };

  return Share;
}(_react.Component);

(0, _defineProperty2.default)(Share, "defaultProps", {
  href: undefined,
  hashtag: undefined,
  quote: undefined,
  mobileIframe: undefined,
  display: undefined,
  appId: undefined,
  redirectURI: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Process.default, null, function (_ref) {
    var loading = _ref.loading,
        handleProcess = _ref.handleProcess,
        data = _ref.data,
        error = _ref.error;
    return _react.default.createElement(Share, (0, _extends2.default)({}, props, {
      loading: loading,
      handleProcess: handleProcess,
      data: data,
      error: error,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=Share.js.map