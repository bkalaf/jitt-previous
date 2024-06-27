"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useContxt = void 0;
const react_1 = require("react");
function useContxt(name, context) {
    const value = (0, react_1.useContext)(context);
    if (value == null)
        throw new Error(`NO CONTEXT FOR: ${name}`);
    return value;
}
exports.useContxt = useContxt;
//# sourceMappingURL=useContxt.js.map