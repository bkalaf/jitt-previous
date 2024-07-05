import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { IMercariCategory } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IMercariCategory>();
const helper = col(h);

export const mercariCategoryColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.string(...dependencies)('name', 'Name', undefined, { maxLength: 150 }),
        helper.string(...dependencies)('selector', 'Selector', undefined, { maxLength: 50 }),
        helper.listOfObject(...dependencies)('hashTags', 'Hash Tags', 'hashTag')
    ] as MRT_ColumnDef<T>[];
