import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { IProduct } from '../../../types';
import { col } from '../../defs/col';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

export const sportingGoodsDetails: MRT_ColumnDef<IProduct>[] = [] as MRT_ColumnDef<IProduct>[];
export const sportingGoodsGolfClubsDetails: MRT_ColumnDef<IProduct>[] = [
    helper.enum('gender', 'Gender', { enumKey: 'genders' }),
    helper.enum('clubType', 'Club Type', { enumKey: 'clubTypes' }),
    helper.enum('handOrientation', 'Orientation', { enumKey: 'handOrientations' }),
    helper.enum('ironType', 'Iron Type', { enumKey: 'ironTypes' }),
    helper.enum('shaftType', 'Shaft Type', { enumKey: 'shaftTypes' }),
    helper.enum('material', 'Material', { enumKey: 'materials' }),
    helper.enum('wedgeType', 'Wedge Type', { enumKey: 'wedgeTypes' }),
    helper.measure('clubLength', 'Club Length', 'in', { min: 0 }),
    helper.string('swingWeight', 'Swing Weight', undefined),
    helper.measure('lie', 'Lie', '°', { min: 0 }),
    helper.measure('loft', 'Loft', '°', { min: 0 })
] as MRT_ColumnDef<IProduct>[];
