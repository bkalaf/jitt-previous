import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { groupCol } from '../../defs/groupCol';
import { doubleMeasureColumns } from './measureColumns';
import { IProduct } from '../../../types';
import { col } from '../../defs/col';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

export const electronicsVisualDetails: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => [
    groupCol(h, 'Screen Size', doubleMeasureColumns(h, 'lengthUnitOfMeasure'), 'screenSize', 'bg-red-500', 'text-white')(...dependencies),
    helper.enum(...dependencies)('aspectRatio', 'Aspect Ratio', { enumKey: 'aspectRatios' })
] as MRT_ColumnDef<T>[];
