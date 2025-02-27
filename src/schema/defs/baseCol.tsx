import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { ColumnMeta } from '@tanstack/react-table';
import { camelToProper } from '../../common/text/camelToProper';

export type PrimType = {
    type: RealmPrimitives;
};
export type ObjType = {
    type: 'object';
    isEmbedded: boolean;
    objectType: string;
};
export type CollType = {
    type: 'list' | 'dictionary' | 'set';
    objectType: PrimType | ObjType;
};
export type DBType = PrimType | ObjType | CollType;

export function baseCol<T extends MRT_RowData, TValue>(
    helper: MRT_ColumnHelper<T>,
    name: keyof T & string,
    Cell: MRT_ColumnDef<T, TValue>['Cell'],
    Edit: MRT_ColumnDef<T, TValue>['Edit'],
    $header?: string,
    required = false,
    readonly = false,
    {
        id,
        multiple,
        filterFn,
        filterVariant,
        filterSelectOptions,
        ...options
    }: {
        max?: number | Date;
        min?: number | Date;
        maxLength?: number;
        minLength?: number;
        step?: number;
        pattern?: RegExp;
        validate?: Record<string, (value: TValue, formValues: Record<string, any>) => string | string[] | boolean | Promise<string | string[] | boolean>>;
        type?: React.HTMLInputTypeAttribute;
        formatter?: ColumnMeta<T, TValue>['formatter'];
        objectType?: string;
        flattener?: ColumnMeta<T, TValue>['flattener'];
        // options?: ColumnMeta<T, TValue>['options'];
        enumInfo?: ColumnMeta<T, TValue>['enumInfo'];
        multiple?: ColumnMeta<T, TValue>['multiple'];
        comparator?: ColumnMeta<T, TValue>['comparator'];
        flags?: ColumnMeta<T, TValue>['flags'];
        keyType?: ColumnMeta<T, TValue>['keyType'];
        id?: string;
        excludeKeys?: ColumnMeta<T, TValue>['excludeKeys'];
        filterFn?: MRT_ColumnDef<T>['filterFn'];
        filterVariant?: MRT_ColumnDef<T>['filterVariant'];
        filterSelectOptions?: MRT_ColumnDef<T>['filterSelectOptions'];
        ModalComponent?: ModalFunctionComponent<T>;
    } = {},
    onChange?: OnChangeFn,
    ...dependencies: IDependency<T, any>[]
) {
    const header = $header ?? camelToProper(name);
    return helper.accessor(name as any, {
        header,
        enableEditing: !readonly,
        Edit: Edit,
        Cell,
        filterFn,
        filterVariant,
        filterSelectOptions,
        id: id,
        meta: {
            dependencies,
            onChange,
            columnName: name,
            required: required,
            readonly: readonly,
            multiple: multiple ?? false,
            ...options
        },
        muiTableBodyCellProps: {
            'aria-required': required,
            'aria-readonly': readonly
        },
        sortUndefined: -1
    }) as MRT_ColumnDef<T, TValue>;
}
