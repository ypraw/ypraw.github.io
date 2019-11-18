import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import { useContext, useState } from 'react';
import canUseDom from 'can-use-dom';
import FacebookContext from '../FacebookContext';
export default (onReady => {
  const {
    handleInit,
    api
  } = useContext(FacebookContext);
  useState(
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    if (canUseDom) {
      const api2 = yield handleInit();

      if (onReady) {
        onReady(api2);
      }
    }
  }));
  return [api, handleInit];
});
//# sourceMappingURL=useApi.js.map