import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { IAlbum } from '../../types';
import { col } from '../defs/col';
const h = createMRTColumnHelper<IAlbum>();
const helper = col(h);
export const albumColumns = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.PK(),
        helper.string(...dependencies)('title', 'Title', undefined, { required: true }),
        helper.string(...dependencies)('subtitle', 'Subtitle', undefined, {}),
        helper.year(...dependencies)('copyright', 'Copyright'),
        helper.listOfEmbed(...dependencies)('contributors', 'Contributors', 'contributor'),
        helper.listOfEmbed(...dependencies)('awards', 'Awards', 'award'),
        helper.enum(...dependencies)('genre', 'Genre', { enumKey: 'musicGenres' }),
        helper.listOfEmbed(...dependencies)('tracks', 'Tracks', 'track')
    ] as MRT_ColumnDef<T>[];
