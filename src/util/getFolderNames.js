"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRemBgName = exports.getFolderNames = void 0;
const path_browserify_1 = __importDefault(require("path-browserify"));
const barcodeFormatter_1 = require("./barcodeFormatter");
const getBaseName_1 = require("../hooks/getBaseName");
function getFolderNames(sku) {
    var _a, _b;
    const { product } = sku;
    const { brand, upcs, modelNo, description, _id } = Object.assign({ upcs: [], brand: undefined }, product);
    const { folder: brandNameFolder } = Object.assign({ folder: 'no-brand' }, (brand !== null && brand !== void 0 ? brand : {}));
    const skuFolder = (0, barcodeFormatter_1.barcodeFormatter)(sku.skus[0]);
    const productFolder = (modelNo !== null && modelNo !== void 0 ? modelNo : (upcs === null || upcs === void 0 ? void 0 : upcs.length) > 0) ? (0, barcodeFormatter_1.barcodeFormatter)(upcs[0]) : (_b = (_a = description === null || description === void 0 ? void 0 : description.replaceAll(' ', '-').toLowerCase()) !== null && _a !== void 0 ? _a : _id === null || _id === void 0 ? void 0 : _id.toHexString()) !== null && _b !== void 0 ? _b : 'unknown';
    return [brandNameFolder, productFolder, skuFolder];
}
exports.getFolderNames = getFolderNames;
function getRemBgName(filename, suffix, ext) {
    return (0, getBaseName_1.getBaseName)(filename).replace(path_browserify_1.default.extname(filename), '').concat(suffix).concat('.').concat(ext);
}
exports.getRemBgName = getRemBgName;
//# sourceMappingURL=getFolderNames.js.map