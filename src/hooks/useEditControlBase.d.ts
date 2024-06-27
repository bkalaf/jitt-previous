import { MRT_RowData } from 'material-react-table';
import React from 'react';
import { ColumnMeta } from '@tanstack/react-table';
export declare function useEditControlBase<T extends MRT_RowData, TValue, TKeys extends keyof ColumnMeta<T, TValue>, TElement extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | Element>(props: EditFunctionParams<T, TValue | undefined>, ...keys: TKeys[]): {
    name: string;
    readonly: boolean | undefined;
    required: boolean | undefined;
    label: string;
    validation: {
        validate: Record<string, (value: TValue, formValues: Record<string, any>) => string | boolean | string[] | Promise<string | boolean | string[]>> | undefined;
        pattern: {
            value: RegExp;
            message: string;
        } | undefined;
        required: {
            value: true;
            message: string;
        } | undefined;
        minLength: {
            value: number;
            message: string;
        } | undefined;
        maxLength: {
            value: number;
            message: string;
        } | undefined;
        min: {
            value: number;
            message: string;
        } | undefined;
        max: {
            value: number;
            message: string;
        } | undefined;
    };
    onChange: (ev?: React.ChangeEvent<TElement>, newValue?: any) => void;
    invalid: boolean;
    control: import("react-hook-form-mui").Control<import("react-hook-form-mui").FieldValues, any>;
    helperText: string | undefined;
    isDisabled: () => boolean;
} & Omit<{ [P in "pattern" | "onChange" | "required" | "min" | "max" | "maxLength" | "minLength" | "validate" | "dependencies" | "columnName" | "readonly" | TKeys]: ColumnMeta<T, TValue>[P]; }, "pattern" | "onChange" | "required" | "min" | "max" | "maxLength" | "minLength" | "validate" | "dependencies" | "columnName" | "readonly">;
