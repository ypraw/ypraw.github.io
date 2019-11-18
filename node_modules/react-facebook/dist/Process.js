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

class Process extends _react.Component {
  constructor(...args) {
    var _this;

    super(...args);
    _this = this;
    (0, _defineProperty2.default)(this, "state", {
      api: undefined
    });
    (0, _defineProperty2.default)(this, "handleProcess",
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(function* (fn, handleSuccess = () => {}) {
        _this.setState({
          data: undefined,
          error: undefined,
          loading: true
        });

        try {
          const {
            api
          } = _this.state;

          if (!api) {
            throw new Error('Facebook is not initialized. Wait for isReady');
          }

          const data = yield fn(api);

          _this.setState({
            data,
            loading: false
          }, handleSuccess);

          return data;
        } catch (error) {
          _this.setState({
            error,
            loading: false
          });

          throw error;
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    (0, _defineProperty2.default)(this, "handleReady", api => {
      this.setState({
        api
      });
    });
  }

  render() {
    const {
      children
    } = this.props;
    const {
      api,
      loading,
      data,
      error
    } = this.state;
    return _react.default.createElement(_Initialize.default, {
      onReady: this.handleReady
    }, children({
      loading: !api || loading,
      handleProcess: this.handleProcess,
      data,
      error
    }));
  }

}

exports.default = Process;
//# sourceMappingURL=Process.js.map