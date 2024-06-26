import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { IProduct } from '../../../types';
import { col } from '../../defs/col';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

export const homeGoodsDetails: MRT_ColumnDef<IProduct>[] = [helper.string('pattern', 'Pattern', undefined)] as MRT_ColumnDef<IProduct>[];
export const homeGoodsDinnerwareDetails: MRT_ColumnDef<IProduct>[] = [helper.dictionary('dinnerwareInventory', 'Dinnerware List', 'piece', { enumKey: 'dinnerwareTypes' })] as MRT_ColumnDef<IProduct>[];

export const homeGoodsFlatwareDetails: MRT_ColumnDef<IProduct>[] = [helper.dictionary('flatwareInventory', 'Flatware List', 'int', { enumKey: 'flatwareTypes' })] as MRT_ColumnDef<IProduct>[];
