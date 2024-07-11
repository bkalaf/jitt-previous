import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { IScan } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IScan>();
const helper = col(h);

export const scanColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.lookup(...dependencies)('bin', 'Bin', { objectType: 'bin' }),
        helper.date(...dependencies)('scanDate', 'Scan Date', { dateType: 'past' }, true)
    ] as MRT_ColumnDef<T>[];