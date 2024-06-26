import { createContext } from 'react';
import * as fs from 'graceful-fs';

export type IBarcodeGeneratorContext = {
    // sku: [leading: number, trailing: number];
    // bin: [leading: number, trailing: number];
    nextSku(): string;
    nextBin(): string;
};

export const BarcodeGeneratorContext = createContext<IBarcodeGeneratorContext | undefined>(undefined);

const appConfig = ['C:', 'Users', 'bobby', 'AppData', 'Roaming', 'jitt', 'barcodes.json'].join('\\');

export function readConfig() {
    return JSON.parse(fs.readFileSync(appConfig).toString()) as { bin: number; sku: number; binLeading: number; skuLeading: number };
}
export function writeConfig(binLeading: number, bin: number, skuLeading: number, sku: number) {
    fs.writeFileSync(
        appConfig,
        JSON.stringify(
            {
                sku,
                skuLeading,
                bin,
                binLeading
            },
            null,
            '\t'
        )
    );
}
