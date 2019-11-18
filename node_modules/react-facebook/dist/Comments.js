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

class Comments extends _react.PureComponent {
  componentDidUpdate() {
    const {
      handleParse
    } = this.props;
    handleParse();
  }

  render() {
    const {
      colorScheme,
      href = (0, _getCurrentHref.default)(),
      numPosts,
      orderBy,
      width,
      children,
      mobile
    } = this.props;
    return _react.default.createElement("div", {
      className: "fb-comments",
      "data-colorscheme": colorScheme,
      "data-numposts": numPosts,
      "data-href": href,
      "data-order-by": orderBy,
      "data-width": width,
      "data-skin": colorScheme,
      "data-mobile": mobile
    }, children);
  }

}

(0, _defineProperty2.default)(Comments, "defaultProps", {
  href: undefined,
  numPosts: undefined,
  orderBy: undefined,
  width: undefined,
  colorScheme: undefined,
  children: undefined,
  mobile: undefined
});

var _default = (0, _react.forwardRef)((props, ref) => _react.default.createElement(_Parser.default, null, ({
  handleParse
}) => _react.default.createElement(Comments, (0, _extends2.default)({}, props, {
  handleParse: handleParse,
  ref: ref
}))));

exports.default = _default;
//# sourceMappingURL=Comments.js.map