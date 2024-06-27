"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightMeasure = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const DoubleMeasure_1 = require("./DoubleMeasure");
class WeightMeasure extends DoubleMeasure_1.DoubleMeasure {
    static init() {
        return {
            value: 0.0,
            uom: 'g'
        };
    }
}
exports.WeightMeasure = WeightMeasure;
WeightMeasure.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.weightMeasure()),
    embedded: true,
    properties: {
        uom: _1.$.string.default('g'),
        value: _1.$.double.default(0.0)
    }
};
//# sourceMappingURL=WeightMeasure.js.map