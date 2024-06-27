"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateOfEnergyCapacityMeasure = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const IntMeasure_1 = require("./IntMeasure");
class RateOfEnergyCapacityMeasure extends IntMeasure_1.IntMeasure {
    static init() {
        return {
            value: 0,
            uom: 'mAh'
        };
    }
}
exports.RateOfEnergyCapacityMeasure = RateOfEnergyCapacityMeasure;
RateOfEnergyCapacityMeasure.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.rateOfEnergyMeasure()),
    embedded: true,
    properties: {
        uom: _1.$.string.default('mAh'),
        value: _1.$.int.default(0)
    }
};
//# sourceMappingURL=RateOfEnergyCapacityMeasure.js.map