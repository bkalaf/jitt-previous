import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { helper } from './mediaDetails';


export const mediaMusicDetails: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => [
    helper.enum(...dependencies)('musicFormat', 'Format', { enumKey: 'musicFormatTypes' })
] as MRT_ColumnDef<T>[];
