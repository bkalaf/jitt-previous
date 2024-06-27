"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sku = void 0;
const realm_1 = require("realm");
const barcodeFormatter_1 = require("../../util/barcodeFormatter");
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const titleGenerator_1 = require("../../components/table/controls/titleGenerator");
const convertFromGrams_1 = require("../../components/table/controls/convertFromGrams");
const shippingRates_1 = require("../enums/shippingRates");
const runTransaction_1 = require("../../util/runTransaction");
const barcode_1 = require("./barcode");
const distinct_1 = require("../../common/array/distinct");
const EntityBase_1 = require("./EntityBase");
const getInitFor_1 = require("./getInitFor");
class Sku extends EntityBase_1.EntityBase {
    get allHashTags() {
        var _a, _b, _c;
        return (0, distinct_1.distinctByOID)([...((_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.allHashTags) !== null && _b !== void 0 ? _b : []), ...((_c = this.hashTags) !== null && _c !== void 0 ? _c : [])]);
    }
    get hasDraft() {
        return this.linkingObjects('draft', 'sku').length > 0;
    }
    static init() {
        return {
            _id: new realm_1.BSON.ObjectId(),
            defects: [],
            hashTags: [],
            skus: [],
            disposition: 'not-listed',
            condition: 'like-new',
            packingPercent: 1.3,
            quantity: 1
        };
    }
    static addFromProduct(product) {
        const sku = (0, getInitFor_1.getInitFor)(Sku, 'sku');
        const item = sku();
        item.product = product;
        let result = undefined;
        const func = () => {
            result = Sku.localRealm.create('sku', item);
            Sku.update(result);
        };
        (0, runTransaction_1.runTransaction)(Sku.localRealm, func);
        return result;
    }
    addBarcode(generator) {
        const bc = barcode_1.Barcode.createFromFullUPC(generator());
        const func = () => {
            var _a;
            this.skus = [...((_a = this.skus) !== null && _a !== void 0 ? _a : []), bc];
        };
        (0, runTransaction_1.runTransaction)(Sku.localRealm, func);
        return this;
    }
    get getIsMediaMail() {
        var _a, _b;
        return (_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.flags.includes('isMediaMail')) !== null && _b !== void 0 ? _b : false;
    }
    get getShipping() {
        var _a, _b, _c;
        const { pounds, ounces } = Object.assign({ pounds: 0, ounces: 0 }, ((_b = (0, convertFromGrams_1.convertFromGrams)((_a = this.getShipWeight) !== null && _a !== void 0 ? _a : 0)) !== null && _b !== void 0 ? _b : {}));
        const wght = pounds + ounces / 16;
        const { id } = Object.assign({ id: undefined }, ((_c = (0, shippingRates_1.getShipping)(wght !== null && wght !== void 0 ? wght : 0, this.getIsMediaMail)) !== null && _c !== void 0 ? _c : {}));
        return { id: id !== null && id !== void 0 ? id : 0, version: shippingRates_1.CURRENT_SHIPPING_VERSION };
    }
    get getShipWeight() {
        var _a;
        if (this.product == null)
            throw new Error('no product');
        const { weight } = this.product;
        const shipWeight = (weight !== null && weight !== void 0 ? weight : 0) * ((_a = this.packingPercent) !== null && _a !== void 0 ? _a : 1.0);
        return shipWeight;
    }
    get getCarrier() {
        var _a, _b;
        return (_b = (0, shippingRates_1.getShippingById)((_a = this.shipping) === null || _a === void 0 ? void 0 : _a.id)) === null || _b === void 0 ? void 0 : _b.carrier;
    }
    get getShippingPrice() {
        var _a, _b;
        return (_b = (0, shippingRates_1.getShippingById)((_a = this.shipping) === null || _a === void 0 ? void 0 : _a.id)) === null || _b === void 0 ? void 0 : _b.price;
    }
    get getMaxWeight() {
        var _a, _b;
        return (0, convertFromGrams_1.convertToPoundsOunces)((_b = (0, shippingRates_1.getShippingById)((_a = this.shipping) === null || _a === void 0 ? void 0 : _a.id)) === null || _b === void 0 ? void 0 : _b.weight);
    }
    get getFolder() {
        return (0, barcodeFormatter_1.barcodeFormatter)(this.skus[0]);
    }
    get getProductImages() {
        return this.linkingObjects((0, schemaName_1.schemaName)(_1.$.productImage()), 'sku');
    }
    get getTitle() {
        var _a;
        return (_a = this.product) === null || _a === void 0 ? void 0 : _a.title;
    }
    static update(item) {
        const realm = Sku.localRealm;
        const func = () => {
            const title = (0, titleGenerator_1.generateTitle)(item);
            if (item.product == null)
                throw new Error('no product');
            if (!item.product.overrideTitle) {
                item.product.title = title;
            }
            const shipping = item.getShipping;
            item.shipping = shipping;
            if (Sku.barcodeGenerator == null) {
                throw new Error('barcode generator null on Sku');
            }
            if (item.skus == null || item.skus.length === 0) {
                console.info('adding sku to Sku');
                item.addBarcode(Sku.barcodeGenerator);
            }
        };
        (0, runTransaction_1.runTransaction)(realm, func);
        return item;
    }
}
exports.Sku = Sku;
Sku.labelProperty = 'disposition';
Sku.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.sku()),
    primaryKey: '_id',
    properties: {
        _id: _1.$.objectId(),
        auction: _1.$.auction(),
        condition: _1.$.string.opt,
        defects: _1.$.string.list,
        disposition: _1.$.string.opt,
        packingPercent: _1.$.double.opt,
        product: _1.$.product(),
        quantity: _1.$.int.opt,
        skus: _1.$.barcode.list,
        shipping: _1.$.shipping(),
        hashTags: _1.$.hashTag.list
    }
};
//# sourceMappingURL=sku.js.map