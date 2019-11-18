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

class Feed extends _react.Component {
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
              redirectURI,
              from,
              to,
              picture,
              source,
              name,
              caption,
              description,
              dataRef
            } = _this.props;
            return api.ui((0, _clearUndefinedProperties.default)({
              method: 'feed',
              link,
              display,
              app_id: appId,
              redirect_uri: redirectURI,
              from,
              to,
              picture,
              source,
              name,
              caption,
              description,
              ref: dataRef
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
      loading,
      error,
      data
    } = this.props;
    return children({
      loading,
      handleClick: this.handleClick,
      error,
      data
    });
  }

}

(0, _defineProperty2.default)(Feed, "defaultProps", {
  link: undefined,
  display: undefined,
  appId: undefined,
  redirectURI: undefined,
  from: undefined,
  to: undefined,
  source: undefined,
  picture: undefined,
  name: undefined,
  caption: undefined,
  description: undefined,
  dataRef: undefined
});

var _default = (0, _react.forwardRef)((props, ref) => _react.default.createElement(_Process.default, null, ({
  loading,
  handleProcess,
  error,
  data
}) => _react.default.createElement(Feed, (0, _extends2.default)({}, props, {
  loading: loading,
  handleProcess: handleProcess,
  data: data,
  error: error,
  ref: ref
}))));

exports.default = _default;
//# sourceMappingURL=Feed.js.map