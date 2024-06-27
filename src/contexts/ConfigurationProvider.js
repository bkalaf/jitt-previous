"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useProvideConfigurationContext_1 = require("../hooks/useProvideConfigurationContext");
const Configuration_1 = require("./Configuration");
function ConfigurationProvider(props) {
    const { children } = props;
    const value = (0, useProvideConfigurationContext_1.useProvideConfigurationContext)();
    return (0, jsx_runtime_1.jsx)(Configuration_1.ConfigurationContext.Provider, { value: value, children: children });
}
exports.ConfigurationProvider = ConfigurationProvider;
//# sourceMappingURL=ConfigurationProvider.js.map