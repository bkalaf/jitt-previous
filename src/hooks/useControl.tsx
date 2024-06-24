import { MRT_Column, MRT_RowData } from 'material-react-table';
import React, { useCallback, useMemo } from 'react';
import { useFormContext } from 'react-hook-form-mui';
import { createRules } from '../components/controls/createRules';
import { ColumnMeta } from '@tanstack/react-table';
import { useEditColumnMeta } from './useColumnMeta';

export function useEditControlBase<T extends MRT_RowData, TValue, TKeys extends keyof ColumnMeta<T, TValue>, TElement extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | Element>(
    props: EditFunctionParams<T, TValue | undefined>,
    ...keys: TKeys[]
) {
    const { columnName, validate, min, max, maxLength, minLength, pattern, required, readonly, onChange: $$change, ...rest } = useEditColumnMeta<
        T,
        TValue,
        'columnName' | 'min' | 'minLength' | 'max' | 'maxLength' | 'required' | 'pattern' | 'validate' | 'readonly' |'onChange' | TKeys
    >(props, 'columnName', 'min', 'minLength', 'max', 'maxLength', 'onChange', ...keys);
    const validation = useMemo(() => createRules({ required, min, max, minLength, maxLength, pattern, validate }), [max, maxLength, min, minLength, pattern, required, validate]);
    const { accessorKey, id, header: label } = props.column.columnDef;
    const name = columnName ?? accessorKey ?? id ?? 'n/a';
    console.log('useEditControlBase', name, accessorKey, id);
    const formContext = useFormContext();
    console.info(`formContext pulled`, formContext);
    const { control, getFieldState, setValue, getValues } = formContext;
    const { invalid, error } = getFieldState(name);
    const { type, message: helperText } = error ?? {};
    if (type != null) console.error(`${type}: ${helperText}}`);
    const onChange = useCallback(
        (ev?: React.ChangeEvent<TElement>, newValue?: any) => {
            ev?.preventDefault();
            ev?.stopPropagation();
            if ($$change) {
                $$change(setValue, getValues()[name], newValue);
            }
            setValue(name, newValue ?? (ev?.target as HTMLInputElement | undefined)?.value);
        },
        [$$change, getValues, name, setValue]
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
