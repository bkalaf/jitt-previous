"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApparelSize = void 0;
const schemaName_1 = require("../../util/schemaName");
const EntityBase_1 = require("./EntityBase");
const _1 = require("../$");
class ApparelSize extends EntityBase_1.EntityBase {
    get selector() {
        return ['#itemSizeId-', this.index.toFixed(0)].join('');
    }
    static update(item) {
        return item;
    }
    static init() {
        return {
            index: 999,
            key: '',
            text: ''
        };
    }
}
exports.ApparelSize = ApparelSize;
ApparelSize.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.apparelSize()),
    embedded: true,
    properties: {
        index: _1.$.int(),
        key: _1.$.string(),
        text: _1.$.string()
    }
};
ApparelSize.liComponent = (value) => () => (value == null ? '' : value.text);
//# sourceMappingURL=apparelSize.js.map