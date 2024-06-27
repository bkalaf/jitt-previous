"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DensityMeasure = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const DoubleMeasure_1 = require("./DoubleMeasure");
class DensityMeasure extends DoubleMeasure_1.DoubleMeasure {
    static init() {
        return {
            value: 0.0,
            uom: 'g/cm³'
        };
    }
}
exports.DensityMeasure = DensityMeasure;
DensityMeasure.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.densityMeasure()),
    embedded: true,
    properties: {
        uom: _1.$.string.default('g/cm³'),
        value: _1.$.double.default(0.0)
    }
};
//# sourceMappingURL=DensityMeasure.js.map