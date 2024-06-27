"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicDurationMeasure = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const IntMeasure_1 = require("./IntMeasure");
class MusicDurationMeasure extends IntMeasure_1.IntMeasure {
    static init() {
        return {
            value: 0,
            uom: 's'
        };
    }
}
exports.MusicDurationMeasure = MusicDurationMeasure;
MusicDurationMeasure.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.musicDurationMeasure()),
    embedded: true,
    properties: {
        uom: _1.$.string.default('s'),
        value: _1.$.int.default(0)
    }
};
//# sourceMappingURL=MusicDurationMeasure.js.map