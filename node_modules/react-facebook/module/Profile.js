import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component } from 'react';
import Initialize from './Initialize';
import Subscribe from './Subscribe';
import Fields from './constants/Fields';
import LoginStatus from './constants/LoginStatus';
export default class Profile extends Component {
  constructor(...args) {
    var _this;

    super(...args);
    _this = this;

    _defineProperty(this, "state", {
      loading: true
    });

    _defineProperty(this, "handleReady",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(function* (api) {
        _this.api = api;

        _this.updateProfile();
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(this, "handleStatusChange", () => {
      this.updateProfile();
    });
  }

  updateProfile() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      const {
        api,
        props: {
          fields
        }
      } = _this2;

      if (!api) {
        return;
      }

      try {
        const response = yield api.getLoginStatus();

        if (response.status !== LoginStatus.CONNECTED) {
          _this2.setState({
            profile: undefined,
            loading: false,
            error: undefined
          });

          return;
        }

        const profile = yield api.getProfile({
          fields
        });

        _this2.setState({
          profile,
          loading: false,
          error: undefined
        });
      } catch (error) {
        _this2.setState({
          profile: undefined,
          loading: false,
          error
        });
      }
    })();
  }

  render() {
    const {
      children
    } = this.props;
    const {
      profile,
      loading,
      error
    } = this.state;
    return React.createElement(Initialize, {
      onReady: this.handleReady
    }, React.createElement(Subscribe, {
      event: "auth.statusChange",
      onChange: this.handleStatusChange
    }, children({
      profile,
      loading,
      error
    })));
  }

}

_defineProperty(Profile, "defaultProps", {
  fields: Fields
});
//# sourceMappingURL=Profile.js.map