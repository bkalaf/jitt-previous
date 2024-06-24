import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { IProduct } from '../../../types';
import { col } from '../../defs/col';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

export const toysDetails: MRT_ColumnDef<IProduct>[] = [
    helper.int('pieceCount', 'Pieces', { min: 0 }),
    helper.int('ages.min' as any, 'Age Range (min)', { min: 0 }),
    helper.int('ages.max' as any, 'Age Range (max)', { min: 0 }),
    helper.int('players.min' as any, 'Players (min)', { min: 0 }),
    helper.int('players.max' as any, 'Players (max)', { min: 0 })
] as MRT_ColumnDef<IProduct>[];