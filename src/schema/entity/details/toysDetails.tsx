import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { IProduct } from '../../../types';
import { col } from '../../defs/col';
import { groupCol } from '../../defs/groupCol';
import { minMaxColumns } from '../../columns/minMax';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

export const toysDetails: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.int(...dependencies)('pieceCount', 'Pieces', { min: 0 }),
        groupCol(h, 'Age Range', minMaxColumns, 'ages', 'bg-red-500', 'text-white')(...dependencies)
    ] as MRT_ColumnDef<T>[];

