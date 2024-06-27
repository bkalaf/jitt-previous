"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MadeOfSection = void 0;
const schemaName_1 = require("../../util/schemaName");
const _1 = require("../$");
const EntityBase_1 = require("./EntityBase");
class MadeOfSection extends EntityBase_1.EntityBase {
    static update(item) {
        return item;
    }
    static init() {
        return {
            section: {}
        };
    }
}
exports.MadeOfSection = MadeOfSection;
MadeOfSection.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.madeOfSection()),
    embedded: true,
    properties: {
        name: _1.$.string.opt,
        section: _1.$.double.dictionary
    }
};
MadeOfSection.liComponent = (value) => () => value != null ?
    [
        value.name,
        Object.entries(value.section)
            .map(([k, v]) => [k, (v * 100).toFixed(0).concat('%')].join(': '))
            .join('\n')
    ].join('\n')
    : '';
//# sourceMappingURL=madeOfSection.js.map