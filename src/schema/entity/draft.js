"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Draft = void 0;
const realm_1 = require("realm");
const schemaName_1 = require("../../util/schemaName");
const _1 = require("../$");
const enums_1 = __importDefault(require("../enums"));
const shippingRates_1 = require("../enums/shippingRates");
const itemConditions_1 = require("../enums/itemConditions");
const is_1 = require("../../common/is");
const titleGenerator_1 = require("../../components/table/controls/titleGenerator");
const runTransaction_1 = require("../../util/runTransaction");
const EntityBase_1 = require("./EntityBase");
class Draft extends EntityBase_1.EntityBase {
    get isListed() {
        return this.listingID == null;
    }
    get getIsNoBrand() {
        var _a, _b;
        return ((_b = (_a = this.sku.product) === null || _a === void 0 ? void 0 : _a.brand) === null || _b === void 0 ? void 0 : _b.mercariBrand) == null;
    }
    get getDims() {
        var _a;
        const { length, width, height } = Object.assign({ length: 0, width: 0, height: 0 }, ((_a = this.sku.product) !== null && _a !== void 0 ? _a : {}));
        return { length, width, height };
    }
    get getWeight() {
        var _a;
        const { pounds, ounces } = Object.assign({ pounds: 0, ounces: 0 }, ((_a = this.sku.getMaxWeight) !== null && _a !== void 0 ? _a : {}));
        return { pounds, ounces };
    }
    get getShipping() {
        var _a, _b;
        // const service = this.sku.getIsMediaMail ? 'media-mail' : 'standard';
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { id, version } = Object.assign({ id: 0, version: 0 }, ((_a = this.sku.getShipping) !== null && _a !== void 0 ? _a : {}));
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { category: service, carrier, price, weight } = Object.assign({ category: 'standard', price: 0, carrier: 'USPS Ground Advantage', weight: 0 }, ((_b = (0, shippingRates_1.getShippingById)(id)) !== null && _b !== void 0 ? _b : {}));
        const selector = `input#{id}`;
        return { carrier, price, selector, service };
    }
    get getColor() {
        var _a, _b;
        const colorMap = enums_1.default.productColors.map((x) => Object.fromEntries([[x.key, x], ...x.aliases.map((y) => [y, x])])).reduce((pv, cv) => (Object.assign(Object.assign({}, pv), cv)), {});
        const colors = (_b = (_a = this.sku.product) === null || _a === void 0 ? void 0 : _a.color) !== null && _b !== void 0 ? _b : [];
        const color = colors.length > 0 ? colors[0] : undefined;
        return color ? { selector: colorMap[color].selector, name: color } : undefined;
    }
    get getCondition() {
        var _a, _b;
        const selector = itemConditions_1.itemConditions.getSelector((_a = this.sku.condition) !== null && _a !== void 0 ? _a : 'like-new');
        const name = itemConditions_1.itemConditions.getText((_b = this.sku.condition) !== null && _b !== void 0 ? _b : 'like-new');
        return { selector, name };
    }
    get getBrandName() {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.sku.product) === null || _a === void 0 ? void 0 : _a.brand) === null || _b === void 0 ? void 0 : _b.mercariBrand) === null || _c === void 0 ? void 0 : _c.name;
    }
    get getCategory() {
        var _a, _b, _c;
        const category = (_c = (_b = (_a = this.sku.product) === null || _a === void 0 ? void 0 : _a.classifier) === null || _b === void 0 ? void 0 : _b.taxonomy) === null || _c === void 0 ? void 0 : _c.category;
        if (category == null)
            throw new Error('no category');
        return category;
    }
    get getSubCategory() {
        var _a, _b, _c;
        const category = (_c = (_b = (_a = this.sku.product) === null || _a === void 0 ? void 0 : _a.classifier) === null || _b === void 0 ? void 0 : _b.taxonomy) === null || _c === void 0 ? void 0 : _c.subCategory;
        if (category == null)
            throw new Error('no category');
        return category;
    }
    get getSubSubCategory() {
        var _a, _b, _c;
        const category = (_c = (_b = (_a = this.sku.product) === null || _a === void 0 ? void 0 : _a.classifier) === null || _b === void 0 ? void 0 : _b.taxonomy) === null || _c === void 0 ? void 0 : _c.subSubCategory;
        if (category == null)
            throw new Error('no category');
        return category;
    }
    get getHashTags() {
        var _a;
        return ((_a = this.sku.allHashTags
            .sort((l, r) => {
            return (l.maxCount > r.maxCount ? -1
                : l.maxCount < r.maxCount ? 1
                    : 0);
        })
            .map((x) => x.name)
            .slice(0, 7)) !== null && _a !== void 0 ? _a : []);
    }
    get getImages() {
        var _a;
        return (_a = this.sku) === null || _a === void 0 ? void 0 : _a.getProductImages.map((x) => x.effective).filter(is_1.is.not.nil);
    }
    get getShouldLocalDelivery() {
        return this.getShipping.price > 14;
    }
    get getShouldSmartPricing() {
        return this.price > 13;
    }
    static update(item) {
        const realm = Draft.localRealm;
        const func = () => {
            var _a;
            if (item.sku == null)
                throw new Error('no sku');
            if (item.sku.product == null)
                throw new Error('no product');
            item.title = (_a = (item.sku.product.overrideTitle ? item.sku.product.title : (0, titleGenerator_1.generateTitle)(item.sku, true))) !== null && _a !== void 0 ? _a : '';
            item.description = (0, titleGenerator_1.generateNarrative)(item.sku, true);
            item.isLocalDelivery = item.getShouldLocalDelivery;
            item.smartPricing = item.getShouldSmartPricing;
            item.smartPrice = item.getShouldSmartPricing ? item.price * 0.8 : undefined;
        };
        (0, runTransaction_1.runTransaction)(realm, func);
        return item;
    }
    static createDraft(realm, sku, price = 10) {
        let result = undefined;
        const func = () => {
            const draft = {
                _id: new realm_1.BSON.ObjectId(),
                sku,
                title: '',
                description: '',
                price,
                isLocalDelivery: false,
                payor: 'buyer',
                smartPricing: false,
                smartPrice: undefined
            };
            result = realm.create((0, schemaName_1.schemaName)(_1.$.draft()), draft);
        };
        (0, runTransaction_1.runTransaction)(realm, func);
        return Draft.update(result);
    }
    static init() {
        return {
            _id: new realm_1.BSON.ObjectId(),
            sku: undefined,
            title: '',
            description: '',
            price: 0,
            isLocalDelivery: false,
            payor: 'buyer',
            smartPricing: false,
            smartPrice: undefined
        };
    }
}
exports.Draft = Draft;
Draft.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.draft()),
    primaryKey: '_id',
    properties: {
        _id: _1.$.objectId(),
        sku: _1.$.sku(),
        title: _1.$.string(),
        description: _1.$.string(),
        price: _1.$.float(),
        isLocalDelivery: _1.$.bool.default(false),
        payor: _1.$.string.default('buyer'),
        smartPricing: _1.$.bool.default(false),
        smartPrice: _1.$.float.opt,
        listingID: _1.$.string.opt
    }
};
Draft.labelProperty = 'title';
//# sourceMappingURL=draft.js.map