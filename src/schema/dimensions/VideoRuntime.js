"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoRuntimeMeasure = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const IntMeasure_1 = require("./IntMeasure");
class VideoRuntimeMeasure extends IntMeasure_1.IntMeasure {
    static init() {
        return {
            value: 0,
            uom: 'm'
        };
    }
}
exports.VideoRuntimeMeasure = VideoRuntimeMeasure;
VideoRuntimeMeasure.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.videoRuntimeMeasure()),
    embedded: true,
    properties: {
        uom: _1.$.string.default('m'),
        value: _1.$.int.default(0)
    }
};
//# sourceMappingURL=VideoRuntime.js.map