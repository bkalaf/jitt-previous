import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { IAuction } from '../../types';
import { col } from '../defs/col';
import { auctionSites } from '../enums/auctionSite';
import { squareFootageColumns } from '../columns/squareFootage';
import { groupCol } from '../defs/groupCol';
import { $depend } from './$depend';

const helper = createMRTColumnHelper<IAuction>();
const $helper = col(helper);

export const auctionColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        $helper.PK(),
        $helper.string(...dependencies)('name', 'Name', undefined, { readonly: true }),
        $helper.lookup(...dependencies)('facility', 'Facility', { objectType: 'facility' }),
        $helper.enum(...dependencies)('auctionSite', 'Auction Site', { options: auctionSites }),
        $helper.string($depend.notNilOrEmpty('auctionSite', true), ...dependencies)('auctionId', 'Auction ID', undefined, { required: false }),
        $helper.string(...dependencies)('invoiceId', 'Invoice ID', undefined, { required: false }),
        $helper.date(...dependencies)('closeDate', 'Close Date', {}, true),
        $helper.dollar(...dependencies)('finalBid', 'Final Bid', { min: 0, required: true }),
        $helper.percent(...dependencies)('premiumPercent', 'Premium %', { min: 0 }),
        $helper.percent($depend.isFalse('taxExempt', true), ...dependencies)('salesTaxPercent', 'Sales Tax %', { min: 0 }),
        $helper.bool($depend.isZeroOrNull('salesTaxPercent', true), ...dependencies)('taxExempt', 'Tax Exempt'),
        $helper.dollar($depend.notZeroOrNull('finalBid', true), ...dependencies)('totalPrice', 'Total Price', { min: 0, readonly: true }),
        $helper.string(...dependencies)('unit', 'Unit #', undefined, { maxLength: 25 }),
        groupCol(helper, 'Sq Footage', squareFootageColumns, 'size', 'bg-blue-700', 'text-white')(...dependencies)
    ] as MRT_ColumnDef<T>[];
