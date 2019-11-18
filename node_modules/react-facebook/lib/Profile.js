"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Initialize = _interopRequireDefault(require("./Initialize"));

var _Subscribe = _interopRequireDefault(require("./Subscribe"));

var _Fields = _interopRequireDefault(require("./constants/Fields"));

var _LoginStatus = _interopRequireDefault(require("./constants/LoginStatus"));

var Profile =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Profile, _Component);

  function Profile() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      loading: true
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleReady", function _callee(api) {
      return _regenerator.default.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.api = api;

              _this.updateProfile();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleStatusChange", function () {
      _this.updateProfile();
    });
    return _this;
  }

  var _proto = Profile.prototype;

  _proto.updateProfile = function updateProfile() {
    var api, fields, response, profile;
    return _regenerator.default.async(function updateProfile$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            api = this.api, fields = this.props.fields;

            if (api) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return");

          case 3:
            _context2.prev = 3;
            _context2.next = 6;
            return _regenerator.default.awrap(api.getLoginStatus());

          case 6:
            response = _context2.sent;

            if (!(response.status !== _LoginStatus.default.CONNECTED)) {
              _context2.next = 10;
              break;
            }

            this.setState({
              profile: undefined,
              loading: false,
              error: undefined
            });
            return _context2.abrupt("return");

          case 10:
            _context2.next = 12;
            return _regenerator.default.awrap(api.getProfile({
              fields: fields
            }));

          case 12:
            profile = _context2.sent;
            this.setState({
              profile: profile,
              loading: false,
              error: undefined
            });
            _context2.next = 19;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](3);
            this.setState({
              profile: undefined,
              loading: false,
              error: _context2.t0
            });

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, null, this, [[3, 16]]);
  };

  _proto.render = function render() {
    var children = this.props.children;
    var _this$state = this.state,
        profile = _this$state.profile,
        loading = _this$state.loading,
        error = _this$state.error;
    return _react.default.createElement(_Initialize.default, {
      onReady: this.handleReady
    }, _react.default.createElement(_Subscribe.default, {
      event: "auth.statusChange",
      onChange: this.handleStatusChange
    }, children({
      profile: profile,
      loading: loading,
      error: error
    })));
  };

  return Profile;
}(_react.Component);

exports.default = Profile;
(0, _defineProperty2.default)(Profile, "defaultProps", {
  fields: _Fields.default
});
//# sourceMappingURL=Profile.js.map