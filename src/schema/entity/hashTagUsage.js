"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashTagUsage = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const EntityBase_1 = require("./EntityBase");
class HashTagUsage extends EntityBase_1.EntityBase {
    static update(item) {
        return item;
    }
    static init() {
        return {
            from: new Date(Date.now()),
            count: 0
        };
    }
}
exports.HashTagUsage = HashTagUsage;
HashTagUsage.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.hashTagUsage()),
    embedded: true,
    properties: {
        from: _1.$.date(),
        count: _1.$.int.default(0)
    }
};
HashTagUsage.liComponent = (item) => () => (item == null ? '' : `${item === null || item === void 0 ? void 0 : item.count.toFixed(0)}`);
//# sourceMappingURL=hashTagUsage.js.map