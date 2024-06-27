/// <reference types="react" />
import { IBrand, IProduct, ISku } from '../types';
import Realm from 'realm';
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
    remBgSuffix: string;
    remBgExt: string;
    updateValue: (db: Realm, collection: string, propertyName: string, value?: any) => (obj: Record<string, any>) => void;
};
export declare const FileSystemContext: import("react").Context<IFileSystemContext | undefined>;
