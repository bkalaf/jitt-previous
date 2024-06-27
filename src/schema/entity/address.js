"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const is_1 = require("../../common/is");
const getCityState_1 = require("../../util/getCityState");
const EntityBase_1 = require("./EntityBase");
class Address extends EntityBase_1.EntityBase {
    static init() {
        return {
            city: '',
            province: 'CA',
            country: 'US'
        };
    }
    static update(item) {
        return item;
    }
}
exports.Address = Address;
Address.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.address()),
    embedded: true,
    properties: {
        mailing1: _1.$.string.opt,
        mailing2: _1.$.string.opt,
        suite: _1.$.string.opt,
        city: _1.$.string.opt,
        province: _1.$.string.opt,
        country: _1.$.string.opt,
        postalCode: _1.$.string.opt
    }
};
Address.stringify = (value) => () => [value === null || value === void 0 ? void 0 : value.mailing1, value === null || value === void 0 ? void 0 : value.mailing2, [(0, getCityState_1.getCityState)(value), value === null || value === void 0 ? void 0 : value.postalCode].filter(is_1.is.not.nil).join(' ')].filter(is_1.is.not.nil).join('\n');
Address.liComponent = Address.stringify;
//# sourceMappingURL=address.js.map