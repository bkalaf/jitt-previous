import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { IMonthYear } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IMonthYear>();
const helper = col(h);

export const monthYearColumns = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => [
    helper.int(...dependencies)('month', 'Month', { min: 1, max: 12, required: true }),
    helper.string(...dependencies)('year', 'Year', undefined, { pattern: /^[0-9]{4}$/ })
] as MRT_ColumnDef<T>[];
