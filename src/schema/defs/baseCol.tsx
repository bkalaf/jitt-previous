import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { camelToProper } from '../../common/text';
import { NullCell } from './NullCell';


export type PrimType = {
    type: RealmPrimitives;
}
export type ObjType = {
    type: 'object';
    isEmbedded: boolean;
    objectType: string;
}
export type CollType = {
    type: 'list' | 'dictionary' | 'set';
    objectType: PrimType | ObjType;
}
export type DBType = PrimType | ObjType | CollType;

export function baseCol<T extends MRT_RowData, TValue>(helper: MRT_ColumnHelper<T>, name: keyof T & string, Cell: MRT_ColumnDef<T, TValue>['Cell'], Edit: MRT_ColumnDef<T, TValue>['Edit'], $header?: string, required = false, readonly = false, options: {
    max?: number;
    min?: number;
    maxLength?: number;
    minLength?: number;
    pattern?: RegExp;
    validate?: Record<string, (value: TValue, formValues: Record<string, any>) => string | string[] | boolean | Promise<string | string[] | boolean>>;
    type?: React.HTMLInputTypeAttribute
} = {} ) {
    const header = $header ?? camelToProper(name);
    return helper.accessor(name as any, {
        header,
        enableEditing: !readonly,
        Edit: readonly ? NullCell : Edit,
        Cell,
        meta: {
            columnName: name,
            required: required,
            readonly: readonly,
            ...options
        },
        muiTableBodyCellProps: {
            'aria-required': required,
            'aria-readonly': readonly
        }
    }) as MRT_ColumnDef<T, TValue>;
}
