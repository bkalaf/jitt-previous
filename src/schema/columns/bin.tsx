import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { IBin } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IBin>();
const helper = col(h);

export const binColumns: MRT_ColumnDef<IBin>[] = [
    helper.PK(),
    helper.lookup()('barcode', 'Barcode', { objectType: 'bin' }),
    helper.string()('name', 'Name', undefined, { maxLength: 50, required: true }),
    helper.string()('notes', 'Notes', undefined, { maxLength: 250, required: false })
];
