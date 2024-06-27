"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemorySpeedMeasure = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const IntMeasure_1 = require("./IntMeasure");
class MemorySpeedMeasure extends IntMeasure_1.IntMeasure {
    static init() {
        return {
            value: 0,
            uom: 'MHz'
        };
    }
}
exports.MemorySpeedMeasure = MemorySpeedMeasure;
MemorySpeedMeasure.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.memorySpeedMeasure()),
    embedded: true,
    properties: {
        uom: _1.$.string.default('MHz'),
        value: _1.$.int.default(0)
    }
};
//# sourceMappingURL=MemorySpeedMeasure.js.map