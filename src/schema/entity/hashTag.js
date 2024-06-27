"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashTag = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const realm_1 = require("realm");
const EntityBase_1 = require("./EntityBase");
class HashTag extends EntityBase_1.EntityBase {
    get maxCount() {
        return Math.max(...this.usage.map((x) => x.count));
    }
    get mostRecent() {
        return new Date(Math.max(...this.usage.map((x) => x.from.valueOf())));
    }
    static update(item) {
        return item;
    }
    static init() {
        return {
            _id: new realm_1.BSON.ObjectId(),
            name: '',
            usage: []
        };
    }
}
exports.HashTag = HashTag;
HashTag.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.hashTag()),
    primaryKey: '_id',
    properties: {
        _id: _1.$.objectId(),
        name: _1.$.string(),
        usage: _1.$.hashTagUsage.list
    }
};
HashTag.labelProperty = 'name';
//# sourceMappingURL=hashTag.js.map