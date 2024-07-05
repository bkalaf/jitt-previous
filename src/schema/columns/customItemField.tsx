import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { ICustomItemField } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<ICustomItemField>();
const helper = col(h);

export const customItemFieldColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.PK(),
        helper.string(...dependencies)('id', 'ID', undefined, { required: true, maxLength: 100 }),
        helper.string(...dependencies)('linkedType', 'Linked Type', undefined, { required: true, maxLength: 50 })
        // helper.string('value', 'Value', undefined, { required: true, maxLength: 150 })
    ] as MRT_ColumnDef<T>[];
