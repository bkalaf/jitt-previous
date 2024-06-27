"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Track = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const EntityBase_1 = require("./EntityBase");
class Track extends EntityBase_1.EntityBase {
    static update(item) {
        return item;
    }
    static init() {
        return {
            feat: []
        };
    }
}
exports.Track = Track;
Track.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.track()),
    embedded: true,
    properties: {
        feat: _1.$.string.list,
        index: _1.$.int(),
        name: _1.$.string.opt,
        duration: _1.$.musicDurationDimension()
    }
};
Track.liComponent = (value) => () => { var _a; return (value == null ? '' : [(_a = value.index) === null || _a === void 0 ? void 0 : _a.toFixed(0), value.name, value.feat ? `feat: ${value.feat.join(', ')}` : undefined].filter((x) => x != null).join('- ')); };
//# sourceMappingURL=track.js.map