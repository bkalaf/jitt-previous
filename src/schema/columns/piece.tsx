import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { IPiece } from '../../types';
import { col } from '../defs/col';

export const h = createMRTColumnHelper<IPiece>();
export const helper = col(h);

export const pieceColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [helper.int(...dependencies)('count', 'Count', { min: 1, required: true }), helper.enum(...dependencies)('shape', 'Shape', { enumKey: 'shapeTypes' })] as MRT_ColumnDef<T>[];
