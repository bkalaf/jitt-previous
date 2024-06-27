"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomItemFieldType = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const EntityBase_1 = require("./EntityBase");
class CustomItemFieldType extends EntityBase_1.EntityBase {
    get getMercariBrand() {
        return this.linkingObjects('mercariBrand', 'customItemFields');
    }
    static update(item) {
        return item;
    }
    static init() {
        return {
            values: []
        };
    }
}
exports.CustomItemFieldType = CustomItemFieldType;
CustomItemFieldType.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.customItemFieldType()),
    embedded: true,
    properties: {
        type: _1.$.string.opt,
        values: _1.$.customItemFieldValue.list
    }
};
CustomItemFieldType.labelProperty = 'type';
//# sourceMappingURL=customItemFieldType.js.map