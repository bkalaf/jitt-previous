"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Facing = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const generateCaption_1 = require("../../util/generateCaption");
const EntityBase_1 = require("./EntityBase");
class Facing extends EntityBase_1.EntityBase {
    static update(item) {
        return item;
    }
    static init() {
        return {
            pov: []
        };
    }
}
exports.Facing = Facing;
Facing.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.productFacing()),
    embedded: true,
    properties: {
        x: _1.$.string.opt,
        y: _1.$.string.opt,
        z: _1.$.string.opt,
        pov: _1.$.string.list
    }
};
Facing.liComponent = (value) => () => (value == null ? '' : (0, generateCaption_1.generateCaption)(value));
//# sourceMappingURL=facing.js.map