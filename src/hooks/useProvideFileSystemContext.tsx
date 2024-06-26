import { useCallback, useMemo } from 'react';
import { IBrand, IProduct, ISku } from '../types';
import { useEnv } from './useEnv';
import path from 'path-browserify';
import { barcodeFormatter } from '../util/barcodeFormatter';
import Realm, { BSON } from 'realm';
import { IFileSystemContext } from '../contexts/FileSystemContext';
import { runTransaction } from '../util/runTransaction';

export function useProvideFileSystemContext(): IFileSystemContext {
    const { BARCODE_PRINT_FILE, DOWNLOADS_FOLDER, FILESYSTEM_PRODUCTS, FILESYSTEM_ROOT, INBOUND_FILES_FOLDER, REMOVE_BG_EXT, REMOVE_BG_SUFFIX, IMAGES_FOLDER, VIDEOS_FOLDER, PRODUCT_DOCS_FOLDER } = useEnv();
    const inbound = [FILESYSTEM_ROOT, INBOUND_FILES_FOLDER].join('\\');
    const downloads = DOWNLOADS_FOLDER;
    const root = FILESYSTEM_ROOT;
    const products = [FILESYSTEM_ROOT, FILESYSTEM_PRODUCTS].join('\\');
    const pendingBarcodesCSV = [DOWNLOADS_FOLDER, BARCODE_PRINT_FILE].join('\\');
    const pathExt = useMemo(
        () => ({
            filename: (fn: string) => path.basename(fn).replaceAll(path.extname(fn), ''),
            changeExt: (fn: string, changeTo: string) => [pathExt.filename(fn), changeTo].join(''),
            merge: (fn1: string, fn2: string) => [fn1, fn2].join('\\')
        }),
        []
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const updateValue = useCallback(
        (db: Realm, collection: string, propertyName: string, value?: any) => (obj: Record<string, any>) => {
            const func = () => {
                const text = `function () { obj[propertyName] = value; console.log('DONE!'); return obj; }()`;
                const nextValue = eval(text);
                console.log(nextValue);
                db.create(collection, nextValue);
                // setProperty(propertyName, obj, value)
            };
            runTransaction(db, func);
        },
        []
    );
    const toRemBG = useCallback(
        (filename: string) => {
            return pathExt.filename(filename).concat(REMOVE_BG_SUFFIX).concat(REMOVE_BG_EXT);
        },
        [REMOVE_BG_EXT, REMOVE_BG_SUFFIX, pathExt]
    );
    const toBrand = useCallback((brand?: IBrand) => pathExt.merge(products, brand?.name ?? 'no-brand'), [pathExt, products]);
    const toProduct = useCallback(
        (product?: IProduct) => {
            const productLevel = [barcodeFormatter(product?.upcs.at(0)), product?.modelNo, product?.description].find((x) => x != null) ?? new BSON.UUID().toHexString(false);
            return pathExt.merge(toBrand(product?.brand), productLevel);
        },
        [toBrand, pathExt]
    );
    const toSku = useCallback(
        (sku?: ISku) => {
            return pathExt.merge(toProduct(sku?.product), barcodeFormatter(sku?.skus[0]));
        },
        [pathExt, toProduct]
    );
    const toImages = useCallback(
        (sku?: ISku) => {
            return pathExt.merge(toSku(sku), IMAGES_FOLDER);
        },
        [IMAGES_FOLDER, pathExt, toSku]
    );
    const toVideos = useCallback(
        (sku?: ISku) => {
            return pathExt.merge(toSku(sku), VIDEOS_FOLDER);
        },
        [VIDEOS_FOLDER, pathExt, toSku]
    );
    const toProductDocs = useCallback(
        (sku?: ISku) => {
            return pathExt.merge(toSku(sku), PRODUCT_DOCS_FOLDER);
        },
        [PRODUCT_DOCS_FOLDER, pathExt, toSku]
    );
    return {
        inbound,
        downloads,
        root,
        products,
        pendingBarcodesCSV,
        toRemBG,
        toBrand,
        toProduct,
        toSku,
        toImages,
        toVideos,
        toProductDocs,
        imagesVideosDocs: [IMAGES_FOLDER, VIDEOS_FOLDER, PRODUCT_DOCS_FOLDER],
        remBgSuffix: REMOVE_BG_SUFFIX,
        remBgExt: REMOVE_BG_EXT,
        updateValue
    };
}
