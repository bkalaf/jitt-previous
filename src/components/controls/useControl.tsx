import { MRT_Column, MRT_RowData } from 'material-react-table';
import React, { useCallback, useMemo } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form-mui';
import { createRules } from './createRules';
import { useColumns } from '../../hooks/useColumns';

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
export function useFieldArrayControl<T extends MRT_RowData, TValue>(column: MRT_Column<T, TValue>) {
    const { name, label, objectType, validation } = useBaseControl(column);
    const formContext = useFormContext();
    const { fields, append, remove } = useFieldArray({
        name: name,
        control: formContext.control,
        rules: validation as any
    });
    const { error } = formContext.getFieldState(name);
    const { type, message: helperText } = error ?? {};
    if (type != null) console.error(`${type}: ${helperText}}`);
    const value = formContext.watch(name) as TValue[];
    const cols = useColumns(objectType);

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
        objectType
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
