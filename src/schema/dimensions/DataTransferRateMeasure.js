"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTransferRateMeasure = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const DoubleMeasure_1 = require("./DoubleMeasure");
class DataTransferRateMeasure extends DoubleMeasure_1.DoubleMeasure {
    static init() {
        return {
            value: 0.0,
            uom: 'MB/s'
        };
    }
}
exports.DataTransferRateMeasure = DataTransferRateMeasure;
DataTransferRateMeasure.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.dataTransferRateMeasure()),
    embedded: true,
    properties: {
        uom: _1.$.string.default('MB/s'),
        value: _1.$.double.default(0.0)
    }
};
//# sourceMappingURL=DataTransferRateMeasure.js.map