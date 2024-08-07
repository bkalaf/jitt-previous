import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { IProduct } from '../../../types';
import { col } from '../../defs/col';
import { groupCol } from '../../defs/groupCol';
import { doubleMeasureColumns } from './measureColumns';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

export const cablesDetails: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [helper.enum(...dependencies)('cableType', 'Cable Type', { enumKey: 'cableTypes' }), groupCol(h, 'Cord Length', doubleMeasureColumns(h, 'lengthUnitOfMeasure'), 'cordLength', 'bg-orange-500', 'text-white')(...dependencies)] as MRT_ColumnDef<T>[];

