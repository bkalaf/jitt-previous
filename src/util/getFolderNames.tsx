import path from 'path-browserify';
import { IBarcode, ISku } from '../types';
import { barcodeFormatter } from './barcodeFormatter';
import { getBaseName } from '../hooks/getBaseName';

export function getFolderNames(sku: ISku) {
    const { product } = sku;
    const { brand, upcs, modelNo, description, _id } = { upcs: [] as IBarcode[], brand: undefined, ...product };
    const { folder: brandNameFolder } = { folder: 'no-brand', ...brand ?? {}};
    const skuFolder = barcodeFormatter(sku.skus[0]);
    const productFolder = modelNo ?? upcs?.length > 0 ? barcodeFormatter(upcs[0]) : description?.replaceAll(' ', '-').toLowerCase() ?? _id?.toHexString() ?? 'unknown';
    return [brandNameFolder, productFolder, skuFolder] as [brandFolder: string, productFolder: string, skuFolder: string];
}

export function getRemBgName(filename: string, suffix: string, ext: string) {
    return getBaseName(filename).replace(path.extname(filename), '').concat(suffix).concat('.').concat(ext);
}
