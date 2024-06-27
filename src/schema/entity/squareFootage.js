"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquareFootage = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const EntityBase_1 = require("./EntityBase");
class SquareFootage extends EntityBase_1.EntityBase {
    static init() {
        return {};
    }
    static update(item) {
        return item;
    }
}
exports.SquareFootage = SquareFootage;
SquareFootage.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.squareFootage()),
    embedded: true,
    properties: {
        length: _1.$.double.opt,
        width: _1.$.double.opt
    }
};
SquareFootage.liComponent = (value) => () => (value == null ? '' : `${value.length}x${value.width}`);
//# sourceMappingURL=squareFootage.js.map