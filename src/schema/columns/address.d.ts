import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { IAddress } from '../../types';
export declare const addressColumns: <T extends MRT_RowData>(...dependencies: IDependency<IAddress, any>[]) => MRT_ColumnDef<T>[];
