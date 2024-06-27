"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercariTaxonomy = void 0;
const realm_1 = require("realm");
const schemaName_1 = require("../../util/schemaName");
const _1 = require("../$");
const runTransaction_1 = require("../../util/runTransaction");
const EntityBase_1 = require("./EntityBase");
const getInitFor_1 = require("./getInitFor");
class MercariTaxonomy extends EntityBase_1.EntityBase {
    static update(item) {
        const func = () => {
            var _a, _b, _c;
            const fullname = [(_a = item === null || item === void 0 ? void 0 : item.category) === null || _a === void 0 ? void 0 : _a.name, (_b = item === null || item === void 0 ? void 0 : item.subCategory) === null || _b === void 0 ? void 0 : _b.name, (_c = item === null || item === void 0 ? void 0 : item.subSubCategory) === null || _c === void 0 ? void 0 : _c.name].filter((x) => x != null).join('::');
            console.info(`update-taxonomy`, item, fullname);
            if (item.fullname !== fullname) {
                item.fullname = fullname;
            }
        };
        (0, runTransaction_1.runTransaction)(MercariTaxonomy.localRealm, func);
        return item;
    }
    static init() {
        const mercariCategory = (0, getInitFor_1.getInitFor)(MercariTaxonomy, 'mercariCategory');
        return {
            _id: new realm_1.BSON.ObjectId(),
            fullname: '',
            hashTags: [],
            category: mercariCategory(),
            subCategory: mercariCategory(),
            subSubCategory: mercariCategory(),
            timestamp: new Date(Date.now()),
            sizes: []
        };
    }
}
exports.MercariTaxonomy = MercariTaxonomy;
MercariTaxonomy.labelProperty = 'fullname';
MercariTaxonomy.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.mercariTaxonomy()),
    primaryKey: '_id',
    properties: {
        _id: _1.$.objectId(),
        category: _1.$.mercariCategory(),
        subCategory: _1.$.mercariCategory(),
        subSubCategory: _1.$.mercariCategory(),
        hashTags: _1.$.hashTag.list,
        fullname: _1.$.string(),
        timestamp: _1.$.date.opt,
        customItemField: _1.$.customItemField(),
        sizes: _1.$.apparelSize.list
    }
};
//# sourceMappingURL=mercariTaxonomy.js.map