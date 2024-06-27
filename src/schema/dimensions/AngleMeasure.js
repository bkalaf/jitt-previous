"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AngleMeasure = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const IntMeasure_1 = require("./IntMeasure");
const unicode_1 = __importDefault(require("./unicode"));
class AngleMeasure extends IntMeasure_1.IntMeasure {
    static init() {
        return {
            value: 0,
            uom: unicode_1.default.DEGREE
        };
    }
}
exports.AngleMeasure = AngleMeasure;
AngleMeasure.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.angleMeasure()),
    embedded: true,
    properties: {
        uom: _1.$.string.default('°'),
        value: _1.$.int.default(0)
    }
};
//# sourceMappingURL=AngleMeasure.js.map