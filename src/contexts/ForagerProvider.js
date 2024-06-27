"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForagerProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ForagerContext_1 = require("./ForagerContext");
function ForagerProvider({ children }) {
    const value = (0, ForagerContext_1.useProvideForagerContext)();
    return (0, jsx_runtime_1.jsx)(ForagerContext_1.ForagerContext.Provider, { value: value, children: children });
}
exports.ForagerProvider = ForagerProvider;
//# sourceMappingURL=ForagerProvider.js.map