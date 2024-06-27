"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfStorage = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const realm_1 = require("realm");
const EntityBase_1 = require("./EntityBase");
class SelfStorage extends EntityBase_1.EntityBase {
    static init() {
        return {
            _id: new realm_1.BSON.ObjectId(),
            name: ''
        };
    }
    static update(item) {
        return item;
    }
}
exports.SelfStorage = SelfStorage;
SelfStorage.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.selfStorage()),
    primaryKey: '_id',
    properties: {
        _id: _1.$.objectId(),
        name: _1.$.string(),
        website: _1.$.string.opt
    }
};
SelfStorage.labelProperty = 'name';
//# sourceMappingURL=selfStorage.js.map