"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Facility = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const realm_1 = require("realm");
const runTransaction_1 = require("../../util/runTransaction");
const getCityState_1 = require("../../util/getCityState");
const getStreetOnly_1 = require("../../util/getStreetOnly");
const getInitFor_1 = require("./getInitFor");
const EntityBase_1 = require("./EntityBase");
class Facility extends EntityBase_1.EntityBase {
    static update(item) {
        const func = () => {
            var _a;
            item.name = [(_a = item.selfStorage) === null || _a === void 0 ? void 0 : _a.name, (0, getCityState_1.getCityState)(item.address), (0, getStreetOnly_1.getStreetOnly)(item.address)].filter((x) => x != null).join(' - ');
            return item;
        };
        return (0, runTransaction_1.runTransaction)(Facility.localRealm, func);
    }
    static init() {
        const selfStorage = (0, getInitFor_1.getInitFor)(Facility, 'selfStorage');
        const address = (0, getInitFor_1.getInitFor)(Facility, 'address');
        return {
            _id: new realm_1.BSON.ObjectId(),
            name: '',
            selfStorage: selfStorage(),
            address: address()
        };
    }
}
exports.Facility = Facility;
Facility.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.facility()),
    primaryKey: '_id',
    properties: {
        _id: _1.$.objectId(),
        name: _1.$.string(),
        facilityNumber: _1.$.string.opt,
        phoneNumber: _1.$.string.opt,
        emailAddress: _1.$.string.opt,
        selfStorage: _1.$.selfStorage(),
        address: _1.$.address()
    }
};
//# sourceMappingURL=facility.js.map