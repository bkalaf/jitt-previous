import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { IProduct } from '../../../types';
import { col } from '../../defs/col';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

export const generalDetails: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [helper.date(...dependencies)('testedOn', 'Tested On', { dateType: 'past' }), helper.string(...dependencies)('itemType', 'Item Type', undefined, {})] as MRT_ColumnDef<T>[];
