"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmperageMeasure = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const IntMeasure_1 = require("./IntMeasure");
class AmperageMeasure extends IntMeasure_1.IntMeasure {
    static init() {
        return {
            value: 0,
            uom: 'A'
        };
    }
}
exports.AmperageMeasure = AmperageMeasure;
AmperageMeasure.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.amperageMeasure()),
    embedded: true,
    properties: {
        uom: _1.$.string.default('A'),
        value: _1.$.int.default(0)
    }
};
//# sourceMappingURL=AmperageMeasure.js.map