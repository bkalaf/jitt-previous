import { MRT_Column, MRT_RowData } from 'material-react-table';
import { useFieldArray, useFormContext } from 'react-hook-form-mui';
import { ColumnMeta } from '@tanstack/react-table';
import { useEditColumnMeta } from './useEditColumnMeta';
import { useGetLIComponent } from './useGetLIComponent';
import { useDirectStaticColumns } from './useDirectStaticColumns';
import { useCallback } from 'react';

export function useFieldArrayControl<T extends MRT_RowData, TValue, TKeys extends keyof ColumnMeta<T, TValue>>(column: MRT_Column<T, TValue>, ...keys: TKeys[]) {
    const {
        columnName: name,
        required,
        readonly,
        objectType,
        keyType,
        ...rest
    } = useEditColumnMeta<T, TValue, TKeys | 'keyType' | 'objectType' | 'required' | 'readonly' | 'dependencies' | 'columnName'>({ column } as any, 'objectType', 'required', 'readonly', 'keyType', 'columnName', ...keys);
    const label = column.columnDef.header;
    const formContext = useFormContext();
    if (name == null) throw new Error('no name');
    const { fields, append, remove } = useFieldArray({
        name: name,
        control: formContext.control
    });
    const { error } = formContext.getFieldState(name);
    const { type, message: helperText } = error ?? {};
    if (type != null) console.error(`${type}: ${helperText}}`);
    const value = formContext.watch(name) as TValue[];
    if (objectType == null) throw new Error('no objectType');
    // const cols = useDirectColumns(objectType);
    const cols = useDirectStaticColumns(objectType);
    const LiComponent = useGetLIComponent(objectType);
    console.info(`formContext`, formContext.getValues());
    return {
        keyType,
        cols,
        value,
        fields,
        append,
        remove,
        name,
        label,
        helperText,
        control: formContext.control,
        objectType,
        LiComponent,
        required,
        isDisabled: useCallback(() => false, []),
        readonly,
        ...rest
    };
}
