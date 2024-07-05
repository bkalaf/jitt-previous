import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { IBrand } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IBrand>();
const helper = col(h);

export const brandColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.PK(),
        helper.string(...dependencies)('name', 'Name', undefined, { maxLength: 150 }),
        helper.string(...dependencies)('folder', 'Folder', undefined, { maxLength: 50, readonly: true }),
        helper.lookup(...dependencies)('mercariBrand', 'Mercari Brand', { objectType: 'mercariBrand' }),
        helper.listOfObject(...dependencies)('hashTags', 'Hash Tags', 'hashTag'),
        helper.listOfObject(...dependencies)('allHashTags', 'ALL Hash Tags', 'hashTag', true)
    ] as MRT_ColumnDef<T>[];
