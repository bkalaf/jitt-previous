"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistanceMeasure = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const DoubleMeasure_1 = require("./DoubleMeasure");
class DistanceMeasure extends DoubleMeasure_1.DoubleMeasure {
    static init() {
        return {
            value: 0.0,
            uom: 'ft'
        };
    }
}
exports.DistanceMeasure = DistanceMeasure;
DistanceMeasure.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.distanceMeasure()),
    embedded: true,
    properties: {
        uom: _1.$.string.default('ft'),
        value: _1.$.double.default(0.0)
    }
};
//# sourceMappingURL=DistanceMeasure.js.map