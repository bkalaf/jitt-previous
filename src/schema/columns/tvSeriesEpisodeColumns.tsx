import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { ITVSeriesEpisode } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<ITVSeriesEpisode>();
const helper = col(h);
export const tvSeriesEpisodeColumns = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => [
    helper.string(...dependencies)('name', 'Name', undefined, {}),
    helper.int(...dependencies)('season', 'Season', { min: 0 }),
    helper.int(...dependencies)('index', 'Index', { min: 0 }),
    helper.string(...dependencies)('id', 'ID', undefined, {}),
    helper.date(...dependencies)('originalAirDate', 'Original Air Date', { dateType: 'past' })
] as MRT_ColumnDef<T>[];
