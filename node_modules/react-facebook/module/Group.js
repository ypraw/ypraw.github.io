import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { forwardRef, PureComponent } from 'react';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';

class Group extends PureComponent {
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
      width,
      showSocialContext,
      showMetaData,
      children,
      skin
    } = this.props;
    return React.createElement("div", {
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

_defineProperty(Group, "defaultProps", {
  showSocialContext: undefined,
  showMetaData: undefined,
  width: undefined,
  children: undefined,
  style: undefined,
  href: undefined,
  skin: undefined
});

export default forwardRef((props, ref) => React.createElement(Parser, null, ({
  handleParse
}) => React.createElement(Group, _extends({}, props, {
  handleParse: handleParse,
  ref: ref
}))));
//# sourceMappingURL=Group.js.map