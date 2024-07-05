import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { helper } from './homeGoodsDetails';


export const homeGoodsFlatwareDetails: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => [helper.dictionary(...dependencies)('flatwareInventory', 'Flatware List', 'int', { enumKey: 'flatwareTypes' })] as MRT_ColumnDef<T>[];
