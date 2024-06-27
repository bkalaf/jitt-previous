import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
export declare function colDBList<T extends MRT_RowData, TValue>(helper: MRT_ColumnHelper<T>): <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) => (name: keyof T & string, header: string, objectType: string, readonly?: boolean) => MRT_ColumnDef<T, ListBack<TValue>>;
