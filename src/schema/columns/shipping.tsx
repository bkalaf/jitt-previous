import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { IShipping } from '../../types';
import { col } from '../defs/col';

    const h = createMRTColumnHelper<IShipping>();
    const helper = col(h);

export const shippingColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => [
    helper.int(...dependencies)('id', 'ID', { required: true }),
    helper.int(...dependencies)('version', 'Version', { required: true })
] as MRT_ColumnDef<T>[];
