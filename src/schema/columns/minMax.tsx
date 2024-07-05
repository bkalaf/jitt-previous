import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { IMinMax, Int } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IMinMax<Int>>();
const helper = col(h);

export const minMaxColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [helper.int(...dependencies)('min', 'Min', { min: 0 }), helper.int(...dependencies)('max', 'Max', { min: 0 })] as MRT_ColumnDef<T>[];
