"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncludedItem = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const EntityBase_1 = require("./EntityBase");
class IncludedItem extends EntityBase_1.EntityBase {
    static update(item) {
        return item;
    }
    static init() {
        return {
            qty: 1,
            name: ''
        };
    }
}
exports.IncludedItem = IncludedItem;
IncludedItem.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.includedItem()),
    embedded: true,
    properties: {
        qty: _1.$.int.default(1),
        name: _1.$.string()
    }
};
IncludedItem.liComponent = (value) => () => (value == null ? '' : [value.qty.toFixed(0), value.name].join('x '));
//# sourceMappingURL=includedItem.js.map