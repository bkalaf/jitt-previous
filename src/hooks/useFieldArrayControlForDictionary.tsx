import { MRT_Column, MRT_RowData } from 'material-react-table';
import { useFormContext } from 'react-hook-form-mui';
import { ColumnMeta } from '@tanstack/react-table';
import { useEditColumnMeta } from './useEditColumnMeta';
import { useGetLIComponent } from './useGetLIComponent';
import { useCallback } from 'react';
import { StringControl } from '../components/table/controls/StringControl';
import { SelectControl } from '../components/table/controls/SelectControl';
import { useDirectStaticColumns } from './useDirectStaticColumns';

export function useFieldArrayControlForDictionary<T extends MRT_RowData, TValue, TKeys extends keyof ColumnMeta<T, TValue>>(column: MRT_Column<T, TValue>, ...keys: TKeys[]) {
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
    const append = useCallback(
        ({ key, value }: { key: string; value: TValue }) => {
            const current = formContext.getValues()[name];
            formContext.setValue(name, { ...current, [key]: value });
        },
        [formContext, name]
    );
    const remove = useCallback(
        (key: string) => {
            const current = formContext.getValues()[name];
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { [key]: _, ...remain } = current;
            formContext.setValue(name, remain);
        },
        [formContext, name]
    );
    const { error } = formContext.getFieldState(name);
    const { type, message: helperText } = error ?? {};
    if (type != null) console.error(`${type}: ${helperText}}`);
    const value = formContext.watch(name) as DictionaryBack<TValue>;
    if (objectType == null) throw new Error('no objectType');
    const cols = useDirectStaticColumns(objectType);
    const LiComponent = useGetLIComponent(objectType);
    console.info(`formContext`, formContext.getValues());
    const enumType =
        keyType === 'string' ? undefined
        : keyType != null ? keyType
        : undefined;
    const KeyControl =
        keyType === 'string' ? (StringControl as React.FunctionComponent<EditFunctionParams<T>>)
        : keyType != null ? (SelectControl as React.FunctionComponent<EditFunctionParams<T>>)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        : (((props: EditFunctionParams<T>) => null) as React.FunctionComponent<EditFunctionParams<T>>);
    // const [KeyControl, enumType]: [React.FunctionComponent<EditFunctionParams<T>>, string | undefined] =
    //     keyType === 'string' ? [StringControl]
    //     : keyType != null ? [SelectControl, keyType]
    //     : [(props: EditFunctionParams<T>) => null];
    return {
        KeyControl,
        keyType,
        enumType,
        cols,
        value,
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
        isDisabled: useCallback(() => false, []),
        ...rest
    };
}
