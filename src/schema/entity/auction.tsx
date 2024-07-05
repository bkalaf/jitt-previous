import Realm, { BSON } from 'realm';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { AuctionSite, IAuction, IFacility } from '../../types';
import dayjs from 'dayjs';
import { runTransaction } from '../../util/runTransaction';
import { EntityBase } from './EntityBase';

export class Auction extends EntityBase<IAuction> implements IAuction {
    _id: BSON.ObjectId;
    name: string;
    facility?: IFacility | undefined;
    closeDate: Date;
    auctionId?: string | undefined;
    auctionSite: AuctionSite;
    invoiceId?: string | undefined;
    finalBid?: number | undefined;
    premiumPercent?: number | undefined;
    salesTaxPercent?: number | undefined;
    taxExempt: boolean;

    static schema: Realm.ObjectSchema = {
        name: schemaName($.auction()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            name: $.string.opt,
            facility: $.facility(),
            closeDate: $.date(),
            auctionId: $.string.opt,
            auctionSite: $.string.opt,
            invoiceId: $.string.opt,
            finalBid: $.double.opt,
            premiumPercent: $.double.opt,
            salesTaxPercent: $.double.opt,
            taxExempt: { type: 'bool', optional: false, default: false },
            unit: $.string.opt,
            size: $.squareFootage()
        }
    };
    static labelProperty = 'name';
    get totalPrice() {
        const { finalBid, premiumPercent, salesTaxPercent, taxExempt } = { salesTaxPercent: 0, premiumPercent: 0, finalBid: 0, ...this };
        return finalBid + premiumPercent * finalBid + (!taxExempt ? salesTaxPercent * finalBid : 0);
    }
    static update(item: IAuction): IAuction | undefined {
        const func = () => {
            item.name = [dayjs(item.closeDate).format('YYYY-MM-DD'), item.facility?.name].join(' - ');
            return item;
        };
        return runTransaction(Auction.localRealm, func);
    }
    static init(): InitValue<IAuction> {
        return {
            _id: new BSON.ObjectId(),
            name: '',
            auctionSite: 'storageTreasures',
            closeDate: new Date(Date.now()),
            taxExempt: false
        };
    }
}
