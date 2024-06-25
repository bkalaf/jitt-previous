import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { IMercariBrand } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IMercariBrand>();
const helper = col(h);

export const mercariBrandColumns: MRT_ColumnDef<IMercariBrand>[] = [helper.PK(), helper.string()('name', 'Name', undefined, { maxLength: 125 }), helper.listOfObject()('hashTags', 'Hash Tags', 'hashTag')] as MRT_ColumnDef<IMercariBrand>[];
