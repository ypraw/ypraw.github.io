import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { forwardRef, PureComponent } from 'react';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';

class Comments extends PureComponent {
  componentDidUpdate() {
    const {
      handleParse
    } = this.props;
    handleParse();
  }

  render() {
    const {
      colorScheme,
      href = getCurrentHref(),
      numPosts,
      orderBy,
      width,
      children,
      mobile
    } = this.props;
    return React.createElement("div", {
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

_defineProperty(Comments, "defaultProps", {
  href: undefined,
  numPosts: undefined,
  orderBy: undefined,
  width: undefined,
  colorScheme: undefined,
  children: undefined,
  mobile: undefined
});

export default forwardRef((props, ref) => React.createElement(Parser, null, ({
  handleParse
}) => React.createElement(Comments, _extends({}, props, {
  handleParse: handleParse,
  ref: ref
}))));
//# sourceMappingURL=Comments.js.map