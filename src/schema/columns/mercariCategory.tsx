import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { IMercariCategory } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IMercariCategory>();
const helper = col(h);

export const mercariCategoryColumns: MRT_ColumnDef<IMercariCategory>[] = [
    helper.string()('name', 'Name', undefined, { maxLength: 150 }),
    helper.string()('selector', 'Selector', undefined, { maxLength: 50 }),
    helper.listOfObject()('hashTags', 'Hash Tags', 'hashTag')
] as MRT_ColumnDef<IMercariCategory>[];
