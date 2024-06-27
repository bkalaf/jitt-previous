"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerConsumptionMeasure = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const IntMeasure_1 = require("./IntMeasure");
class PowerConsumptionMeasure extends IntMeasure_1.IntMeasure {
    static init() {
        return {
            value: 0,
            uom: 'WHr'
        };
    }
}
exports.PowerConsumptionMeasure = PowerConsumptionMeasure;
PowerConsumptionMeasure.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.powerConsumptionMeasure()),
    embedded: true,
    properties: {
        uom: _1.$.string.default('WHr'),
        value: _1.$.int.default(0)
    }
};
//# sourceMappingURL=PowerConsumptionMeasure.js.map