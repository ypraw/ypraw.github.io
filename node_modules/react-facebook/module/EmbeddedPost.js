import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent, forwardRef } from 'react';
import Parser from './Parser';

class EmbeddedPost extends PureComponent {
  componentDidUpdate() {
    const {
      handleParse
    } = this.props;
    handleParse();
  }

  render() {
    const {
      href,
      width,
      showText,
      children
    } = this.props;
    return React.createElement("div", {
      className: "fb-post",
      "data-href": href,
      "data-width": width,
      "data-show-text": showText
    }, children);
  }

}

_defineProperty(EmbeddedPost, "defaultProps", {
  width: undefined,
  showText: undefined,
  children: undefined
});

export default forwardRef((props, ref) => React.createElement(Parser, null, ({
  handleParse
}) => React.createElement(EmbeddedPost, _extends({}, props, {
  handleParse: handleParse,
  ref: ref
}))));
//# sourceMappingURL=EmbeddedPost.js.map