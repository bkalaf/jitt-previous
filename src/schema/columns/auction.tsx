import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { IAuction } from '../../types';
import { col } from '../defs/col';
import { auctionSites } from '../enums/auctionSite';
import { squareFootageColumns } from '../entity/squareFootage';
import { groupCol } from '../defs/groupCol';

const helper = createMRTColumnHelper<IAuction>();
const $helper = col(helper);

export const auctionColumns = [
    $helper.pk(),
    $helper.lookup('facility', 'Facility', { objectType: 'facility' }),
    $helper.enum('auctionSite', 'Auction Site', { options: auctionSites }),
    $helper.string('auctionId', 'Auction ID', undefined, { required: false }),
    $helper.string('invoiceId', 'Invoice ID', undefined, { required: false }),
    $helper.date('closeDate', 'Close Date', {}, true),
    $helper.dollar('finalBid', 'Final Bid', { min: 0, required: true }),
    $helper.percent('premiumPercent', 'Premium %', { min: 0 }),
    $helper.percent('salesTaxPercent', 'Sales Tax %', { min: 0 }),
    $helper.bool('taxExempt', 'Tax Exempt'),
    $helper.dollar('totalPrice', 'Total Price', { min: 0, readonly: true }),
    $helper.string('unit', 'Unit #', undefined, { maxLength: 25 }),
    groupCol(helper, 'Sq Footage', squareFootageColumns, 'size', 'bg-blue-700', 'text-white')
] as MRT_ColumnDef<IAuction>[];
