"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LengthMeasure = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const DoubleMeasure_1 = require("./DoubleMeasure");
class LengthMeasure extends DoubleMeasure_1.DoubleMeasure {
    static init() {
        return {
            value: 0.0,
            uom: '″'
        };
    }
}
exports.LengthMeasure = LengthMeasure;
LengthMeasure.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.lengthMeasure()),
    embedded: true,
    properties: {
        uom: _1.$.string.default('″'),
        value: _1.$.double.default(0.0)
    }
};
//# sourceMappingURL=LengthMeasure.js.map