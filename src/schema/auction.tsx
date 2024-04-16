import * as Realm from 'realm';
import { $ } from './$';
import { schemaName } from '../util/schemaName';
import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { AuctionSite, IAuction, IFacility } from '../types';
import { col } from './defs/col';
import { auctionSites } from './enums/auctionSite';
import { ObjectId } from 'bson';
import dayjs from 'dayjs';
import { runTransaction } from '../util/runTransaction';
import { squareFootageColumns } from './squareFootage';
import { groupCol } from './defs/groupCol';

export const auction: Realm.ObjectSchema = {
    name: schemaName($.auction()),
    primaryKey: '_id',
    properties: {
        _id: $.objectId(),
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

const helper = createMRTColumnHelper<IAuction>();
const $helper = col(helper);

export const auctionColumns = [
    $helper.pk(),
    $helper.lookup('facility', 'Facility', { objectType: 'facility', labelProperty: 'name' }),
    $helper.enum('auctionSite', 'Auction Site', { options: auctionSites }),
    $helper.string('auctionId', 'Auction ID', undefined, { required: false }),
    $helper.string('invoiceId', 'Invoice ID', undefined, { required: false }),
    $helper.date('closeDate', 'Close Date', undefined, { required: true }),
    $helper.dollar('finalBid', 'Final Bid', { min: 0, required: true }),
    $helper.percent('premiumPercent', 'Premium %', { min: 0 }),
    $helper.percent('salesTaxPercent', 'Sales Tax %', { min: 0 }),
    $helper.bool('taxExempt', 'Tax Exempt'),
    $helper.dollar('totalPrice', 'Total Price', { min: 0, readonly: true }),
    $helper.string('unit', 'Unit #', undefined, { maxLength: 25 }),
    groupCol(helper, 'Sq Footage', squareFootageColumns, 'size', 'bg-blue-700', 'text-white')
] as MRT_ColumnDef<IAuction>[];

export class Auction extends Realm.Object<IAuction> implements IAuction {
    _id: ObjectId;
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

    static schema = auction;

    get totalPrice() {
        const { finalBid, premiumPercent, salesTaxPercent, taxExempt } = { salesTaxPercent: 0, premiumPercent: 0, finalBid: 0, ...this };
        return finalBid + premiumPercent * finalBid + (!taxExempt ? salesTaxPercent * finalBid : 0);
    }
    static update(realm: Realm, item: IAuction): IAuction | undefined {
        const func = () => {
            item.name = [dayjs(item.closeDate).format('YYYY-MM-DD'), item.facility?.name].join(' - ');
            return item;
        };
        return runTransaction(realm, func);
    }
}
