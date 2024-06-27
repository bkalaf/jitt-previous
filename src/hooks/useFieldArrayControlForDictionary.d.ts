/// <reference types="react" />
import { MRT_Column, MRT_RowData } from 'material-react-table';
import { ColumnMeta } from '@tanstack/react-table';
export declare function useFieldArrayControlForDictionary<T extends MRT_RowData, TValue, TKeys extends keyof ColumnMeta<T, TValue>>(column: MRT_Column<T, TValue>, ...keys: TKeys[]): {
    KeyControl: import("react").FunctionComponent<{
        cell: import("material-react-table").MRT_Cell<T, any>;
        column: MRT_Column<T, any>;
        row: import("material-react-table").MRT_Row<T>;
        table: import("material-react-table").MRT_TableInstance<T>;
    }>;
    keyType: string | undefined;
    enumType: string | undefined;
    cols: import("material-react-table").MRT_ColumnDef<MRT_RowData>[];
    value: DictionaryBack<TValue>;
    append: ({ key, value }: {
        key: string;
        value: TValue;
    }) => void;
    remove: (key: string) => void;
    name: string;
    label: string;
    helperText: string | undefined;
    control: import("react-hook-form-mui").Control<import("react-hook-form-mui").FieldValues, any>;
    objectType: string;
    LiComponent: ListItemCellComponent<unknown>;
    required: boolean | undefined;
    readonly: boolean | undefined;
    isDisabled: () => boolean;
} & Omit<{ [P in "required" | "objectType" | "keyType" | "dependencies" | "columnName" | "readonly" | TKeys]: ColumnMeta<T, TValue>[P]; }, "required" | "objectType" | "keyType" | "dependencies" | "columnName" | "readonly">;
