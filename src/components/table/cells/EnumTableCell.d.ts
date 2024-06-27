import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
export declare function EnumTableCell<T extends MRT_RowData>(props: Parameters<Exclude<MRT_ColumnDef<T, string | undefined>['Cell'], undefined>>[0]): string;
export declare function toEnumMap<T>(enumItems: EnumItem<string>[], modifier?: (x: EnumItem) => T): {
    [k: string]: T;
};
