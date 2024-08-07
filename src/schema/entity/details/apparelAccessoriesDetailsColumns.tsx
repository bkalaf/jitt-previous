import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { groupCol } from '../../defs/groupCol';
import { h } from './apparelDetails';
import { doubleMeasureColumns } from './measureColumns';


export const apparelAccessoriesDetailsColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => [groupCol(h, 'Head Measurement', doubleMeasureColumns(h, 'lengthUnitOfMeasure'), 'headSize', 'bg-yellow-500', 'text-black')(...dependencies)] as MRT_ColumnDef<T>[];
