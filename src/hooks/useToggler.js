"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToggler = void 0;
const react_1 = require("react");
function useToggler(initial = false) {
    const [state, setState] = (0, react_1.useState)(initial);
    const enable = (0, react_1.useCallback)(() => setState(true), []);
    const disable = (0, react_1.useCallback)(() => setState(false), []);
    const onToggle = (0, react_1.useCallback)(() => setState((v) => !v), []);
    return [state, onToggle, enable, disable];
}
exports.useToggler = useToggler;
//# sourceMappingURL=useToggler.js.map