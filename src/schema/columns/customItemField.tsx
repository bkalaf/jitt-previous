import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { ICustomItemField } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<ICustomItemField>();
const helper = col(h);

export const customItemFieldColumns: MRT_ColumnDef<ICustomItemField>[] = [
    helper.PK(),
    helper.string()('id', 'ID', undefined, { required: true, maxLength: 100 }),
    helper.string()('linkedType', 'Linked Type', undefined, { required: true, maxLength: 50 })
    // helper.string('value', 'Value', undefined, { required: true, maxLength: 150 })
] as MRT_ColumnDef<ICustomItemField>[];
