"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinMax = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const EntityBase_1 = require("./EntityBase");
class MinMax extends EntityBase_1.EntityBase {
    static update(item) {
        return item;
    }
    static init() {
        return {};
    }
}
exports.MinMax = MinMax;
MinMax.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.minMax()),
    embedded: true,
    properties: {
        min: _1.$.int.opt,
        max: _1.$.int.opt
    }
};
MinMax.liComponent = (value) => () => (value == null ? '' : [value.min, value.max].filter((x) => x != null).join(' to '));
//# sourceMappingURL=minMax.js.map