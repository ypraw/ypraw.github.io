import _extends from "@babel/runtime/helpers/extends";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { Component, forwardRef } from 'react';
import Process from './Process';
import Fields from './constants/Fields';

class Login extends Component {
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
          handleProcess,
          onCompleted,
          onError,
          onSuccess
        } = _this.props;

        try {
          yield handleProcess(
          /*#__PURE__*/
          function () {
            var _ref2 = _asyncToGenerator(function* (api) {
              const {
                scope,
                fields,
                returnScopes,
                rerequest,
                reauthorize,
                eventKey
              } = _this.props;
              const loginQpts = {
                scope
              };
              const authType = [];

              if (returnScopes) {
                loginQpts.return_scopes = true;
              }

              if (rerequest) {
                authType.push('rerequest');
              }

              if (reauthorize) {
                authType.push('reauthenticate');
              }

              if (authType.length) {
                loginQpts.auth_type = authType.join(',');
              }

              const loginResponse = yield api.login(loginQpts);

              if (loginResponse.status !== 'connected') {
                throw new Error('Unauthorized user');
              }

              const data = yield api.getTokenDetailWithProfile({
                fields
              }, loginResponse);

              if (onCompleted) {
                yield onCompleted(_objectSpread({}, data, {
                  eventKey
                }));
              }

              return data;
            });

            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }(), onSuccess);
        } catch (error) {
          if (onError) {
            onError(error);
          }
        }
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

_defineProperty(Login, "defaultProps", {
  scope: '',
  fields: Fields,
  returnScopes: false,
  rerequest: false,
  reauthorize: false,
  onCompleted: undefined,
  onError: undefined,
  eventKey: undefined
});

export default forwardRef((props, ref) => React.createElement(Process, null, ({
  loading,
  handleProcess,
  data,
  error
}) => React.createElement(Login, _extends({}, props, {
  loading: loading,
  handleProcess: handleProcess,
  data: data,
  error: error,
  ref: ref
}))));
//# sourceMappingURL=Login.js.map