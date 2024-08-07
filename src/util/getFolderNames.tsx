/* eslint-disable no-console */
import { ISku } from '../types';
import { barcodeFormatter } from './barcodeFormatter';
import { getBaseName, getExtension } from '../hooks/getBaseName';

export function getFolderNames(sku: ISku) {
    const { product } = sku;
    const { brand } = { brand: undefined, ...product };
    const { folder: brandNameFolder } = { folder: 'no-brand', ...(brand ?? {}) };
    const skuFolder = barcodeFormatter(sku.skus[0]);
    // const productFolder = modelNo ?? upcs?.length > 0 ? barcodeFormatter(upcs[0]) : description?.replaceAll(' ', '-').toLowerCase() ?? _id?.toHexString() ?? 'unknown';
    return [brandNameFolder, skuFolder] as [brandFolder: string, skuFolder: string];
}

export function getRemBgName(filename: string, suffix: string, ext: string) {
    const bn = getBaseName(filename);
    console.info('baseName', bn);
    const extension = getExtension(filename) ?? '';
    console.info(`extension`, extension);
    const replaced = bn.replace(extension, '');
    console.info(`replaced`, replaced);
    const concatending = suffix.concat('.').concat(ext);
    console.info(`concatending`, concatending);
    const final = [replaced, concatending].join('');
    console.info(`final`, final);
    return final;
}
