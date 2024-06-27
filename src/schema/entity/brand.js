"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brand = exports.createFolderName = exports.fromCharCode = exports.toCharCode = exports.getRange = void 0;
const realm_1 = require("realm");
const schemaName_1 = require("../../util/schemaName");
const _1 = require("../$");
const distinct_1 = require("../../common/array/distinct");
const EntityBase_1 = require("./EntityBase");
const runTransaction_1 = require("../../util/runTransaction");
function getRange(low, high) {
    if (low === high)
        return [];
    return [low, ...getRange(low + 1, high)];
}
exports.getRange = getRange;
function toCharCode(s) {
    return s.charCodeAt(0);
}
exports.toCharCode = toCharCode;
function fromCharCode(n) {
    return String.fromCharCode(n);
}
exports.fromCharCode = fromCharCode;
function createFolderName(name) {
    const chars = [...getRange(toCharCode('a'), toCharCode('z')), ...getRange(toCharCode('A'), toCharCode('Z')), ...getRange(toCharCode('0'), toCharCode('9')), toCharCode('_'), toCharCode('-')];
    return name
        .split('')
        .filter((x) => chars.includes(toCharCode(x)))
        .join('')
        .toLowerCase();
}
exports.createFolderName = createFolderName;
class Brand extends EntityBase_1.EntityBase {
    get allHashTags() {
        var _a, _b;
        return (0, distinct_1.distinctByOID)([...this.hashTags, ...((_b = (_a = this.mercariBrand) === null || _a === void 0 ? void 0 : _a.hashTags) !== null && _b !== void 0 ? _b : [])]);
    }
    static update(item) {
        const func = () => {
            if (item.folder == null || item.folder === '') {
                item.folder = createFolderName(item.name);
            }
        };
        (0, runTransaction_1.runTransaction)(Brand.localRealm, func);
        return item;
    }
    static init() {
        return {
            _id: new realm_1.BSON.ObjectId(),
            name: '',
            hashTags: [],
            folder: ''
        };
    }
}
exports.Brand = Brand;
Brand.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.brand()),
    primaryKey: '_id',
    properties: {
        _id: _1.$.objectId(),
        name: _1.$.string(),
        mercariBrand: _1.$.mercariBrand(),
        hashTags: _1.$.hashTag.list,
        folder: _1.$.string()
    }
};
Brand.labelProperty = 'name';
//# sourceMappingURL=brand.js.map