import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { ITVSeries } from '../../types';
import { col } from '../defs/col';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
const h = createMRTColumnHelper<ITVSeries>();
const helper = col(h);

export const tvSeriesColumns = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.PK(),
        helper.string(...dependencies)('title', 'Title', undefined, { required: true }),
        helper.string(...dependencies)('subtitle', 'SubTitle', undefined, {}),
        helper.listOfEmbed(...dependencies)('contributors', 'Contributors', 'contributor'),
        helper.listOfEmbed(...dependencies)('awards', 'Awards', 'award'),
        helper.enum(...dependencies)('genre', 'Genre', { enumKey: 'movieGenres' }),
        helper.enum(...dependencies)('rating', 'Rating', { enumKey: 'tvRatings' }),
        helper.enum(...dependencies)('network', 'Network', { enumKey: 'networks' }),
        helper.listOfEmbed(...dependencies)('episodes', 'Episodes', schemaName($.episode()))
    ] as MRT_ColumnDef<T>[];
