import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { helper } from './homeGoodsDetails';

export const homeGoodsDinnerwareDetails: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => [helper.dictionary(...dependencies)('dinnerwareInventory', 'Dinnerware List', 'piece', { enumKey: 'dinnerwareTypes' })] as MRT_ColumnDef<T>[];
