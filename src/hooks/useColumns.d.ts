import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
export declare function useDirectColumns<T extends MRT_RowData>(objectType: string): MRT_ColumnDef<T>[];
export declare function useColumns<T extends MRT_RowData>(objectType?: string): MRT_ColumnDef<T>[];
