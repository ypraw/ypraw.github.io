import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { forwardRef, PureComponent } from 'react';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';

class CommentsCount extends PureComponent {
  componentDidUpdate() {
    const {
      handleParse
    } = this.props;
    handleParse();
  }

  render() {
    const {
      href = getCurrentHref(),
      children
    } = this.props;
    return React.createElement("span", {
      className: "fb-comments-count",
      "data-href": href
    }, children);
  }

}

_defineProperty(CommentsCount, "defaultProps", {
  href: undefined,
  children: undefined
});

export default forwardRef((props, ref) => React.createElement(Parser, null, ({
  handleParse
}) => React.createElement(CommentsCount, _extends({}, props, {
  handleParse: handleParse,
  ref: ref
}))));
//# sourceMappingURL=CommentsCount.js.map