import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { IHashTag } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IHashTag>();
const helper = col(h);

export const hashTagColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.PK(),
        helper.string(...dependencies)('name', 'Name', undefined, { maxLength: 150, pattern: /^[a-z0-9]{3,150}$/, minLength: 3 }),
        helper.listOfEmbed(...dependencies)('usage', 'Usage', 'hashTagUsage'),
        helper.date(...dependencies)('mostRecent', 'Most Recent', {}, false, true),
        helper.int(...dependencies)('maxCount', 'Max Count', { readonly: true }),
        helper.listOfEmbed(...dependencies)('matches', 'Matches', 'hashTagCondition')
    ] as MRT_ColumnDef<T>[];
