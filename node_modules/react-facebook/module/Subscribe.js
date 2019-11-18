import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component } from 'react';
import Initialize from './Initialize';
export default class LoginStatus extends Component {
  constructor(..._args) {
    var _this;

    super(..._args);
    _this = this;

    _defineProperty(this, "state", {});

    _defineProperty(this, "handleReady",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(function* (api) {
        const {
          event
        } = _this.props;

        _this.setState({
          api
        });

        yield api.subscribe(event, _this.handleChange);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(this, "handleChange", (...args) => {
      const {
        onChange
      } = this.props;

      if (onChange) {
        onChange(...args);
      }
    });
  }

  componentWillUnmount() {
    const {
      state: {
        api
      },
      props: {
        event
      }
    } = this;

    if (api) {
      api.unsubscribe(event, this.handleChange);
    }
  }

  render() {
    const {
      children
    } = this.props;
    return React.createElement(Initialize, {
      onReady: this.handleReady
    }, children);
  }

}

_defineProperty(LoginStatus, "defaultProps", {
  onChange: undefined
});
//# sourceMappingURL=Subscribe.js.map