"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shipping = void 0;
const schemaName_1 = require("../../util/schemaName");
const _1 = require("../$");
const EntityBase_1 = require("./EntityBase");
class Shipping extends EntityBase_1.EntityBase {
    static update(item) {
        return item;
    }
    static init() {
        return {
            id: 9999,
            version: 9999
        };
    }
}
exports.Shipping = Shipping;
Shipping.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.shipping()),
    embedded: true,
    properties: {
        id: _1.$.int(),
        version: _1.$.int()
    }
};
Shipping.labelProperty = 'id';
//# sourceMappingURL=shipping.js.map