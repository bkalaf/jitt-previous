/// <reference types="react" />
export type IBarcodeGeneratorContext = {
    nextSku(): string;
    nextBin(): string;
};
export declare const BarcodeGeneratorContext: import("react").Context<IBarcodeGeneratorContext | undefined>;
export declare function readConfig(): {
    bin: number;
    sku: number;
    binLeading: number;
    skuLeading: number;
};
export declare function writeConfig(binLeading: number, bin: number, skuLeading: number, sku: number): void;
