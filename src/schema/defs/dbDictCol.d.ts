import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
export type DBDictFacetedColOptions = {
    readonly?: boolean;
    faceted: true;
};
export type DBDictEnumColOptions = {
    readonly?: boolean;
    enumKey: string;
};
export type DBDictStringColOptions = {
    readonly?: boolean;
    maxLength?: number;
    minLength?: number;
};
export type DBDictColOptions = DBDictEnumColOptions | DBDictFacetedColOptions | DBDictStringColOptions;
export declare function dbDictCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>): <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) => (name: keyof T & string, header: string, objectType: string, opts?: DBDictColOptions) => MRT_ColumnDef<T>;
