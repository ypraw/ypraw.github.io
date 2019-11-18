"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Initialize = _interopRequireDefault(require("./Initialize"));

var _Subscribe = _interopRequireDefault(require("./Subscribe"));

var _Fields = _interopRequireDefault(require("./constants/Fields"));

var _LoginStatus = _interopRequireDefault(require("./constants/LoginStatus"));

class Profile extends _react.Component {
  constructor(...args) {
    var _this;

    super(...args);
    _this = this;
    (0, _defineProperty2.default)(this, "state", {
      loading: true
    });
    (0, _defineProperty2.default)(this, "handleReady",
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(function* (api) {
        _this.api = api;

        _this.updateProfile();
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    (0, _defineProperty2.default)(this, "handleStatusChange", () => {
      this.updateProfile();
    });
  }

  updateProfile() {
    var _this2 = this;

    return (0, _asyncToGenerator2.default)(function* () {
      const {
        api,
        props: {
          fields
        }
      } = _this2;

      if (!api) {
        return;
      }

      try {
        const response = yield api.getLoginStatus();

        if (response.status !== _LoginStatus.default.CONNECTED) {
          _this2.setState({
            profile: undefined,
            loading: false,
            error: undefined
          });

          return;
        }

        const profile = yield api.getProfile({
          fields
        });

        _this2.setState({
          profile,
          loading: false,
          error: undefined
        });
      } catch (error) {
        _this2.setState({
          profile: undefined,
          loading: false,
          error
        });
      }
    })();
  }

  render() {
    const {
      children
    } = this.props;
    const {
      profile,
      loading,
      error
    } = this.state;
    return _react.default.createElement(_Initialize.default, {
      onReady: this.handleReady
    }, _react.default.createElement(_Subscribe.default, {
      event: "auth.statusChange",
      onChange: this.handleStatusChange
    }, children({
      profile,
      loading,
      error
    })));
  }

}

exports.default = Profile;
(0, _defineProperty2.default)(Profile, "defaultProps", {
  fields: _Fields.default
});
//# sourceMappingURL=Profile.js.map