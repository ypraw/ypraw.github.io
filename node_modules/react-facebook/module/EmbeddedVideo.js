import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent, forwardRef } from 'react';
import Parser from './Parser';

class EmbeddedVideo extends PureComponent {
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
      allowFullScreen,
      autoPlay,
      showCaptions,
      children
    } = this.props;
    return React.createElement("div", {
      className: "fb-video",
      "data-href": href,
      "data-width": width,
      "data-show-text": showText,
      "data-show-captions": showCaptions,
      "data-autoplay": autoPlay,
      "data-allowfullscreen": allowFullScreen
    }, children);
  }

}

_defineProperty(EmbeddedVideo, "defaultProps", {
  width: undefined,
  showText: undefined,
  allowFullScreen: undefined,
  autoPlay: undefined,
  showCaptions: undefined,
  children: undefined
});

export default forwardRef((props, ref) => React.createElement(Parser, null, ({
  handleParse
}) => React.createElement(EmbeddedVideo, _extends({}, props, {
  handleParse: handleParse,
  ref: ref
}))));
//# sourceMappingURL=EmbeddedVideo.js.map