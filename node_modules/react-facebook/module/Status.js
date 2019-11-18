import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import React, { Component } from 'react';
import Initialize from './Initialize';
import Subscribe from './Subscribe';

function getLoginStatus(_x) {
  return _getLoginStatus.apply(this, arguments);
}

function _getLoginStatus() {
  _getLoginStatus = _asyncToGenerator(function* (api) {
    const response = yield api.getLoginStatus();
    return response.status;
  });
  return _getLoginStatus.apply(this, arguments);
}

export default class Status extends Component {
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
        _this.setState({
          status: yield getLoginStatus(api),
          loading: false
        });
      });

      return function (_x2) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(this, "handleStatusChange", response => {
      this.setState({
        status: response.status,
        loading: false
      });
    });
  }

  render() {
    const {
      children
    } = this.props;
    const {
      status,
      loading
    } = this.state;
    return React.createElement(Initialize, {
      onReady: this.handleReady
    }, React.createElement(Subscribe, {
      event: "auth.statusChange",
      onChange: this.handleStatusChange
    }, children({
      status,
      loading
    })));
  }

}
//# sourceMappingURL=Status.js.map