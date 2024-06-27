"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapacityMeasure = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const IntMeasure_1 = require("./IntMeasure");
class CapacityMeasure extends IntMeasure_1.IntMeasure {
    static init() {
        return {
            value: 0,
            uom: 'GB'
        };
    }
}
exports.CapacityMeasure = CapacityMeasure;
CapacityMeasure.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.capacityMeasure()),
    embedded: true,
    properties: {
        uom: _1.$.string.default('GB'),
        value: _1.$.int.default(0)
    }
};
//# sourceMappingURL=CapacityMeasure.js.map