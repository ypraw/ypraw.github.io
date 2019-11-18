import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent, forwardRef } from 'react';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';

class Like extends PureComponent {
  componentDidUpdate() {
    const {
      handleParse
    } = this.props;
    handleParse();
  }

  render() {
    const {
      href = getCurrentHref(),
      layout,
      colorScheme,
      action,
      showFaces,
      share,
      children,
      width,
      size,
      kidDirectedSite,
      referral
    } = this.props;
    return React.createElement("div", {
      className: "fb-like",
      "data-ref": referral,
      "data-href": href,
      "data-layout": layout,
      "data-colorscheme": colorScheme,
      "data-action": action,
      "data-show-faces": showFaces,
      "data-share": share,
      "data-width": width,
      "data-size": size,
      "data-kid-directed-site": kidDirectedSite
    }, children);
  }

}

_defineProperty(Like, "defaultProps", {
  layout: undefined,
  showFaces: undefined,
  colorScheme: undefined,
  action: undefined,
  share: undefined,
  size: undefined,
  kidDirectedSite: undefined,
  children: undefined,
  href: undefined,
  referral: undefined,
  width: undefined
});

export default forwardRef((props, ref) => React.createElement(Parser, null, ({
  handleParse
}) => React.createElement(Like, _extends({}, props, {
  handleParse: handleParse,
  ref: ref
}))));
//# sourceMappingURL=Like.js.map