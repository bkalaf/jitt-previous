import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { BSON } from 'bson';
export declare function colDBListObject<T extends MRT_RowData, U extends MRT_RowData & {
    _id: BSON.ObjectId;
}>(helper: MRT_ColumnHelper<T>): <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) => (name: keyof T & string, header: string, objectType: string, readonly?: boolean) => MRT_ColumnDef<T, ListBack<U>>;
