"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auction = void 0;
const realm_1 = require("realm");
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const dayjs_1 = __importDefault(require("dayjs"));
const runTransaction_1 = require("../../util/runTransaction");
const EntityBase_1 = require("./EntityBase");
class Auction extends EntityBase_1.EntityBase {
    get totalPrice() {
        const { finalBid, premiumPercent, salesTaxPercent, taxExempt } = Object.assign({ salesTaxPercent: 0, premiumPercent: 0, finalBid: 0 }, this);
        return finalBid + premiumPercent * finalBid + (!taxExempt ? salesTaxPercent * finalBid : 0);
    }
    static update(item) {
        const func = () => {
            var _a;
            item.name = [(0, dayjs_1.default)(item.closeDate).format('YYYY-MM-DD'), (_a = item.facility) === null || _a === void 0 ? void 0 : _a.name].join(' - ');
            return item;
        };
        return (0, runTransaction_1.runTransaction)(Auction.localRealm, func);
    }
    static init() {
        return {
            _id: new realm_1.BSON.ObjectId(),
            name: '',
            auctionSite: 'storageTreasures',
            closeDate: new Date(Date.now()),
            taxExempt: false
        };
    }
}
exports.Auction = Auction;
Auction.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.auction()),
    primaryKey: '_id',
    properties: {
        _id: _1.$.objectId(),
        facility: _1.$.facility(),
        closeDate: _1.$.date(),
        auctionId: _1.$.string.opt,
        auctionSite: _1.$.string.opt,
        invoiceId: _1.$.string.opt,
        finalBid: _1.$.double.opt,
        premiumPercent: _1.$.double.opt,
        salesTaxPercent: _1.$.double.opt,
        taxExempt: { type: 'bool', optional: false, default: false },
        unit: _1.$.string.opt,
        size: _1.$.squareFootage()
    }
};
Auction.labelProperty = 'name';
//# sourceMappingURL=auction.js.map