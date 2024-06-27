"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeGeneratorProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const BarcodeGeneratorContext_1 = require("./BarcodeGeneratorContext");
const useProvideBarcodeGeneratorContext_1 = require("../hooks/useProvideBarcodeGeneratorContext");
function BarcodeGeneratorProvider({ children }) {
    const value = (0, useProvideBarcodeGeneratorContext_1.useProvideBarcodeGeneratorContext)();
    return (0, jsx_runtime_1.jsx)(BarcodeGeneratorContext_1.BarcodeGeneratorContext.Provider, { value: value, children: children });
}
exports.BarcodeGeneratorProvider = BarcodeGeneratorProvider;
//# sourceMappingURL=BarcodeGeneratorProvider.js.map