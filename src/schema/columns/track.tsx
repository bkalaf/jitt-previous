import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { ITrack } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<ITrack>();
const helper = col(h);

export const trackColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.listOfPrimitive(...dependencies)('feat', 'Featuring', 'string'),
        helper.int(...dependencies)('index', 'Index', { min: 0, required: true }),
        helper.string(...dependencies)('name', 'Name', undefined, { required: true }),
        helper.int(...dependencies)('duration.value' as any, 'Duration Value', { min: 0 }),
        helper.enum(...dependencies)('duration.uom' as any, 'Duration UOM', { enumKey: 'musicDurationUnitOfMeasure' })
    ] as MRT_ColumnDef<T>[];
