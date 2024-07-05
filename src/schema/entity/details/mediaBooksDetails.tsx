import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { helper } from './mediaDetails';


export const mediaBooksDetails: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => [
    helper.lookup(...dependencies)('book', 'Book', { objectType: 'book' }),
    helper.enum(...dependencies)('bookType', 'Book Type', { enumKey: 'bookTypes' }),
    helper.int(...dependencies)('edition', 'Edition', { min: 1 }),
    helper.enum(...dependencies)('language', 'Language', { enumKey: 'languages' }),
    helper.int(...dependencies)('pages', 'Pages', { min: 0 })
] as MRT_ColumnDef<T>[];
