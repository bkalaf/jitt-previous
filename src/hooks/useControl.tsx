import { MRT_Column, MRT_RowData } from 'material-react-table';
import React, { useCallback, useMemo } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form-mui';
import { createRules } from '../components/controls/createRules';
import { useColumns } from './useColumns';
import { ColumnMeta } from '@tanstack/react-table';
import { useEditColumnMeta } from './useColumnMeta';
import { useGetLIComponent } from './useGetLIComponent';

export function useEditControlBase<T extends MRT_RowData, TValue, TKeys extends keyof ColumnMeta<T, TValue>, TElement extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | Element>(
    props: EditFunctionParams<T, TValue | undefined>,
    ...keys: TKeys[]
) {
    const { columnName, validate, min, max, maxLength, minLength, pattern, required, readonly, ...rest } = useEditColumnMeta<
        T,
        TValue,
        'columnName' | 'min' | 'minLength' | 'max' | 'maxLength' | 'required' | 'pattern' | 'validate' | 'readonly' | TKeys
    >(props, 'columnName', 'min', 'minLength', 'max', 'maxLength', ...keys);
    const validation = useMemo(() => createRules({ required, min, max, minLength, maxLength, pattern, validate }), [max, maxLength, min, minLength, pattern, required, validate]);
    const { accessorKey, id, header: label } = props.column.columnDef;
    const name = columnName ?? accessorKey ?? id ?? 'n/a';
    console.log('useEditControlBase', name, accessorKey, id);
    const formContext = useFormContext();
    const { control, getFieldState, setValue } = formContext;
    const { invalid, error } = getFieldState(name);
    const { type, message: helperText } = error ?? {};
    if (type != null) console.error(`${type}: ${helperText}}`);
    const onChange = useCallback(
        (ev?: React.ChangeEvent<TElement>, newValue?: any) => {
            ev?.preventDefault();
            ev?.stopPropagation();
            setValue(name, newValue ?? (ev?.target as HTMLInputElement | undefined)?.value);
        },
        [name, setValue]
    );
    return {
        name,
        readonly,
        required,
        label,
        validation,
        onChange,
        invalid,
        control,
        helperText,
        ...rest
    };
}

export function useBaseControl<T extends MRT_RowData, TValue>(column: MRT_Column<T, TValue>) {
    const { columnDef } = column;
    const { meta, accessorKey, id, header: label } = columnDef;
    const { columnName: name, readonly, required, min, max, minLength, maxLength, pattern, validate, type: inputType, step, objectType } = { required: false, readonly: false, columnName: accessorKey ?? id ?? 'n/a', ...(meta ?? {}) };
    const validation = useMemo(() => createRules({ required, min, max, minLength, maxLength, pattern, validate }), [max, maxLength, min, minLength, pattern, required, validate]);
    return {
        name,
        readonly,
        required,
        label,
        inputType,
        step,
        objectType,
        validation
    };
}
export function useFieldArrayControl<T extends MRT_RowData, TValue, TKeys extends keyof ColumnMeta<T, TValue>>(column: MRT_Column<T, TValue>, ...keys: TKeys[]) {
    const { columnName: name, required, readonly, objectType, ...rest } = useEditColumnMeta<T, TValue, TKeys | 'objectType' | 'required' | 'readonly' | 'columnName'>({ column } as any, 'objectType', 'required', 'readonly', 'columnName', ...keys);
    const label = column.columnDef.header;
    const formContext = useFormContext();
    if (name == null) throw new Error('no name');
    const { fields, append, remove } = useFieldArray({
        name: name,
        control: formContext.control,
    });
    const { error } = formContext.getFieldState(name);
    const { type, message: helperText } = error ?? {};
    if (type != null) console.error(`${type}: ${helperText}}`);
    const value = formContext.watch(name) as TValue[];
    if (objectType == null) throw new Error('no objectType');
    const cols = useColumns(objectType);
    const LiComponent = useGetLIComponent(objectType);
    return {
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
        readonly,
        ...rest
    };
}
export function useControl<T extends MRT_RowData, TValue, TElement extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(column: MRT_Column<T, TValue>) {
    const { name, readonly, required, label, inputType, step, objectType, validation } = useBaseControl(column);
    const formContext = useFormContext();
    const { control, getFieldState, setValue } = formContext;
    const { invalid, error } = getFieldState(name);
    const { type, message: helperText } = error ?? {};
    if (type != null) console.error(`${type}: ${helperText}}`);
    const onChange = useCallback(
        (ev?: React.ChangeEvent<TElement>, newValue?: any) => {
            ev?.preventDefault();
            ev?.stopPropagation();
            setValue(name, newValue ?? ev?.target?.value);
        },
        [name, setValue]
    );
    return {
        objectType,
        control,
        name,
        label,
        helperText,
        validation,
        readonly,
        required,
        invalid,
        onChange,
        type: inputType,
        inputProps: {
            step
        }
    };
}
