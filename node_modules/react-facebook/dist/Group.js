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

class Group extends _react.PureComponent {
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
      width,
      showSocialContext,
      showMetaData,
      children,
      skin
    } = this.props;
    return _react.default.createElement("div", {
      className: "fb-group",
      style: style,
      "data-href": href,
      "data-width": width,
      "data-show-social-context": showSocialContext,
      "data-show-metadata": showMetaData,
      "data-skin": skin
    }, children);
  }

}

(0, _defineProperty2.default)(Group, "defaultProps", {
  showSocialContext: undefined,
  showMetaData: undefined,
  width: undefined,
  children: undefined,
  style: undefined,
  href: undefined,
  skin: undefined
});

var _default = (0, _react.forwardRef)((props, ref) => _react.default.createElement(_Parser.default, null, ({
  handleParse
}) => _react.default.createElement(Group, (0, _extends2.default)({}, props, {
  handleParse: handleParse,
  ref: ref
}))));

exports.default = _default;
//# sourceMappingURL=Group.js.map