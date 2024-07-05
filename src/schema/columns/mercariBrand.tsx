import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { IMercariBrand } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IMercariBrand>();
const helper = col(h);

export const mercariBrandColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [helper.PK(), helper.string(...dependencies)('name', 'Name', undefined, { maxLength: 125 }), helper.listOfObject(...dependencies)('hashTags', 'Hash Tags', 'hashTag')] as MRT_ColumnDef<T>[];
