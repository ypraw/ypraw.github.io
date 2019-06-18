'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.insertScript = insertScript;
exports.removeScript = removeScript;
exports.debounce = debounce;
function insertScript(src, id, parentElement) {
    var script = window.document.createElement('script');
    script.async = true;
    script.src = src;
    script.id = id;
    parentElement.appendChild(script);

    return script;
}

function removeScript(id, parentElement) {
    var script = window.document.getElementById(id);
    if (script) parentElement.removeChild(script);
}

function debounce(func, wait, runOnFirstCall) {
    var timeout = void 0;
    return function () {
        var context = this; // eslint-disable-line consistent-this
        var args = arguments;

        var deferredExecution = function deferredExecution() {
            timeout = null;
            if (!runOnFirstCall) func.apply(context, args);
        };

        var callNow = runOnFirstCall && !timeout;

        window.clearTimeout(timeout);
        timeout = setTimeout(deferredExecution, wait);

        if (callNow) func.apply(context, args);
    };
}