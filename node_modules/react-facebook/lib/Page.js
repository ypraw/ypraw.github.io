"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Parser = _interopRequireDefault(require("./Parser"));

var _getCurrentHref = _interopRequireDefault(require("./utils/getCurrentHref"));

var Page =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2.default)(Page, _PureComponent);

  function Page() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Page.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;
    handleParse();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        _this$props$href = _this$props.href,
        href = _this$props$href === void 0 ? (0, _getCurrentHref.default)() : _this$props$href,
        tabs = _this$props.tabs,
        hideCover = _this$props.hideCover,
        width = _this$props.width,
        height = _this$props.height,
        showFacepile = _this$props.showFacepile,
        hideCTA = _this$props.hideCTA,
        smallHeader = _this$props.smallHeader,
        adaptContainerWidth = _this$props.adaptContainerWidth,
        children = _this$props.children;
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
  };

  return Page;
}(_react.PureComponent);

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

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Parser.default, null, function (_ref) {
    var handleParse = _ref.handleParse;
    return _react.default.createElement(Page, (0, _extends2.default)({}, props, {
      handleParse: handleParse,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=Page.js.map