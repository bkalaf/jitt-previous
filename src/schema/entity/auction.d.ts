import Realm, { BSON } from 'realm';
import { AuctionSite, IAuction, IFacility } from '../../types';
import { EntityBase } from './EntityBase';
export declare class Auction extends EntityBase<IAuction> implements IAuction {
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
    static schema: Realm.ObjectSchema;
    static labelProperty: string;
    get totalPrice(): number;
    static update(item: IAuction): IAuction | undefined;
    static init(): InitValue<IAuction>;
}
