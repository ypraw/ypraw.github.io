import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component } from 'react';
import Initialize from './Initialize';
export default class Process extends Component {
  constructor(...args) {
    var _this;

    super(...args);
    _this = this;

    _defineProperty(this, "state", {
      api: undefined
    });

    _defineProperty(this, "handleProcess",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(function* (fn, handleSuccess = () => {}) {
        _this.setState({
          data: undefined,
          error: undefined,
          loading: true
        });

        try {
          const {
            api
          } = _this.state;

          if (!api) {
            throw new Error('Facebook is not initialized. Wait for isReady');
          }

          const data = yield fn(api);

          _this.setState({
            data,
            loading: false
          }, handleSuccess);

          return data;
        } catch (error) {
          _this.setState({
            error,
            loading: false
          });

          throw error;
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(this, "handleReady", api => {
      this.setState({
        api
      });
    });
  }

  render() {
    const {
      children
    } = this.props;
    const {
      api,
      loading,
      data,
      error
    } = this.state;
    return React.createElement(Initialize, {
      onReady: this.handleReady
    }, children({
      loading: !api || loading,
      handleProcess: this.handleProcess,
      data,
      error
    }));
  }

}
//# sourceMappingURL=Process.js.map