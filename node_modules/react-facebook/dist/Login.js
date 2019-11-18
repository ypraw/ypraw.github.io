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

var _Process = _interopRequireDefault(require("./Process"));

var _Fields = _interopRequireDefault(require("./constants/Fields"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

class Login extends _react.Component {
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
          handleProcess,
          onCompleted,
          onError,
          onSuccess
        } = _this.props;

        try {
          yield handleProcess(
          /*#__PURE__*/
          function () {
            var _ref2 = (0, _asyncToGenerator2.default)(function* (api) {
              const {
                scope,
                fields,
                returnScopes,
                rerequest,
                reauthorize,
                eventKey
              } = _this.props;
              const loginQpts = {
                scope
              };
              const authType = [];

              if (returnScopes) {
                loginQpts.return_scopes = true;
              }

              if (rerequest) {
                authType.push('rerequest');
              }

              if (reauthorize) {
                authType.push('reauthenticate');
              }

              if (authType.length) {
                loginQpts.auth_type = authType.join(',');
              }

              const loginResponse = yield api.login(loginQpts);

              if (loginResponse.status !== 'connected') {
                throw new Error('Unauthorized user');
              }

              const data = yield api.getTokenDetailWithProfile({
                fields
              }, loginResponse);

              if (onCompleted) {
                yield onCompleted(_objectSpread({}, data, {
                  eventKey
                }));
              }

              return data;
            });

            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }(), onSuccess);
        } catch (error) {
          if (onError) {
            onError(error);
          }
        }
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

(0, _defineProperty2.default)(Login, "defaultProps", {
  scope: '',
  fields: _Fields.default,
  returnScopes: false,
  rerequest: false,
  reauthorize: false,
  onCompleted: undefined,
  onError: undefined,
  eventKey: undefined
});

var _default = (0, _react.forwardRef)((props, ref) => _react.default.createElement(_Process.default, null, ({
  loading,
  handleProcess,
  data,
  error
}) => _react.default.createElement(Login, (0, _extends2.default)({}, props, {
  loading: loading,
  handleProcess: handleProcess,
  data: data,
  error: error,
  ref: ref
}))));

exports.default = _default;
//# sourceMappingURL=Login.js.map