import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent, forwardRef } from 'react';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';

class Page extends PureComponent {
  componentDidUpdate() {
    const {
      handleParse
    } = this.props;
    handleParse();
  }

  render() {
    const {
      style,
      href = getCurrentHref(),
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
    return React.createElement("div", {
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

_defineProperty(Page, "defaultProps", {
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

export default forwardRef((props, ref) => React.createElement(Parser, null, ({
  handleParse
}) => React.createElement(Page, _extends({}, props, {
  handleParse: handleParse,
  ref: ref
}))));
//# sourceMappingURL=Page.js.map