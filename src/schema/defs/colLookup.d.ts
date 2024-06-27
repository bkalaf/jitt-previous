import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
export declare function colLookup<T extends MRT_RowData, U extends MRT_RowData>(helper: MRT_ColumnHelper<T>): <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) => (name: keyof T & string, header: string, opts: {
    onChange?: (setValue: (name: string, value: any) => void, oldValue: any, newValue: any) => void;
    objectType: string;
}) => MRT_ColumnDef<T, any>;
