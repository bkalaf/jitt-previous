import { MRT_Cell, MRT_Column, MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { camelToProper } from '../../common/text';
import { createListCell } from '../../components/Cells/createListCell';
import { createClothingCareControl, createDBDictionaryControl, createDBListControl } from '../../components/controls/createDBListContnrol';
import { NullCell } from './NullCell';
import { createDictionaryCell } from '../../components/Cells/createDictionaryCell';
import { ClothingCareMap } from '../laundryCare';
import { useEditControl } from '../../hooks/useEditControl';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
import { Path, useFormContext } from 'react-hook-form';
import { CheckboxButtonGroup } from 'react-hook-form-mui';
import { useCallback } from 'react';
import { createFlattedListCell } from '../../components/Cells/createFlattedListCell';

export function dbListCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, header: string, objectType: string, readonly = false): MRT_ColumnDef<T> {
        return helper.accessor(name as any, {
            header: header ?? camelToProper(name),
            enableEditing: !readonly,
            Cell: createListCell(objectType),
            Edit: readonly ? NullCell : createDBListControl(objectType)
        }) as any;
    };
}


// eslint-disable-next-line @typescript-eslint/ban-types
const converted = (section: keyof typeof ClothingCareMap) => (key: string) => (ClothingCareMap[section] as Record<string, { text: string, Element: React.FunctionComponent<{}> }>)[key].text;

export function dbFlattenedListCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: Path<T> & string, header: string, section: keyof typeof ClothingCareMap, readonly = false): MRT_ColumnDef<T> {
        return helper.accessor(name as any, {
            header: header ?? camelToProper(name),
            enableEditing: !readonly,
            Cell: createFlattedListCell(converted(section)),
            Edit: readonly ? NullCell : createClothingCareControl(section)
        }) as any;
    };
}

export function createCheckGroupControl<T extends MRT_RowData>(options: string[]) {
    const $options = options.map(x => ({ id: x, label: camelToProper(x) }))
    return function CheckGroupControl(props: EditFunctionParams<T, string[]>) {
        useWhyDidIUpdate('DBDictionaryControl', props);
        const { cell, column } = props;
        const { name, label } = useEditControl<T, string[]>(column as MRT_Column<T>, cell as MRT_Cell<T, any>)
        const { control, setValue } = useFormContext();
        const $onChange = useCallback(
            (data: string[]) => {
                setValue(name, data);
            },
            [name, setValue]
        );
        return (
            <CheckboxButtonGroup
                    name={name}
                    control={control}
                    options={$options}
                    checkboxColor='warning'
                    // helperText={helperText}
                    label={label}
                    // rules={validation}
                    onChange={$onChange}
                    // required={required}
                    row
                    // aria-readonly={readOnly}
                />
        );
    };
}

export function flagsCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, header: string, opts: string[], readonly = false): MRT_ColumnDef<T> {
        return helper.accessor(name as any, {
            header: header ?? camelToProper(name),
            enableEditing: !readonly,
            Cell: createFlattedListCell((x: string) => camelToProper(x)) as any,
            Edit: readonly ? NullCell : createCheckGroupControl(opts)
        }) as any;
    };
}

export type DBDictFacetedColOptions = {
    readonly?: boolean;
    faceted: true;
}
export type DBDictEnumColOptions = {
    readonly?: boolean;
    enumMap: EnumMap;
}
export type DBDictStringColOptions = {
    readonly?: boolean;
    maxLength?: number;
    minLength?: number;
}

export type DBDictColOptions = DBDictEnumColOptions | DBDictFacetedColOptions | DBDictStringColOptions;

export function dbDictCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function(name: keyof T & string, header: string, objectType: string, opts?: DBDictColOptions): MRT_ColumnDef<T> {
        const { readonly, faceted, enumMap } = { readonly: false, faceted: false, enumMap: undefined, ...opts ?? {} }
        return helper.accessor(name as any, {
            header: header ?? camelToProper(name),
            enableEditing: !readonly,
            Cell: createDictionaryCell(objectType),
            Edit: (readonly ? NullCell : createDBDictionaryControl(objectType, faceted, enumMap)) as any
        }) as any;
    };
}