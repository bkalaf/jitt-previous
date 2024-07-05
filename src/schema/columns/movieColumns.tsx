import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { IMovie } from '../../types';
import { col } from '../defs/col';
import { groupCol } from '../defs/groupCol';
import { intMeasureColumns } from '../entity/details/measureColumns';
const h = createMRTColumnHelper<IMovie>();
const helper = col(h);
export const movieColumns = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.PK(),
        helper.string(...dependencies)('title', 'Title', undefined, { required: true }),
        helper.string(...dependencies)('subtitle', 'SubTitle', undefined, {}),
        helper.year(...dependencies)('copyright', 'Copyright'),
        helper.listOfEmbed(...dependencies)('contributors', 'Contributors', 'contributor'),
        helper.listOfEmbed(...dependencies)('awards', 'Awards', 'award'),
        helper.enum(...dependencies)('genre', 'Genre', { enumKey: 'movieGenres' }),
        helper.enum(...dependencies)('rating', 'Rating', { enumKey: 'movieRatings' }),
        groupCol(h, 'Runtime', intMeasureColumns(h, 'movieRuntimeUnitOfMeasure'), 'runtime', 'bg-purple-500', 'text-white')
    ] as MRT_ColumnDef<T>[];
