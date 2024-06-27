import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
export declare function pk<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>): () => MRT_ColumnDef<T>;
