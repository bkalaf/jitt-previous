"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercariBrand = void 0;
const realm_1 = require("realm");
const schemaName_1 = require("../../util/schemaName");
const _1 = require("../$");
const runTransaction_1 = require("../../util/runTransaction");
const EntityBase_1 = require("./EntityBase");
class MercariBrand extends EntityBase_1.EntityBase {
    static update(item) {
        const func = () => {
            if (item.timestamp == null) {
                item.timestamp = new Date(Date.now());
            }
            return item;
        };
        return (0, runTransaction_1.runTransaction)(MercariBrand.localRealm, func);
    }
    static init() {
        return {
            _id: new realm_1.BSON.ObjectId(),
            name: '',
            hashTags: [],
            timestamp: new Date(Date.now()),
            customItemFields: []
        };
    }
}
exports.MercariBrand = MercariBrand;
MercariBrand.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.mercariBrand()),
    primaryKey: '_id',
    properties: {
        _id: _1.$.objectId(),
        name: _1.$.string(),
        hashTags: _1.$.hashTag.list,
        timestamp: _1.$.date.opt,
        customItemFields: _1.$.customItemField.list
    }
};
MercariBrand.labelProperty = 'name';
//# sourceMappingURL=mercariBrand.js.map