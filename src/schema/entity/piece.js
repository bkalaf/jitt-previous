"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
const schemaName_1 = require("../../util/schemaName");
const _1 = require("../$");
const is_1 = require("../../common/is");
const EntityBase_1 = require("./EntityBase");
class Piece extends EntityBase_1.EntityBase {
    static update(item) {
        return item;
    }
    static init() {
        return {
            count: 1
        };
    }
}
exports.Piece = Piece;
Piece.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.piece()),
    embedded: true,
    properties: {
        shape: _1.$.string.opt,
        count: _1.$.int()
    }
};
Piece.liComponent = (value) => () => [value.count.toFixed(0).concat('x'), value.shape].filter(is_1.is.not.nil).join(' ');
//# sourceMappingURL=piece.js.map