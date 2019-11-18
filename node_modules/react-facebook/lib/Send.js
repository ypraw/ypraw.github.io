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

var Send =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Send, _Component);

  function Send() {
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
                var _this$props, _this$props$link, link, display, _this$props$appId, appId, to, redirectURI;

                return _regenerator.default.async(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _this$props = _this.props, _this$props$link = _this$props.link, link = _this$props$link === void 0 ? (0, _getCurrentHref.default)() : _this$props$link, display = _this$props.display, _this$props$appId = _this$props.appId, appId = _this$props$appId === void 0 ? api.getAppId() : _this$props$appId, to = _this$props.to, redirectURI = _this$props.redirectURI;
                        return _context.abrupt("return", api.ui((0, _clearUndefinedProperties.default)({
                          method: 'send',
                          link: link,
                          display: display,
                          app_id: appId,
                          to: to,
                          redirect_uri: redirectURI
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

  var _proto = Send.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        loading = _this$props2.loading;
    return children({
      loading: loading,
      handleClick: this.handleClick
    });
  };

  return Send;
}(_react.Component);

(0, _defineProperty2.default)(Send, "defaultProps", {
  to: undefined,
  display: undefined,
  appId: undefined,
  redirectURI: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Process.default, null, function (_ref) {
    var loading = _ref.loading,
        handleProcess = _ref.handleProcess;
    return _react.default.createElement(Send, (0, _extends2.default)({}, props, {
      loading: loading,
      handleProcess: handleProcess,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=Send.js.map