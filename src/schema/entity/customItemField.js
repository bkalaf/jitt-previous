"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomItemField = void 0;
const realm_1 = require("realm");
const schemaName_1 = require("../../util/schemaName");
const _1 = require("../$");
const EntityBase_1 = require("./EntityBase");
// ex: CustomItemFieldId-Platform
class CustomItemField extends EntityBase_1.EntityBase {
    get getTaxonomy() {
        return this.linkingObjects((0, schemaName_1.schemaName)(_1.$.mercariTaxonomy()), 'customItemField');
    }
    static update(item) {
        return item;
    }
    static init() {
        return {
            _id: new realm_1.BSON.ObjectId(),
            brandsMap: {},
            id: ''
        };
    }
}
exports.CustomItemField = CustomItemField;
CustomItemField.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.customItemField()),
    primaryKey: '_id',
    properties: {
        _id: _1.$.objectId(),
        linkedType: _1.$.string.opt,
        id: _1.$.string(),
        brandsMap: _1.$.customItemFieldTypes.dictionary
    }
};
CustomItemField.liComponent = (value) => () => (value == null ? '' : [value.id].join(' - '));
//# sourceMappingURL=customItemField.js.map