import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { IBrand } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IBrand>();
const helper = col(h);

export const brandColumns: MRT_ColumnDef<IBrand>[] = [
    helper.pk(),
    helper.string('name', 'Name', undefined, { maxLength: 150 }),
    helper.lookup('mercariBrand', 'Mercari Brand', { objectType: 'mercariBrand' }),
    helper.listOfObject('hashTags', 'Hash Tags', 'hashTag'),
    helper.listOfObject('allHashTags', 'ALL Hash Tags', 'hashTag', true)
] as MRT_ColumnDef<IBrand>[];
