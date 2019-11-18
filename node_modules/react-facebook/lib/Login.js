"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Process = _interopRequireDefault(require("./Process"));

var _Fields = _interopRequireDefault(require("./constants/Fields"));

var Login =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Login, _Component);

  function Login() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClick", function _callee2(evn) {
      var _this$props, handleProcess, onCompleted, onError, onSuccess;

      return _regenerator.default.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              evn.preventDefault();
              _this$props = _this.props, handleProcess = _this$props.handleProcess, onCompleted = _this$props.onCompleted, onError = _this$props.onError, onSuccess = _this$props.onSuccess;
              _context2.prev = 2;
              _context2.next = 5;
              return _regenerator.default.awrap(handleProcess(function _callee(api) {
                var _this$props2, scope, fields, returnScopes, rerequest, reauthorize, eventKey, loginQpts, authType, loginResponse, data;

                return _regenerator.default.async(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _this$props2 = _this.props, scope = _this$props2.scope, fields = _this$props2.fields, returnScopes = _this$props2.returnScopes, rerequest = _this$props2.rerequest, reauthorize = _this$props2.reauthorize, eventKey = _this$props2.eventKey;
                        loginQpts = {
                          scope: scope
                        };
                        authType = [];

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

                        _context.next = 9;
                        return _regenerator.default.awrap(api.login(loginQpts));

                      case 9:
                        loginResponse = _context.sent;

                        if (!(loginResponse.status !== 'connected')) {
                          _context.next = 12;
                          break;
                        }

                        throw new Error('Unauthorized user');

                      case 12:
                        _context.next = 14;
                        return _regenerator.default.awrap(api.getTokenDetailWithProfile({
                          fields: fields
                        }, loginResponse));

                      case 14:
                        data = _context.sent;

                        if (!onCompleted) {
                          _context.next = 18;
                          break;
                        }

                        _context.next = 18;
                        return _regenerator.default.awrap(onCompleted((0, _extends2.default)({}, data, {
                          eventKey: eventKey
                        })));

                      case 18:
                        return _context.abrupt("return", data);

                      case 19:
                      case "end":
                        return _context.stop();
                    }
                  }
                });
              }, onSuccess));

            case 5:
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](2);

              if (onError) {
                onError(_context2.t0);
              }

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[2, 7]]);
    });
    return _this;
  }

  var _proto = Login.prototype;

  _proto.render = function render() {
    var _this$props3 = this.props,
        children = _this$props3.children,
        loading = _this$props3.loading,
        error = _this$props3.error,
        data = _this$props3.data;
    return children({
      loading: loading,
      handleClick: this.handleClick,
      error: error,
      data: data
    });
  };

  return Login;
}(_react.Component);

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

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Process.default, null, function (_ref) {
    var loading = _ref.loading,
        handleProcess = _ref.handleProcess,
        data = _ref.data,
        error = _ref.error;
    return _react.default.createElement(Login, (0, _extends2.default)({}, props, {
      loading: loading,
      handleProcess: handleProcess,
      data: data,
      error: error,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=Login.js.map