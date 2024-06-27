"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useProvideBarcodeGeneratorContext = void 0;
const react_1 = require("react");
const calculateUPCCheckDigit_1 = require("../util/calculateUPCCheckDigit");
const BarcodeGeneratorContext_1 = require("../contexts/BarcodeGeneratorContext");
const bin_1 = require("../schema/entity/bin");
const sku_1 = require("../schema/entity/sku");
function useProvideBarcodeGeneratorContext() {
    const nextBin = (0, react_1.useCallback)(() => {
        const data = (0, BarcodeGeneratorContext_1.readConfig)();
        let { bin, binLeading } = data;
        const { sku, skuLeading } = data;
        if (bin === 99999) {
            bin = 0;
            binLeading = binLeading + 1;
        }
        else {
            bin = bin + 1;
        }
        const next = ['4', binLeading, bin.toFixed(0).padStart(5, '0')].join('');
        const checkdigit = (0, calculateUPCCheckDigit_1.calculateUPCCheckDigit)(next);
        (0, BarcodeGeneratorContext_1.writeConfig)(binLeading, bin, skuLeading, sku);
        return [next, checkdigit].join('');
    }, []);
    const nextSku = (0, react_1.useCallback)(() => {
        const data = (0, BarcodeGeneratorContext_1.readConfig)();
        let { sku, skuLeading } = data;
        const { bin, binLeading } = data;
        if (sku === 99999) {
            sku = 0;
            skuLeading = skuLeading + 1;
        }
        else {
            sku = sku + 1;
        }
        const next = ['4', skuLeading, sku.toFixed(0).padStart(5, '0')].join('');
        const checkdigit = (0, calculateUPCCheckDigit_1.calculateUPCCheckDigit)(next);
        (0, BarcodeGeneratorContext_1.writeConfig)(binLeading, bin, skuLeading, sku);
        return [next, checkdigit].join('');
    }, []);
    (0, react_1.useEffect)(() => {
        bin_1.Bin.barcodeGenerator = nextBin;
        sku_1.Sku.barcodeGenerator = nextSku;
    }, [nextBin, nextSku]);
    return {
        nextSku,
        nextBin
    };
}
exports.useProvideBarcodeGeneratorContext = useProvideBarcodeGeneratorContext;
//# sourceMappingURL=useProvideBarcodeGeneratorContext.js.map