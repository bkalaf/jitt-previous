"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBarcodeGenerator = void 0;
const useContxt_1 = require("./useContxt");
const BarcodeGeneratorContext_1 = require("../contexts/BarcodeGeneratorContext");
function useBarcodeGenerator() {
    return (0, useContxt_1.useContxt)('BarcodeGeneratorContext', BarcodeGeneratorContext_1.BarcodeGeneratorContext);
}
exports.useBarcodeGenerator = useBarcodeGenerator;
//# sourceMappingURL=useBarcodeGenerator.js.map