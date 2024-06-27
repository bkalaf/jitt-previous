"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WattageMeasure = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const IntMeasure_1 = require("./IntMeasure");
class WattageMeasure extends IntMeasure_1.IntMeasure {
    static init() {
        return {
            value: 0,
            uom: 'W'
        };
    }
}
exports.WattageMeasure = WattageMeasure;
WattageMeasure.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.wattageMeasure()),
    embedded: true,
    properties: {
        uom: _1.$.string.default('W'),
        value: _1.$.int.default(0)
    }
};
//# sourceMappingURL=WattageMeasure.js.map