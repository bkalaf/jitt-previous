import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { ISelfStorage } from '../../types';
import { col } from '../defs/col';

const helper = createMRTColumnHelper<ISelfStorage>();
const h = col(helper);

export const selfStorageColumns:<T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [h.PK(), h.string(...dependencies)('name', 'Name', undefined, { maxLength: 100, required: true }), h.string(...dependencies)('website', 'URL', undefined, { maxLength: 225, minLength: 5, type: 'url' })] as MRT_ColumnDef<T>[];
