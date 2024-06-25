import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { ISku } from '../../types';
import { groupCol } from '../defs/groupCol';
import { shippingColumns } from './shipping';
import { col } from '../defs/col';
import { $depend } from './$depend';

const h = createMRTColumnHelper<ISku>();
const helper = col(h);

export const sku = [
    helper.PK(),
    helper.lookup()('product', 'Product', { objectType: 'product' }),
    helper.lookup()('auction', 'Auction', { objectType: 'auction' }),
    helper.enum()('condition', 'Condition', { enumKey: 'itemConditions' }),
    helper.listOfPrimitive($depend.in<ISku, 'condition'>('condition', true)('fair', 'poor', 'good', 'parts'))('defects', 'Defects', 'string'),
    helper.enum()('disposition', 'Disposition', { enumKey: 'itemDispositions' }),
    helper.int()('quantity', 'Quantity', { min: 1, required: true }),
    helper.percent()('packingPercent', 'Packing Percent', { min: 1.0, required: true }),
    helper.listOfObject()('skus', 'SKUS', 'barcode'),
    groupCol(h, 'Shipping', shippingColumns, 'shipping', 'bg-violet-500', 'text-black')($depend.notZeroOrNull('packingPercent', true)),
    helper.listOfObject()('hashTags', 'Hash Tags', 'hashTag'),
    helper.listOfObject()('allHashTags', 'ALL Hash Tags', 'hashTag', true)
] as MRT_ColumnDef<ISku>[];
