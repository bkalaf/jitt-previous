import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { mediaVideoFlagsOptions } from '../../enums/flags';
import { helper } from './mediaDetails';


export const mediaVideosDetails: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => [
    helper.listOfPrimitive(...dependencies)('collectionOf', 'Collection Of', 'string'),
    helper.int(...dependencies)('count', 'Count', { min: 1 }),
    helper.enum(...dependencies)('videoFormat', 'Format', { enumKey: 'videoFormatTypes' }),
    helper.flags(...dependencies)('flags', 'Video Flags', mediaVideoFlagsOptions)
] as MRT_ColumnDef<T>[];
