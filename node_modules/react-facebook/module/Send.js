import _extends from "@babel/runtime/helpers/extends";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component, forwardRef } from 'react';
import getCurrentHref from './utils/getCurrentHref';
import clearUndefinedProperties from './utils/clearUndefinedProperties';
import Process from './Process';

class Send extends Component {
  constructor(...args) {
    var _this;

    super(...args);
    _this = this;

    _defineProperty(this, "handleClick",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(function* (evn) {
        evn.preventDefault();
        const {
          handleProcess
        } = _this.props;
        return handleProcess(
        /*#__PURE__*/
        function () {
          var _ref2 = _asyncToGenerator(function* (api) {
            const {
              link = getCurrentHref(),
              display,
              appId = api.getAppId(),
              to,
              redirectURI
            } = _this.props;
            return api.ui(clearUndefinedProperties({
              method: 'send',
              link,
              display,
              app_id: appId,
              to,
              redirect_uri: redirectURI
            }));
          });

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  render() {
    const {
      children,
      loading
    } = this.props;
    return children({
      loading,
      handleClick: this.handleClick
    });
  }

}

_defineProperty(Send, "defaultProps", {
  to: undefined,
  display: undefined,
  appId: undefined,
  redirectURI: undefined
});

export default forwardRef((props, ref) => React.createElement(Process, null, ({
  loading,
  handleProcess
}) => React.createElement(Send, _extends({}, props, {
  loading: loading,
  handleProcess: handleProcess,
  ref: ref
}))));
//# sourceMappingURL=Send.js.map