import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { ISquareFootage } from '../../types';
import { col } from '../defs/col';

export const h = createMRTColumnHelper<ISquareFootage>();
const helper = col(h);

export const squareFootageColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.int(...dependencies)('length.value' as any, 'Length Value', { min: 0 }),
        helper.enum(...dependencies)('length.uom' as any, 'Length UOM', { enumKey: 'distanceUnitOfMeasure' }),
        helper.int(...dependencies)('width.value' as any, 'Width Value', { min: 0 }),
        helper.enum(...dependencies)('width.uom' as any, 'Width UOM', { enumKey: 'distanceUnitOfMeasure' })
    ] as MRT_ColumnDef<T>[];
