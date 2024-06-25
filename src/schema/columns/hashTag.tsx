import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { IHashTag } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IHashTag>();
const helper = col(h);

export const hashTagColumns: MRT_ColumnDef<IHashTag>[] = [
    helper.PK(),
    helper.string()('name', 'Name', undefined, { maxLength: 150, pattern: /^[a-z0-9]{3,150}$/, minLength: 3 }),
    helper.listOfEmbed()('usage', 'Usage', 'hashTagUsage'),
    helper.date()('mostRecent', 'Most Recent', {}, false, true),
    helper.int()('maxCount', 'Max Count', { readonly: true })
] as MRT_ColumnDef<IHashTag>[];
