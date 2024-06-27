"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const EnvContext_1 = require("./EnvContext");
const useProvideEnvContext_1 = require("../hooks/useProvideEnvContext");
function EnvProvider({ children }) {
    const context = (0, useProvideEnvContext_1.useProvideEnvContext)();
    return (0, jsx_runtime_1.jsx)(EnvContext_1.EnvContext.Provider, { value: context, children: children });
}
exports.EnvProvider = EnvProvider;
//# sourceMappingURL=EnvProvider.js.map