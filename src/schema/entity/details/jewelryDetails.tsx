import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { IProduct } from '../../../types';
import { col } from '../../defs/col';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

export const jewelryDetails: MRT_ColumnDef<IProduct>[] = [
    helper.measure('massInAir', 'Mass In Air', 'g', { min: 0 }),
    helper.measure('massWaterDisplaced', 'Volume water displaced', 'mL', { min: 0 }),
    helper.measure('density', 'Density', 'g/mL', { readonly: true }),
    helper.enum('metal', 'Metal', { enumKey: 'metalTypes' })
] as MRT_ColumnDef<IProduct>[];
