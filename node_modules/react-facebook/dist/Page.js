"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Parser = _interopRequireDefault(require("./Parser"));

var _getCurrentHref = _interopRequireDefault(require("./utils/getCurrentHref"));

class Page extends _react.PureComponent {
  componentDidUpdate() {
    const {
      handleParse
    } = this.props;
    handleParse();
  }

  render() {
    const {
      style,
      href = (0, _getCurrentHref.default)(),
      tabs,
      hideCover,
      width,
      height,
      showFacepile,
      hideCTA,
      smallHeader,
      adaptContainerWidth,
      children
    } = this.props;
    return _react.default.createElement("div", {
      className: "fb-page",
      style: style,
      "data-tabs": tabs,
      "data-hide-cover": hideCover,
      "data-show-facepile": showFacepile,
      "data-hide-cta": hideCTA,
      "data-href": href,
      "data-small-header": smallHeader,
      "data-adapt-container-width": adaptContainerWidth,
      "data-height": height,
      "data-width": width
    }, children);
  }

}

(0, _defineProperty2.default)(Page, "defaultProps", {
  width: undefined,
  height: undefined,
  tabs: undefined,
  hideCover: undefined,
  showFacepile: undefined,
  hideCTA: undefined,
  smallHeader: undefined,
  adaptContainerWidth: undefined,
  children: undefined,
  style: undefined,
  href: undefined
});

var _default = (0, _react.forwardRef)((props, ref) => _react.default.createElement(_Parser.default, null, ({
  handleParse
}) => _react.default.createElement(Page, (0, _extends2.default)({}, props, {
  handleParse: handleParse,
  ref: ref
}))));

exports.default = _default;
//# sourceMappingURL=Page.js.map