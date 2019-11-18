"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Initialize = _interopRequireDefault(require("./Initialize"));

class Parser extends _react.Component {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2.default)(this, "state", {});
    (0, _defineProperty2.default)(this, "handleReady", api => {
      this.setState({
        api
      }, this.handleParse);
    });
    (0, _defineProperty2.default)(this, "handleContainer", container => {
      this.setState({
        container
      }, this.handleParse);
    });
    (0, _defineProperty2.default)(this, "handleParse", () => {
      const {
        api,
        container
      } = this.state;

      if (!api || !container) {
        return;
      }

      api.parse(container);
    });
  }

  render() {
    const {
      className,
      children
    } = this.props;
    return _react.default.createElement("div", {
      className: className,
      ref: this.handleContainer
    }, _react.default.createElement(_Initialize.default, {
      onReady: this.handleReady
    }, children({
      handleParse: this.handleParse
    })));
  }

}

exports.default = Parser;
(0, _defineProperty2.default)(Parser, "defaultProps", {
  className: undefined
});
//# sourceMappingURL=Parser.js.map