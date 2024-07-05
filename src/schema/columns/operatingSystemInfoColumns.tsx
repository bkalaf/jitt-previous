import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { IOperatingSystemInfo } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IOperatingSystemInfo>();
const helper = col(h);

export const operatingSystemInfoColumns = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => [
    helper.enum(...dependencies)('operatingSystem', 'Operating System', { enumKey: 'operatingSystemNames' }),
    helper.string(...dependencies)('version', 'Version', undefined, {})
] as MRT_ColumnDef<T>[];
