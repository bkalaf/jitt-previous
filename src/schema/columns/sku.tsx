import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { ISku } from '../../types';
import { groupCol } from '../defs/groupCol';
import { shippingColumns } from './shipping';
import { col } from '../defs/col';

const h = createMRTColumnHelper<ISku>();
const helper = col(h);

export const sku = [
    helper.pk(),
    helper.lookup('product', 'Product', { objectType: 'product' }),
    helper.lookup('auction', 'Auction', { objectType: 'auction' }),
    helper.enum('condition', 'Condition', { enumKey: 'itemConditions' }),
    helper.listOfPrimitive('defects', 'Defects', 'string'),
    helper.enum('disposition', 'Disposition', { enumKey: 'itemDispositions' }),
    helper.int('quantity', 'Quantity', { min: 1 }),
    helper.percent('packingPercent', 'Packing Percent', { min: 1.0 }),
    helper.listOfObject('skus', 'SKUS', 'barcode'),
    groupCol(h, 'Shipping', shippingColumns, 'shipping', 'bg-violet-500', 'text-black')
] as MRT_ColumnDef<ISku>[];
