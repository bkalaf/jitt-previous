import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { ITrack } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<ITrack>();
const helper = col(h);

export const trackColumns: MRT_ColumnDef<ITrack>[] = [
    helper.listOfPrimitive('feat', 'Featuring', 'string'),
    helper.int('index', 'Index', { min: 0, required: true }),
    helper.string('name', 'Name', undefined, { required: true }),
    helper.measure('runtimeSecs', 'Runtime (sec)', 'sec', { min: 0 })
] as MRT_ColumnDef<ITrack>[];
