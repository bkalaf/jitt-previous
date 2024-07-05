import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { IProduct } from '../../../types';
import { col } from '../../defs/col';
import { groupCol } from '../../defs/groupCol';
import { doubleMeasureColumns } from './measureColumns';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

export const jewelryDetails: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        groupCol(h, 'Mass In Air', doubleMeasureColumns(h, 'weightUnitOfMeasure'), 'massInAir', 'bg-amber-500', 'text-black')(...dependencies),
        groupCol(h, 'Mass In Air', doubleMeasureColumns(h, 'weightUnitOfMeasure'), 'massWaterDisplaced', 'bg-cyan-500', 'text-black')(...dependencies),
        helper.double(...dependencies)('density.value' as any, 'Density', { readonly: true }),
        helper.enum(...dependencies)('metal', 'Metal', { enumKey: 'metalTypes' })
    ] as MRT_ColumnDef<T>[];
