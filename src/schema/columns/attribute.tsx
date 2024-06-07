import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { col } from '../defs/col';
import { IAttribute } from '../../types';

export const h = createMRTColumnHelper<IAttribute>();
export const helper = col(h);

export const attributeColumns: MRT_ColumnDef<IAttribute>[] = [
    helper.freeSolo('path', 'Path', (x?: string, y?: string) => (x != null && y != null) ? x.localeCompare(y) as Compared : 0, { required: true }),
    helper.bool('unset', 'Unset'),
    helper.string('value', 'Value', undefined, { maxLength: 150 })
] as MRT_ColumnDef<IAttribute>[];

