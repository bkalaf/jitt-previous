"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaliperSizeMeasure = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const DoubleMeasure_1 = require("./DoubleMeasure");
class CaliperSizeMeasure extends DoubleMeasure_1.DoubleMeasure {
    static init() {
        return {
            value: 0.0,
            uom: '″'
        };
    }
}
exports.CaliperSizeMeasure = CaliperSizeMeasure;
CaliperSizeMeasure.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.caliperSizeMeasure()),
    embedded: true,
    properties: {
        uom: _1.$.string.default('″'),
        value: _1.$.double.default(0.0)
    }
};
//# sourceMappingURL=CaliperSizeMeasure.js.map