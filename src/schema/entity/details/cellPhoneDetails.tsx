import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { IProduct } from '../../../types';
import { col } from '../../defs/col';
import { groupCol } from '../../defs/groupCol';
import { operatingSystemInfoColumns } from '../../columns/operatingSystemInfoColumns';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

export const electronicsVisualCellPhonesDetails: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>[
    groupCol(h, 'Operating System', operatingSystemInfoColumns, 'operatingSystem', 'bg-orange-500', 'text-black')(...dependencies),
    helper.enum(...dependencies)('cellCarrier', 'Carrier', { enumKey: 'cellCarriers' }),

] as MRT_ColumnDef<T>[];

