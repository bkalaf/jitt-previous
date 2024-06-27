"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoltageMeasure = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const IntMeasure_1 = require("./IntMeasure");
class VoltageMeasure extends IntMeasure_1.IntMeasure {
    static init() {
        return {
            value: 0,
            uom: 'V'
        };
    }
}
exports.VoltageMeasure = VoltageMeasure;
VoltageMeasure.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.voltageMeasure()),
    embedded: true,
    properties: {
        uom: _1.$.string.default('V'),
        value: _1.$.int.default(0)
    }
};
//# sourceMappingURL=VoltageMeasure.js.map