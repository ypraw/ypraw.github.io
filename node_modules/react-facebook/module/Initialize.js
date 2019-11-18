import _extends from "@babel/runtime/helpers/extends";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { forwardRef, Component } from 'react';
import FacebookContext from './FacebookContext';

class Initialize extends Component {
  componentDidMount() {
    this.$isMounted = true;
    this.prepare();
  }

  componentWillUnmount() {
    this.$isMounted = false;
  }

  prepare() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const {
        onReady,
        handleInit
      } = _this.props;
      const api = yield handleInit();

      if (onReady && _this.$isMounted) {
        onReady(api);
      }
    })();
  }

  render() {
    const {
      children,
      isReady,
      api
    } = this.props;
    const childrenProps = {
      isReady,
      api
    };

    if (typeof children === 'function') {
      return children(childrenProps);
    }

    return children;
  }

}

_defineProperty(Initialize, "defaultProps", {
  onReady: undefined,
  api: undefined
});

export default forwardRef((props, ref) => React.createElement(FacebookContext.Consumer, null, ({
  handleInit,
  isReady,
  api
}) => React.createElement(Initialize, _extends({}, props, {
  handleInit: handleInit,
  isReady: isReady,
  api: api,
  ref: ref
}))));
//# sourceMappingURL=Initialize.js.map