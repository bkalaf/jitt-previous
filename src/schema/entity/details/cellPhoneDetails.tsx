import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { IProduct } from '../../../types';
import { col } from '../../defs/col';
import { groupCol } from '../../defs/groupCol';
import { operatingSystemInfoColumns } from '../../columns/operatingSystemInfoColumns';
import { doubleMeasureColumns } from './measureColumns';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

export const electronicsVisualDetails: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        groupCol(h, 'Screen Size', doubleMeasureColumns(h, 'lengthUnitOfMeasure'), 'screenSize', 'bg-red-500', 'text-white')(...dependencies),
        helper.enum(...dependencies)('aspectRatio', 'Aspect Ratio', { enumKey: 'aspectRatios' })
    ] as MRT_ColumnDef<T>[];
export const electronicsVisualCellPhonesDetails: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>[
    groupCol(h, 'Operating System', operatingSystemInfoColumns, 'operatingSystem', 'bg-orange-500', 'text-black')(...dependencies),
    helper.enum(...dependencies)('cellCarrier', 'Carrier', { enumKey: 'cellCarriers' }),

] as MRT_ColumnDef<T>[];
