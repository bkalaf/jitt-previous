import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { ISku } from '../../types';
import { groupCol } from '../defs/groupCol';
import { shippingColumns } from './shipping';
import { col } from '../defs/col';
import { $depend } from './$depend';

const h = createMRTColumnHelper<ISku>();
const helper = col(h);

export const sku: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.PK(),
        helper.bool(...dependencies)('hasDraft', 'Has Draft'),
        helper.lookup(...dependencies)('product', 'Product', { objectType: 'product' }),
        helper.lookup(...dependencies)('auction', 'Auction', { objectType: 'auction' }),
        helper.enum(...dependencies)('condition', 'Condition', { enumKey: 'itemConditions' }),
        helper.listOfPrimitive($depend.in<ISku, 'condition'>('condition', true)('fair', 'poor', 'good', 'parts'), ...dependencies as IDependency<any, any>[])('defects', 'Defects', 'string'),
        helper.enum(...dependencies)('disposition', 'Disposition', { enumKey: 'itemDispositions' }),
        helper.int(...dependencies)('quantity', 'Quantity', { min: 1, required: true }),
        helper.percent(...dependencies)('packingPercent', 'Packing Percent', { min: 1.0, required: true }),
        helper.listOfObject(...dependencies)('skus', 'SKUS', 'barcode'),
        groupCol(h, 'Shipping', shippingColumns, 'shipping', 'bg-violet-500', 'text-black')($depend.notZeroOrNull('packingPercent', true), ...dependencies as IDependency<any, any>[]),
        helper.listOfObject(...dependencies)('hashTags', 'Hash Tags', 'hashTag'),
        helper.listOfObject(...dependencies)('allHashTags', 'ALL Hash Tags', 'hashTag', true),
    ] as MRT_ColumnDef<T>[];
