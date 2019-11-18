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

var Process =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Process, _Component);

  function Process() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      api: undefined
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleProcess", function _callee(fn, handleSuccess) {
      var api, data;
      return _regenerator.default.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (handleSuccess === void 0) {
                handleSuccess = function handleSuccess() {};
              }

              _this.setState({
                data: undefined,
                error: undefined,
                loading: true
              });

              _context.prev = 2;
              api = _this.state.api;

              if (api) {
                _context.next = 6;
                break;
              }

              throw new Error('Facebook is not initialized. Wait for isReady');

            case 6:
              _context.next = 8;
              return _regenerator.default.awrap(fn(api));

            case 8:
              data = _context.sent;

              _this.setState({
                data: data,
                loading: false
              }, handleSuccess);

              return _context.abrupt("return", data);

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](2);

              _this.setState({
                error: _context.t0,
                loading: false
              });

              throw _context.t0;

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[2, 13]]);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleReady", function (api) {
      _this.setState({
        api: api
      });
    });
    return _this;
  }

  var _proto = Process.prototype;

  _proto.render = function render() {
    var children = this.props.children;
    var _this$state = this.state,
        api = _this$state.api,
        loading = _this$state.loading,
        data = _this$state.data,
        error = _this$state.error;
    return _react.default.createElement(_Initialize.default, {
      onReady: this.handleReady
    }, children({
      loading: !api || loading,
      handleProcess: this.handleProcess,
      data: data,
      error: error
    }));
  };

  return Process;
}(_react.Component);

exports.default = Process;
//# sourceMappingURL=Process.js.map