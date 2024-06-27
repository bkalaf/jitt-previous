"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connector = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const surround_1 = require("../../common/text/surround");
const truncateAuto_1 = require("../../common/number/truncateAuto");
const is_1 = require("../../common/is");
const EntityBase_1 = require("./EntityBase");
class Connector extends EntityBase_1.EntityBase {
    static update(item) {
        return item;
    }
    static init() {
        return {};
    }
}
exports.Connector = Connector;
Connector.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.connector()),
    embedded: true,
    properties: {
        connectorGender: _1.$.string.opt,
        innerWidth: _1.$.caliperSizeDimension(),
        outerWidth: _1.$.caliperSizeDimension(),
        type: _1.$.string.opt,
        generation: _1.$.int.opt
    }
};
Connector.liComponent = (value) => () => value == null ? '' : ([
    value.type,
    value.connectorGender ? (0, surround_1.surround)('(', ')')(value.connectorGender) : undefined,
    value.outerWidth ? [(0, truncateAuto_1.truncateAuto)(value.outerWidth), 'mm'].join(' ') : undefined,
    value.innerWidth ? [(0, truncateAuto_1.truncateAuto)(value.innerWidth), 'mm'].join(' ') : undefined
]
    .filter(is_1.is.not.nil)
    .join(' '));
//# sourceMappingURL=connector.js.map