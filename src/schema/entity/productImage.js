"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductImage = void 0;
const realm_1 = require("realm");
const schemaName_1 = require("../../util/schemaName");
const _1 = require("../$");
const ProductImageDisposition_1 = require("./ProductImageDisposition");
const getFolderNames_1 = require("../../util/getFolderNames");
const runTransaction_1 = require("../../util/runTransaction");
const EntityBase_1 = require("./EntityBase");
const FILESYSTEM_PRODUCTS = (_a = process.env.FILESYSTEM_PRODUCTS) !== null && _a !== void 0 ? _a : '';
const FILESYSTEM_ROOT = (_b = process.env.FILESYSTEM_ROOT) !== null && _b !== void 0 ? _b : '';
const REMOVE_BG_EXT = (_c = process.env.REMOVE_BG_EXT) !== null && _c !== void 0 ? _c : '';
const REMOVE_BG_SUFFIX = (_d = process.env.REMOVE_BG_SUFFIX) !== null && _d !== void 0 ? _d : '';
class ProductImage extends EntityBase_1.EntityBase {
    static init() {
        return {
            _id: new realm_1.BSON.ObjectId(),
            flags: [],
            takenOn: new Date(Date.now()),
            disposition: ProductImageDisposition_1.ProductImageDisposition.pendingApproval,
            fullpath: '',
            filename: '',
            extension: '',
            mimeType: '',
            hasRemBG: false,
            sku: undefined
        };
    }
    static update(item) {
        const func = () => {
            var _a, _b;
            if (item.selected != null) {
                item.disposition = ProductImageDisposition_1.ProductImageDisposition.ready;
            }
            else if ((_a = item.flags) === null || _a === void 0 ? void 0 : _a.includes('do-not-rembg')) {
                item.selected = 'original';
                item.disposition = ProductImageDisposition_1.ProductImageDisposition.ready;
            }
            else if ((_b = item.flags) === null || _b === void 0 ? void 0 : _b.includes('ignore')) {
                item.selected = undefined;
                item.disposition = ProductImageDisposition_1.ProductImageDisposition.ready;
            }
            else if (item.selected == null && item.hasRemBG === false) {
                item.disposition = ProductImageDisposition_1.ProductImageDisposition.bgRemoval;
            }
        };
        (0, runTransaction_1.runTransaction)(ProductImage.localRealm, func);
    }
    get effective() {
        const folders = (0, getFolderNames_1.getFolderNames)(this.sku);
        return this.hasSelection ? [FILESYSTEM_ROOT, FILESYSTEM_PRODUCTS, ...folders, this.selected === 'original' ? this.filename : (0, getFolderNames_1.getRemBgName)(this.filename, REMOVE_BG_SUFFIX, REMOVE_BG_EXT)].join('\\') : undefined;
    }
    get hasSelection() {
        return this.selected != null;
    }
    get isDoNotRemBG() {
        var _a, _b;
        return (_b = (_a = this.flags) === null || _a === void 0 ? void 0 : _a.includes('do-not-rembg')) !== null && _b !== void 0 ? _b : false;
    }
    get isIgnored() {
        var _a, _b;
        return (_b = (_a = this.flags) === null || _a === void 0 ? void 0 : _a.includes('ignore')) !== null && _b !== void 0 ? _b : false;
    }
}
exports.ProductImage = ProductImage;
ProductImage.labelProperty = 'filename';
ProductImage.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.productImage()),
    primaryKey: '_id',
    properties: {
        _id: _1.$.objectId(),
        fullpath: _1.$.string(),
        filename: _1.$.string(),
        extension: _1.$.string.opt,
        mimeType: _1.$.string.opt,
        sku: _1.$.sku(),
        flags: _1.$.string.list,
        takenOn: _1.$.date.opt,
        caption: _1.$.string.opt,
        facing: _1.$.productFacing(),
        selected: _1.$.string.opt,
        stage: _1.$.string.opt,
        hasRemBG: _1.$.bool.default(false),
        disposition: _1.$.string.opt
    }
};
//     markUpper(): void {
//         this.facing?.markUpper();
//     }
//     markLower(): void {
//         this.facing?.markLower();
//     }
//     markLeft(): void {
//         this.facing?.markLeft();
//     }
//     markRight(): void {
//         this.facing?.markRight();
//     }
//     markFront(): void {
//         this.facing?.markFront();
//     }
//     markBack(): void {
//         this.facing?.markBack();
//     }
//     markInner(): void {
//         this.facing?.markInner();
//     }
//     markLogo(): void {
//         this.facing?.markLogo();
//     }
//     markUPC(): void {
//         this.facing?.markUPC();
//     }
//     markEnhancer(): void {
//         this.facing?.markEnhancer();
//     }
//     markDefect(): void {
//         this.facing?.markDefect();
//     }
//     markTag(): void {
//         this.facing?.markTag();
//     }
// }
//# sourceMappingURL=productImage.js.map