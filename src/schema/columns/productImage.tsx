import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { IProductImage } from '../../types';
import { col } from '../defs/col';
import { groupCol } from '../defs/groupCol';
import { facing } from './facing';
import { $depend } from './$depend';

const h = createMRTColumnHelper<IProductImage>();
const helper = col(h);

export const productImage: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.PK(),
        helper.string(...dependencies)('filename', 'File Name', undefined, { type: 'text', required: true }),
        helper.string($depend.notNilOrEmpty('filename', true), ...dependencies)('extension', 'Extension', undefined, { required: true }),
        helper.string($depend.notNilOrEmpty('filename', true), ...dependencies)('mimeType', 'MIME Type', undefined, {}),
        helper.lookup(...dependencies)('sku', 'SKU', { objectType: 'sku' }),
        helper.date(...dependencies)('takenOn', 'Taken On', { dateType: 'past' }),
        helper.string(...dependencies)('caption', 'Caption', undefined, {}),
        helper.enum(...dependencies)('selected', 'Selected', { enumKey: 'productImageType' }),
        // helper.string()('selected', 'Selected', undefined, {}),
        groupCol(h, 'Facing', facing, 'facing', 'bg-red-500', 'text-white')(...dependencies),
        helper.flags(...dependencies)('flags', 'Flags', ['do-not-rembg', 'ignore']),
        helper.radio(...dependencies)('disposition', 'Disposition', { enumKey: 'productImageDisposition' }),
        helper.int(...dependencies)('order', 'Order', { min: 1 })
    ] as MRT_ColumnDef<T>[];
