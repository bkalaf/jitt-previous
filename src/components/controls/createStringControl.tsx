import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import React, { useCallback, useMemo } from 'react';
import { SelectElement, DatePickerElement, TextFieldElement, useFormContext, CheckboxElement } from 'react-hook-form-mui';
import { createRules } from './createRules';
import { camelToProper } from '../../common/text';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';

export function createStringControl<T extends MRT_RowData, U>(opts: { maxLength?: number; minLength?: number; pattern?: RegExp; required?: boolean; type?: React.HTMLInputTypeAttribute; min?: number; max?: number; step?: number; readonly?: boolean }): Exclude<MRT_ColumnDef<T, any>['Edit'], undefined> {
    return function StringControl(props: Parameters<Exclude<MRT_ColumnDef<T, U | undefined>['Edit'], undefined>>[0]) {
        useWhyDidIUpdate('StringControl', props);
        const { accessorKey, id, header } = props.column.columnDef;
        const name = accessorKey ?? id;
        const type = opts.type ?? 'text';
        const { control } = useFormContext();
        const rules = useMemo(() => createRules(opts), []);

        return <TextFieldElement name={name} control={control} validation={rules} required={opts.required ?? false} type={type} aria-readonly={opts.readonly ?? false} label={header} inputProps={{ step: opts.step }} />;
    };
}

export function createSelectControl<T extends MRT_RowData>(opts: { options: { key: string; text: string }[]; required?: boolean }): Exclude<MRT_ColumnDef<T, any>['Edit'], undefined> {
    return function SelectControl(props: Parameters<Exclude<MRT_ColumnDef<T, string | undefined>['Edit'], undefined>>[0]) {
        const { accessorKey, id, header } = props.column.columnDef;
        const name = accessorKey ?? id;
        const { control } = useFormContext();

        return <SelectElement name={name} control={control} valueKey='key' labelKey='text' options={opts.options} label={header} required={opts.required} />;
    };
}

export function createBoolControl<T extends MRT_RowData>() {
    return function BoolControl(props: Parameters<Exclude<MRT_ColumnDef<T, boolean | undefined>['Edit'], undefined>>[0]) {
        const { accessorKey, id, header } = props.column.columnDef;
        const name = accessorKey ?? id;
        const { control } = useFormContext();
        return <CheckboxElement name={name} label={header ?? camelToProper(name)} control={control} color='primary' />;
    };
}
export function createDateControl<T extends MRT_RowData>(opts: { required?: boolean; disablePast?: boolean; disableFuture?: boolean; readonly?: boolean }) {
    return function DateControl(props: Parameters<Exclude<MRT_ColumnDef<T, Date | undefined>['Edit'], undefined>>[0]) {
        const { accessorKey, id, header } = props.column.columnDef;
        const name = accessorKey ?? id;
        const { control, setValue } = useFormContext();
        const { required, disableFuture, disablePast, readonly } = { readonly: false, disableFuture: false, disablePast: false, required: false, ...(opts ?? {}) };
        const onChange = useCallback(
            (newValue: any, context: any) => {
                console.log(`newValue`, newValue);
                console.log('context', context);
                setValue(name, newValue);
            },
            [name, setValue]
        );

        return <DatePickerElement name={name} label={header} control={control} closeOnSelect required={required} disableFuture={disableFuture} disablePast={disablePast} onChange={onChange} formatDensity='dense' readOnly={readonly} />;
    };
}
