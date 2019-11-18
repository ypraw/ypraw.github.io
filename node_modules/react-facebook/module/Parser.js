import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component } from 'react';
import Initialize from './Initialize';
export default class Parser extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});

    _defineProperty(this, "handleReady", api => {
      this.setState({
        api
      }, this.handleParse);
    });

    _defineProperty(this, "handleContainer", container => {
      this.setState({
        container
      }, this.handleParse);
    });

    _defineProperty(this, "handleParse", () => {
      const {
        api,
        container
      } = this.state;

      if (!api || !container) {
        return;
      }

      api.parse(container);
    });
  }

  render() {
    const {
      className,
      children
    } = this.props;
    return React.createElement("div", {
      className: className,
      ref: this.handleContainer
    }, React.createElement(Initialize, {
      onReady: this.handleReady
    }, children({
      handleParse: this.handleParse
    })));
  }

}

_defineProperty(Parser, "defaultProps", {
  className: undefined
});
//# sourceMappingURL=Parser.js.map