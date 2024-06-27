"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useProvideFileSystemContext = void 0;
const react_1 = require("react");
const useEnv_1 = require("./useEnv");
const path_browserify_1 = __importDefault(require("path-browserify"));
const barcodeFormatter_1 = require("../util/barcodeFormatter");
const realm_1 = require("realm");
const runTransaction_1 = require("../util/runTransaction");
function useProvideFileSystemContext() {
    const { BARCODE_PRINT_FILE, DOWNLOADS_FOLDER, FILESYSTEM_PRODUCTS, FILESYSTEM_ROOT, INBOUND_FILES_FOLDER, REMOVE_BG_EXT, REMOVE_BG_SUFFIX, IMAGES_FOLDER, VIDEOS_FOLDER, PRODUCT_DOCS_FOLDER } = (0, useEnv_1.useEnv)();
    const inbound = [FILESYSTEM_ROOT, INBOUND_FILES_FOLDER].join('\\');
    const downloads = DOWNLOADS_FOLDER;
    const root = FILESYSTEM_ROOT;
    const products = [FILESYSTEM_ROOT, FILESYSTEM_PRODUCTS].join('\\');
    const pendingBarcodesCSV = [DOWNLOADS_FOLDER, BARCODE_PRINT_FILE].join('\\');
    const pathExt = (0, react_1.useMemo)(() => ({
        filename: (fn) => path_browserify_1.default.basename(fn).replaceAll(path_browserify_1.default.extname(fn), ''),
        changeExt: (fn, changeTo) => [pathExt.filename(fn), changeTo].join(''),
        merge: (fn1, fn2) => [fn1, fn2].join('\\')
    }), []);
    const updateValue = (0, react_1.useCallback)(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (db, collection, propertyName, value) => (obj) => {
        const func = () => {
            const text = `function () { obj[propertyName] = value; console.log('DONE!'); return obj; }()`;
            const nextValue = eval(text);
            console.log(nextValue);
            db.create(collection, nextValue);
            // setProperty(propertyName, obj, value)
        };
        (0, runTransaction_1.runTransaction)(db, func);
    }, []);
    const toRemBG = (0, react_1.useCallback)((filename) => {
        return pathExt.filename(filename).concat(REMOVE_BG_SUFFIX).concat(REMOVE_BG_EXT);
    }, [REMOVE_BG_EXT, REMOVE_BG_SUFFIX, pathExt]);
    const toBrand = (0, react_1.useCallback)((brand) => { var _a; return pathExt.merge(products, (_a = brand === null || brand === void 0 ? void 0 : brand.name) !== null && _a !== void 0 ? _a : 'no-brand'); }, [pathExt, products]);
    const toProduct = (0, react_1.useCallback)((product) => {
        var _a;
        const productLevel = (_a = [(0, barcodeFormatter_1.barcodeFormatter)(product === null || product === void 0 ? void 0 : product.upcs.at(0)), product === null || product === void 0 ? void 0 : product.modelNo, product === null || product === void 0 ? void 0 : product.description].find((x) => x != null)) !== null && _a !== void 0 ? _a : new realm_1.BSON.UUID().toHexString(false);
        return pathExt.merge(toBrand(product === null || product === void 0 ? void 0 : product.brand), productLevel);
    }, [toBrand, pathExt]);
    const toSku = (0, react_1.useCallback)((sku) => {
        return pathExt.merge(toProduct(sku === null || sku === void 0 ? void 0 : sku.product), (0, barcodeFormatter_1.barcodeFormatter)(sku === null || sku === void 0 ? void 0 : sku.skus[0]));
    }, [pathExt, toProduct]);
    const toImages = (0, react_1.useCallback)((sku) => {
        return pathExt.merge(toSku(sku), IMAGES_FOLDER);
    }, [IMAGES_FOLDER, pathExt, toSku]);
    const toVideos = (0, react_1.useCallback)((sku) => {
        return pathExt.merge(toSku(sku), VIDEOS_FOLDER);
    }, [VIDEOS_FOLDER, pathExt, toSku]);
    const toProductDocs = (0, react_1.useCallback)((sku) => {
        return pathExt.merge(toSku(sku), PRODUCT_DOCS_FOLDER);
    }, [PRODUCT_DOCS_FOLDER, pathExt, toSku]);
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
exports.useProvideFileSystemContext = useProvideFileSystemContext;
//# sourceMappingURL=useProvideFileSystemContext.js.map