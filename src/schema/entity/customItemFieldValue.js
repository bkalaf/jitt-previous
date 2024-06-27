"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomItemFieldValue = void 0;
const schemaName_1 = require("../../util/schemaName");
const _1 = require("../$");
const EntityBase_1 = require("./EntityBase");
class CustomItemFieldValue extends EntityBase_1.EntityBase {
    get getParent() {
        return this.linkingObjects((0, schemaName_1.schemaName)(_1.$.customItemField()), 'options');
    }
    static update(item) {
        return item;
    }
    static init() {
        return {
            text: '',
            id: ''
        };
    }
}
exports.CustomItemFieldValue = CustomItemFieldValue;
CustomItemFieldValue.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.customItemFieldValue()),
    embedded: true,
    properties: {
        text: _1.$.string(),
        id: _1.$.string(),
        nextField: _1.$.customItemField()
    }
};
CustomItemFieldValue.labelProperty = 'id';
//# sourceMappingURL=customItemFieldValue.js.map