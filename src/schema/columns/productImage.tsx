import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { IProductImage } from '../../types';
import { col } from '../defs/col';
import { groupCol } from '../defs/groupCol';
import { facing } from './facing';
import { $depend } from './$depend';

const h = createMRTColumnHelper<IProductImage>();
const helper = col(h);

export const productImage: MRT_ColumnDef<IProductImage>[] = [
    helper.PK(),
    helper.string()('filename', 'File Name', undefined, { type: 'text', required: true }),
    helper.string($depend.notNilOrEmpty('filename', true))('extension', 'Extension', undefined, { required: true }),
    helper.string($depend.notNilOrEmpty('filename', true))('mimeType', 'MIME Type', undefined, {}),
    helper.lookup()('sku', 'SKU', { objectType: 'sku' }),
    helper.date()('takenOn', 'Taken On', { dateType: 'past' }),
    helper.string()('caption', 'Caption', undefined, {}),
    helper.enum()('selected', 'Selected', { enumKey: 'productImageType' }),
    // helper.string()('selected', 'Selected', undefined, {}),
    groupCol(h, 'Facing', facing, 'facing', 'bg-red-500', 'text-white')(),
    helper.flags()('flags', 'Flags', ['do-not-rembg', 'ignore']),
    helper.radio()('disposition', 'Disposition', { enumKey: 'productImageDisposition' })
] as MRT_ColumnDef<IProductImage>[];
