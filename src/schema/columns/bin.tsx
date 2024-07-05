import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { IBin } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IBin>();
const helper = col(h);

export const binColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => [
    helper.PK(),
    helper.lookup(...dependencies)('barcode', 'Barcode', { objectType: 'bin' }),
    helper.string(...dependencies)('name', 'Name', undefined, { maxLength: 50, required: true }),
    helper.text(...dependencies)('notes', 'Notes', undefined, { maxLength: 250, required: false })
] as MRT_ColumnDef<T>[];
