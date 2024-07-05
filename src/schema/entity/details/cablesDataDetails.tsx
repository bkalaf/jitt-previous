import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { helper } from './cablesDetails';

export const cablesDataDetails: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => [helper.listOfEmbed(...dependencies)('connectors', 'Connectors', 'connector')] as MRT_ColumnDef<T>[];
