"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercariCategory = void 0;
const schemaName_1 = require("../../util/schemaName");
const _1 = require("../$");
const runTransaction_1 = require("../../util/runTransaction");
const EntityBase_1 = require("./EntityBase");
class MercariCategory extends EntityBase_1.EntityBase {
    static update(item) {
        const func = () => {
            if (item.selector.startsWith('#')) {
                return;
            }
            item.selector = ['#', item.selector].join('');
        };
        (0, runTransaction_1.runTransaction)(MercariCategory.localRealm, func);
        return item;
    }
    static init() {
        return {
            name: '',
            selector: '#',
            hashTags: []
        };
    }
}
exports.MercariCategory = MercariCategory;
MercariCategory.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.mercariCategory()),
    embedded: true,
    properties: {
        name: _1.$.string(),
        selector: _1.$.string(),
        hashTags: _1.$.hashTag.list
    }
};
MercariCategory.labelProperty = 'name';
//# sourceMappingURL=mercariCategory.js.map