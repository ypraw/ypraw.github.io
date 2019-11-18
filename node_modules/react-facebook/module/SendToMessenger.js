import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent, forwardRef } from 'react';
import Parser from './Parser'; // import MessengerSize from './constants/MessengerSize';
// import MessengerColor from './constants/MessengerColor';

class SendToMessenger extends PureComponent {
  componentDidUpdate() {
    const {
      handleParse
    } = this.props;
    handleParse();
  }

  render() {
    const {
      color,
      messengerAppId,
      pageId,
      children,
      dataRef,
      size
    } = this.props;
    return React.createElement("div", {
      className: "fb-send-to-messenger",
      messenger_app_id: messengerAppId,
      page_id: pageId,
      "data-color": color,
      "data-size": size,
      "data-ref": dataRef
    }, children);
  }

}

_defineProperty(SendToMessenger, "defaultProps", {
  color: undefined,
  size: undefined,
  dataRef: undefined,
  children: undefined
});

export default forwardRef((props, ref) => React.createElement(Parser, null, ({
  handleParse
}) => React.createElement(SendToMessenger, _extends({}, props, {
  handleParse: handleParse,
  ref: ref
}))));
//# sourceMappingURL=SendToMessenger.js.map