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

var _canUseDom = _interopRequireDefault(require("can-use-dom"));

var _Facebook = _interopRequireDefault(require("./Facebook"));

var _FacebookContext = _interopRequireDefault(require("./FacebookContext"));

let api = null;

class Facebook extends _react.Component {
  constructor(...args) {
    var _this;

    super(...args);
    _this = this;
    (0, _defineProperty2.default)(this, "state", {
      isReady: false
    });
    (0, _defineProperty2.default)(this, "handleInit",
    /*#__PURE__*/
    (0, _asyncToGenerator2.default)(function* () {
      // do not run if SSR
      if (!_canUseDom.default) {
        throw new Error('You can not use Facebook without DOM');
      }

      const {
        isReady
      } = _this.state;

      if (isReady) {
        return api;
      }

      if (!api) {
        const {
          domain,
          version,
          appId,
          cookie,
          status,
          xfbml,
          language,
          frictionlessRequests,
          wait,
          debug,
          chatSupport
        } = _this.props;
        api = new _Facebook.default({
          domain,
          appId,
          version,
          cookie,
          status,
          xfbml,
          language,
          frictionlessRequests,
          wait,
          debug,
          chatSupport
        });
      }

      yield api.init();

      if (!_this.state.isReady) {
        _this.setState({
          isReady: true
        });
      }

      return api;
    }));
  }

  componentDidMount() {
    const {
      wait
    } = this.props;

    if (!wait) {
      this.handleInit();
    }
  }

  render() {
    const {
      children
    } = this.props;
    const {
      isReady,
      error
    } = this.state;
    const {
      handleInit
    } = this;
    const value = {
      isReady,
      error,
      handleInit,
      api
    };
    return _react.default.createElement(_FacebookContext.default.Provider, {
      value: value
    }, children);
  }

}

exports.default = Facebook;
(0, _defineProperty2.default)(Facebook, "defaultProps", {
  version: 'v3.1',
  cookie: false,
  status: false,
  xfbml: false,
  language: 'en_US',
  frictionlessRequests: false,
  domain: 'connect.facebook.net',
  children: undefined,
  wait: false,
  debug: false,
  chatSupport: false
});
//# sourceMappingURL=FacebookProvider.js.map