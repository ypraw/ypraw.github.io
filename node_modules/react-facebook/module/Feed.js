import _extends from "@babel/runtime/helpers/extends";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component, forwardRef } from 'react';
import getCurrentHref from './utils/getCurrentHref';
import clearUndefinedProperties from './utils/clearUndefinedProperties';
import Process from './Process';

class Feed extends Component {
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
              redirectURI,
              from,
              to,
              picture,
              source,
              name,
              caption,
              description,
              dataRef
            } = _this.props;
            return api.ui(clearUndefinedProperties({
              method: 'feed',
              link,
              display,
              app_id: appId,
              redirect_uri: redirectURI,
              from,
              to,
              picture,
              source,
              name,
              caption,
              description,
              ref: dataRef
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
      loading,
      error,
      data
    } = this.props;
    return children({
      loading,
      handleClick: this.handleClick,
      error,
      data
    });
  }

}

_defineProperty(Feed, "defaultProps", {
  link: undefined,
  display: undefined,
  appId: undefined,
  redirectURI: undefined,
  from: undefined,
  to: undefined,
  source: undefined,
  picture: undefined,
  name: undefined,
  caption: undefined,
  description: undefined,
  dataRef: undefined
});

export default forwardRef((props, ref) => React.createElement(Process, null, ({
  loading,
  handleProcess,
  error,
  data
}) => React.createElement(Feed, _extends({}, props, {
  loading: loading,
  handleProcess: handleProcess,
  data: data,
  error: error,
  ref: ref
}))));
//# sourceMappingURL=Feed.js.map