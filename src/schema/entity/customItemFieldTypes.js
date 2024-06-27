"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomItemFieldTypes = void 0;
const schemaName_1 = require("../../util/schemaName");
const _1 = require("../$");
const EntityBase_1 = require("./EntityBase");
class CustomItemFieldTypes extends EntityBase_1.EntityBase {
    static update(item) {
        return item;
    }
    static init() {
        return {
            types: []
        };
    }
}
exports.CustomItemFieldTypes = CustomItemFieldTypes;
CustomItemFieldTypes.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.customItemFieldTypes()),
    embedded: true,
    properties: {
        types: _1.$.customItemFieldType.list
    }
};
CustomItemFieldTypes.liComponent = (value) => () => (value == null ? '' : value.types.map((x) => x.type).join(', '));
//# sourceMappingURL=customItemFieldTypes.js.map