import { MRT_Column, MRT_RowData } from 'material-react-table';
import { ColumnMeta } from '@tanstack/react-table';
export declare function useFieldArrayControl<T extends MRT_RowData, TValue, TKeys extends keyof ColumnMeta<T, TValue>>(column: MRT_Column<T, TValue>, ...keys: TKeys[]): {
    keyType: string | undefined;
    cols: import("material-react-table").MRT_ColumnDef<MRT_RowData>[];
    value: TValue[];
    fields: Record<"id", string>[];
    append: import("react-hook-form-mui").UseFieldArrayAppend<import("react-hook-form-mui").FieldValues, string>;
    remove: import("react-hook-form-mui").UseFieldArrayRemove;
    name: string;
    label: string;
    helperText: string | undefined;
    control: import("react-hook-form-mui").Control<import("react-hook-form-mui").FieldValues, any>;
    objectType: string;
    LiComponent: ListItemCellComponent<unknown>;
    required: boolean | undefined;
    isDisabled: () => boolean;
    readonly: boolean | undefined;
} & Omit<{ [P in "required" | "objectType" | "keyType" | "dependencies" | "columnName" | "readonly" | TKeys]: ColumnMeta<T, TValue>[P]; }, "required" | "objectType" | "keyType" | "dependencies" | "columnName" | "readonly">;
