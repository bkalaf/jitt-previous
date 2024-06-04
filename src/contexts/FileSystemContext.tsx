import { createContext } from 'react';
import { IBrand, IProduct, ISku } from '../types';
// import path from 'path-browserify';

export type IFileSystemContext = {
    inbound: string;
    downloads: string;
    root: string;
    products: string;
    toBrand: (brand?: IBrand) => string;
    toProduct: (product: IProduct) => string;
    toSku: (sku: ISku) => string;
    toImages: (sku: ISku) => string;
    toVideos: (sku: ISku) => string;
    toProductDocs: (sku: ISku) => string;
    pendingBarcodesCSV: string;
    toRemBG: (filename: string) => string;
    imagesVideosDocs: [string, string, string];
};

export const FileSystemContext = createContext<IFileSystemContext | undefined>(undefined);

