import { useCallback, useEffect } from 'react';
import { calculateUPCCheckDigit } from '../util/calculateUPCCheckDigit';
import { IBarcodeGeneratorContext, readConfig, writeConfig } from '../contexts/BarcodeGeneratorContext';
import { Bin } from '../schema/entity/bin';
import { Sku } from '../schema/entity/sku';

export function useProvideBarcodeGeneratorContext(): IBarcodeGeneratorContext {
    const nextBin = useCallback(() => {
        const data = readConfig();
        let { bin, binLeading } = data;
        const { sku, skuLeading } = data;
        if (bin === 99999) {
            bin = 0;
            binLeading = binLeading + 1;
        } else {
            bin = bin + 1;
        }
        const next = ['4', binLeading, bin.toFixed(0).padStart(5, '0')].join('');
        const checkdigit = calculateUPCCheckDigit(next);
        writeConfig(binLeading, bin, skuLeading, sku);
        return [next, checkdigit].join('');
    }, []);
    const nextSku = useCallback(() => {
        const data = readConfig();
        let { sku, skuLeading } = data;
        const { bin, binLeading } = data;
        if (sku === 99999) {
            sku = 0;
            skuLeading = skuLeading + 1;
        } else {
            sku = sku + 1;
        }
        const next = ['4', skuLeading, sku.toFixed(0).padStart(5, '0')].join('');
        const checkdigit = calculateUPCCheckDigit(next);
        writeConfig(binLeading, bin, skuLeading, sku);
        return [next, checkdigit].join('');
    }, []);
    useEffect(() => {
        Bin.barcodeGenerator = nextBin;
        Sku.barcodeGenerator = nextSku;
    }, [nextBin, nextSku]);
    return {
        nextSku,
        nextBin
    };
}
