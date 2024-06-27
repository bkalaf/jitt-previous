"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RotationalSpeedMeasure = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const IntMeasure_1 = require("./IntMeasure");
class RotationalSpeedMeasure extends IntMeasure_1.IntMeasure {
    static init() {
        return {
            value: 0,
            uom: 'RPM'
        };
    }
}
exports.RotationalSpeedMeasure = RotationalSpeedMeasure;
RotationalSpeedMeasure.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.rotationalSpeedMeasure()),
    embedded: true,
    properties: {
        uom: _1.$.string.default('RPM'),
        value: _1.$.int.default(0)
    }
};
//# sourceMappingURL=RotationalSpeedMeasure.js.map