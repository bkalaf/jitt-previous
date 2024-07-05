import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { col } from '../defs/col';
import { IPartNumber } from '../../types';

const h = createMRTColumnHelper<IPartNumber>();
const helper = col(h);

export const partNumberColumns: <T extends MRT_RowData>(...dependencies: IDependency<any, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<any, any>[]) => [
    helper.lookup(...dependencies)('brand', 'Brand', { objectType: 'brand' }),
    helper.string(...dependencies)('partNumber', 'Part Number', undefined, { required: true })
] as MRT_ColumnDef<T>[];
