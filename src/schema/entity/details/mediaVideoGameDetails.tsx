import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { helper } from './mediaDetails';


export const mediaVideoGameDetails: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => [
    helper.string(...dependencies)('mediaTitle', 'Media Title', undefined, {}),
    helper.string(...dependencies)('mediaSubtitle', 'Media Title', undefined, {}),
    helper.enum(...dependencies)('ESRBRating', 'ESRB Rating', { enumKey: 'ESRBRatings' }),
    helper.year(...dependencies)('copyright', 'Copyright'),
    helper.enum(...dependencies)('consoleType', 'Console Type', { enumKey: 'consoleTypes' }),
    helper.string(...dependencies)('studio', 'Studio', undefined, { maxLength: 150 })
] as MRT_ColumnDef<T>[];
