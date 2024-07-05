import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { IApparelSize } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IApparelSize>();
const helper = col(h);

export const apparelSizeColumns = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => [
    helper.int(...dependencies)('index', 'Index', { min: 0, required: true }),
    helper.string(...dependencies)('key', 'Key', undefined, {}),
    helper.string(...dependencies)('text', 'Text', undefined, { required: true })
] as MRT_ColumnDef<T>[];
