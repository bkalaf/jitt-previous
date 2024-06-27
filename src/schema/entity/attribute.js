"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attribute = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const EntityBase_1 = require("./EntityBase");
class Attribute extends EntityBase_1.EntityBase {
    static update(item) {
        return item;
    }
    static init() {
        return {
            path: '',
            unset: false
        };
    }
}
exports.Attribute = Attribute;
Attribute.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.attribute()),
    embedded: true,
    properties: {
        path: _1.$.string(),
        unset: _1.$.bool(),
        value: _1.$.mixed()
    }
};
Attribute.liComponent = (value) => () => (value == null ? '' : [value.path, value.value].join(' == '));
//# sourceMappingURL=attribute.js.map