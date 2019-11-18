"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _getCurrentHref = _interopRequireDefault(require("./utils/getCurrentHref"));

var _clearUndefinedProperties = _interopRequireDefault(require("./utils/clearUndefinedProperties"));

var _Process = _interopRequireDefault(require("./Process"));

class Send extends _react.Component {
  constructor(...args) {
    var _this;

    super(...args);
    _this = this;
    (0, _defineProperty2.default)(this, "handleClick",
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(function* (evn) {
        evn.preventDefault();
        const {
          handleProcess
        } = _this.props;
        return handleProcess(
        /*#__PURE__*/
        function () {
          var _ref2 = (0, _asyncToGenerator2.default)(function* (api) {
            const {
              link = (0, _getCurrentHref.default)(),
              display,
              appId = api.getAppId(),
              to,
              redirectURI
            } = _this.props;
            return api.ui((0, _clearUndefinedProperties.default)({
              method: 'send',
              link,
              display,
              app_id: appId,
              to,
              redirect_uri: redirectURI
            }));
          });

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  render() {
    const {
      children,
      loading
    } = this.props;
    return children({
      loading,
      handleClick: this.handleClick
    });
  }

}

(0, _defineProperty2.default)(Send, "defaultProps", {
  to: undefined,
  display: undefined,
  appId: undefined,
  redirectURI: undefined
});

var _default = (0, _react.forwardRef)((props, ref) => _react.default.createElement(_Process.default, null, ({
  loading,
  handleProcess
}) => _react.default.createElement(Send, (0, _extends2.default)({}, props, {
  loading: loading,
  handleProcess: handleProcess,
  ref: ref
}))));

exports.default = _default;
//# sourceMappingURL=Send.js.map