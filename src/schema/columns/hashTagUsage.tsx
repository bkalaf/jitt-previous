import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { IHashTagUsage } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IHashTagUsage>();
const helper = col(h);

export const hashTagUsageColumns = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [helper.date(...dependencies)('from', 'From', { dateType: 'past' }, true), helper.int(...dependencies)('count', 'Count', { min: 0, required: true })] as MRT_ColumnDef<T>[];


