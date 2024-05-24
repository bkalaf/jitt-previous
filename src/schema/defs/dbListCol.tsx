import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { camelToProper } from '../../common/text';
import { createListCell } from '../../components/Cells/createListCell';
import { createRealmListControl } from '../../components/controls/createDBListContnrol';
import { NullCell } from './NullCell';
import { ClothingCareMap } from '../laundryCare';
import { Path } from 'react-hook-form';
import { createFlattedListCell } from '../../components/Cells/createFlattedListCell';
import { baseCol } from './baseCol';
import { createCheckGroupControl } from './createCheckGroupControl';
import { createClothingCareControl } from '../../components/controls/createClothingCareControl';

export function dbListCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, header: string, objectType: string, readonly = false): MRT_ColumnDef<T> {
        const Cell = createListCell(objectType) as MRT_ColumnDef<T, any>['Cell'];
        // const Edit = createDBListControl(objectType) as MRT_ColumnDef<T, any>['Edit'];
        const Edit = createRealmListControl() as MRT_ColumnDef<T, any>['Edit'];
        return baseCol(helper, name, Cell, Edit, header, false, readonly);
        // return helper.accessor(name as any, {
        //     header: header ?? camelToProper(name),
        //     enableEditing: !readonly,
        //     Cell: createListCell(objectType),
        //     Edit: readonly ? NullCell : createDBListControl(objectType)
        // }) as any;
    };
}

// eslint-disable-next-line @typescript-eslint/ban-types
const converted = (section: keyof typeof ClothingCareMap) => (key: string) => (ClothingCareMap[section] as Record<string, { text: string; Element: React.FunctionComponent<{}> }>)[key].text;

export function dbFlattenedListCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: Path<T> & string, header: string, section: keyof typeof ClothingCareMap, readonly = false): MRT_ColumnDef<T> {
        const Cell = createFlattedListCell(converted(section)) as MRT_ColumnDef<T, any>['Cell'];
        const Edit = createClothingCareControl(section) as MRT_ColumnDef<T, any>['Edit'];
        return baseCol(helper, name, Cell, Edit, header, false, readonly);
        // return helper.accessor(name as any, {
        //     header: header ?? camelToProper(name),
        //     enableEditing: !readonly,
        //     Cell: createFlattedListCell(converted(section)),
        //     Edit: readonly ? NullCell : createClothingCareControl(section)
        // }) as any;
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
};
export type DBDictEnumColOptions = {
    readonly?: boolean;
    enumMap: EnumMap;
};
export type DBDictStringColOptions = {
    readonly?: boolean;
    maxLength?: number;
    minLength?: number;
};

export type DBDictColOptions = DBDictEnumColOptions | DBDictFacetedColOptions | DBDictStringColOptions;
