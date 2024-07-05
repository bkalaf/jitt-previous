import { MRT_RowData } from 'material-react-table';
import React, { useCallback, useMemo } from 'react';
import { useFormContext } from 'react-hook-form-mui';
import { createRules } from '../components/controls/createRules';
import { ColumnMeta } from '@tanstack/react-table';
import { useEditColumnMeta } from './useEditColumnMeta';
import { useDependencies } from './useDependencies';
import { useInvalidateCollection } from './useInvalidateCollection';

export function useEditControlBase<T extends MRT_RowData, TValue, TKeys extends keyof ColumnMeta<T, TValue>, TElement extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | Element>(
    props: EditFunctionParams<T, TValue | undefined>,
    ...keys: TKeys[]
) {
    const {
        columnName,
        validate,
        min,
        max,
        maxLength,
        minLength,
        pattern,
        required,
        readonly,
        onChange: $$change,
        dependencies,
        ...rest
    } = useEditColumnMeta<T, TValue, 'dependencies' | 'columnName' | 'min' | 'minLength' | 'max' | 'maxLength' | 'required' | 'pattern' | 'validate' | 'readonly' | 'onChange' | TKeys>(
        props,
        'columnName',
        'min',
        'minLength',
        'max',
        'maxLength',
        'onChange',
        'dependencies',
        ...keys
    );
    const $dependencies = useMemo(() => dependencies, [dependencies]);
    const validation = useMemo(() => createRules({ required, min, max, minLength, maxLength, pattern, validate }), [max, maxLength, min, minLength, pattern, required, validate]);
    const { accessorKey, id, header: label } = props.column.columnDef;
    const name = columnName ?? accessorKey ?? id ?? 'n/a';
    const formContext = useFormContext();
    const invalidator = useInvalidateCollection();
    const { control, getFieldState, getValues } = formContext;
    const { invalid, error } = getFieldState(name);
    const { type, message: helperText } = error ?? {};
    if (type != null) console.error(`${type}: ${helperText}}`);
    const onChange = useCallback(
        (ev?: React.ChangeEvent<TElement>, newValue?: any) => {
            ev?.preventDefault();
            ev?.stopPropagation();
            if ($$change) {
                $$change(formContext, getValues()[name], newValue);
            }
            // setValue(name, newValue ?? (ev?.target as HTMLInputElement | undefined)?.value);
            invalidator()
        },
        [$$change, formContext, getValues, invalidator, name]
    );
    const isDisabled = useDependencies(...($dependencies ?? []));
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
        isDisabled,
        ...rest
    };
}
