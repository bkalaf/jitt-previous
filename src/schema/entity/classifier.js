"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Classifier = void 0;
const realm_1 = require("realm");
const schemaName_1 = require("../../util/schemaName");
const _1 = require("../$");
const runTransaction_1 = require("../../util/runTransaction");
const distinct_1 = require("../../common/array/distinct");
const EntityBase_1 = require("./EntityBase");
class Classifier extends EntityBase_1.EntityBase {
    static update(item) {
        const func = () => {
            var _a;
            const name = [(_a = item.parent) === null || _a === void 0 ? void 0 : _a.name, item.shortName].join(' || ');
            if (name !== item.name) {
                item.name = name;
            }
        };
        (0, runTransaction_1.runTransaction)(Classifier.localRealm, func);
        return item;
    }
    static init() {
        return {
            _id: new realm_1.BSON.ObjectId(),
            shortName: '',
            name: '',
            hashTags: [],
            type: [],
            attributes: []
        };
    }
    get allHashTags() {
        var _a, _b, _c, _d;
        return (0, distinct_1.distinctByOID)([...this.hashTags, ...((_b = (_a = this.taxonomy) === null || _a === void 0 ? void 0 : _a.allHashTags) !== null && _b !== void 0 ? _b : []), ...((_d = (_c = this.parent) === null || _c === void 0 ? void 0 : _c.allHashTags) !== null && _d !== void 0 ? _d : [])]);
    }
    get detailTypes() {
        var _a, _b, _c;
        return (0, distinct_1.distinctBy)((left, right) => left === right, [...((_b = (_a = this === null || this === void 0 ? void 0 : this.parent) === null || _a === void 0 ? void 0 : _a.detailTypes) !== null && _b !== void 0 ? _b : []), ...((_c = this.type) !== null && _c !== void 0 ? _c : [])]);
    }
    get allAttributes() {
        var _a, _b, _c;
        const map = new Map();
        (0, distinct_1.distinctBy)((left, right) => left.path === right.path, [...((_b = (_a = this === null || this === void 0 ? void 0 : this.parent) === null || _a === void 0 ? void 0 : _a.allAttributes) !== null && _b !== void 0 ? _b : []), ...((_c = this.attributes) !== null && _c !== void 0 ? _c : [])]).forEach((x) => map.set(x.path, x));
        return Array.from(map.values());
    }
    get subRows() {
        // const key = Object.getOwnPropertySymbols(this).find(x => x.toString().includes('#realm'))
        // if (key == null) throw new Error('cannot find symbol')
        return this.linkingObjects('classifier', 'parent');
    }
}
exports.Classifier = Classifier;
Classifier.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.classifier()),
    primaryKey: '_id',
    properties: {
        _id: _1.$.objectId(),
        taxonomy: _1.$.mercariTaxonomy(),
        shortName: _1.$.string(),
        parent: _1.$.classifier(),
        name: _1.$.string(),
        type: _1.$.string.list,
        attributes: _1.$.attribute.list,
        hashTags: _1.$.hashTag.list
    }
};
Classifier.labelProperty = 'name';
//# sourceMappingURL=classifier.js.map