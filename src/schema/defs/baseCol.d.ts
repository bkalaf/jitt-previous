/// <reference types="react" />
import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { ColumnMeta } from '@tanstack/react-table';
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
export declare function baseCol<T extends MRT_RowData, TValue>(helper: MRT_ColumnHelper<T>, name: keyof T & string, Cell: MRT_ColumnDef<T, TValue>['Cell'], Edit: MRT_ColumnDef<T, TValue>['Edit'], $header?: string, required?: boolean, readonly?: boolean, { id, multiple, ...options }?: {
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
    enumInfo?: ColumnMeta<T, TValue>['enumInfo'];
    multiple?: ColumnMeta<T, TValue>['multiple'];
    comparator?: ColumnMeta<T, TValue>['comparator'];
    flags?: ColumnMeta<T, TValue>['flags'];
    keyType?: ColumnMeta<T, TValue>['keyType'];
    id?: string;
}, onChange?: (setValue: (name: string, value: any) => void, oldValue: any, newValue: any) => void, ...dependencies: IDependency<T, any>[]): MRT_ColumnDef<T, TValue>;
