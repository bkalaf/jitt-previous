import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { IIncludedItem } from '../../types';
import { col } from '../defs/col';

export const h = createMRTColumnHelper<IIncludedItem>();
export const helper = col(h);

export const includedItemColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [helper.int(...dependencies)('qty', 'Quantity', { min: 1, required: true }), helper.string(...dependencies)('name', 'Name', undefined, { maxLength: 50, required: true })] as MRT_ColumnDef<T>[];
