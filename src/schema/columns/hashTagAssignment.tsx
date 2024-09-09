import { MRT_ColumnDef,MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { IHashTagAssignment } from '../../types';
import { col } from '../defs/col';

export const h = createMRTColumnHelper<IHashTagAssignment>();
export const helper = col(h);

export const hashTagAssignmentColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.lookup(...dependencies)('classification', 'Classification', { objectType: 'classification' }),
        helper.listOfPrimitive(...dependencies)('flags', 'Flags', 'string'),
        helper.listOfPrimitive(...dependencies)('traits', 'Traits', 'string'),
        helper.listOfObject(...dependencies)('brands', 'Brands', 'brand'),
        helper.listOfObject(...dependencies)('hashTags', 'Hash Tags', 'hashTag')
    ] as MRT_ColumnDef<T>[];