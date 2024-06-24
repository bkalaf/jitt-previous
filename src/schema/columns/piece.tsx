import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { IPiece } from '../../types';
import { col } from '../defs/col';

export const h = createMRTColumnHelper<IPiece>()
export const helper = col(h);

export const pieceColumns: MRT_ColumnDef<IPiece>[] = [
    helper.int('count', 'Count', { min: 1, required: true }),
    helper.enum('shape', 'Shape', { enumKey: 'shapeTypes' })
] as MRT_ColumnDef<IPiece>[];