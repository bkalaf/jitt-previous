import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { ITrack } from '../../types';
import { col } from '../defs/col';
import { groupCol } from '../defs/groupCol';

const h = createMRTColumnHelper<ITrack>();
const helper = col(h);

export const trackColumns: MRT_ColumnDef<ITrack>[] = [
    helper.listOfPrimitive()('feat', 'Featuring', 'string'),
    helper.int()('index', 'Index', { min: 0, required: true }),
    helper.string()('name', 'Name', undefined, { required: true }),
    groupCol(h, 'Duration (sec)', durationDimension<ITrack>(), 'duration', 'bg-magenta-500', 'text-white')()
] as MRT_ColumnDef<ITrack>[];
